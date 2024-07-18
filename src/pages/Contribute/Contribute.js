import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { paginationItems } from "../../constants";
import { useNavigate } from "react-router-dom";

const Contribute = () => {

  // ------------ check if logged in ----------------------
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const usar = JSON.parse(localStorage.getItem("user"));
  console.log(usar, "user");
  useEffect(() => {
    if (usar) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [usar]);

  const navigate = useNavigate();
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  const [formData, setFormData] = useState({
    recipeName: "",
    recipeImage: "",
    category: "",
    rate: "",
    instruction: ""
  });
  
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.recipeName.trim() === "" ||
      formData.recipeImage.trim() === "" ||
      formData.category.trim() === "" ||
      formData.rate.trim() === "" ||
      formData.instruction.trim() === ""
    ) {
      setErrorMessage("Please fill all fields.");
      return;
    }

    const newItem = {
      _id: paginationItems.length + 1, 
      img: formData.recipeImage,
      productName: formData.recipeName,
      rate: parseFloat(formData.rate),
      categ: formData.category,
      des: formData.instruction
    };
    paginationItems.unshift(newItem);
    setFormData({
      recipeName: "",
      recipeImage: "",
      category: "",
      rate: "",
      instruction: ""
    }); 
    if(!isLoggedIn){
      navigate("/signin")
    } else {
      navigate("/recipe");
    }  
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Contibute" prevLocation={prevLocation} />
        <form className="pb-20">
          <h1 className="font-titleFont font-semibold text-3xl">
            Fill <span className="text-[#808000]">up</span> a Form <span className="text-[#808000]">To</span> add a <span className="text-[#808000]">Recipe</span>
          </h1>
          <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Re<span className="text-[#808000]">ci</span>pe Name
              </p>
              <input      
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#808000]"
                type="text"
                name="recipeName"
                value={formData.recipeName}
                onChange={handleChange}
                placeholder="Enter your recipe name here"
              />    
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Re<span className="text-[#808000]" >ci</span>pe Image
              </p>
              <input    
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#808000]"
                type="text"
                name="recipeImage"
                value={formData.recipeImage}
                onChange={handleChange}
                placeholder="Input the image Link of the recipe"
              />
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Ca<span className="text-[#808000]">teg</span>ory</p>
              <input     
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#808000]"
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Recipe Category"
              />   
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
               R<span className="text-[#808000]">a</span>te
              </p>
              <input    
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#808000]"
                type="text"
                name="rate"
                value={formData.rate}
                onChange={handleChange}
                placeholder="recipe rate"
              />
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
               In<span className="text-[#808000]">struct</span>ion
              </p>
              <textarea
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#808000]  overflow-y-auto scrollbar-none resize-y h-auto"
                style={{ minHeight: '5rem', maxHeight: '80vh' }}
                type="text"
                name="instruction"
                value={formData.instruction}
                onChange={handleChange}
                placeholder="Enter How to prepare this recipe"
              ></textarea>
            </div>
            {errorMessage && (
            <p className="text-red-500">{errorMessage}</p>
          )}
            <button
              onClick={(e) => handleSubmit(e)}
              className="w-44 bg-[#808000] text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-olive-400 hover:text-white duration-200"
            >
              SUBMIT
            </button>
          </div>
        </form>
    </div>
  );
};

export default Contribute;
