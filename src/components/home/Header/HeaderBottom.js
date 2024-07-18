import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaUser, FaCaretDown } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { paginationItems } from "../../../constants";

const HeaderBottom = () => {
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();
 

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = paginationItems.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

    // ==============   handle click outside of the dropdown menu
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (showUser && !event.target.closest('.flex.gap-4')) {
        setShowUser(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showUser]);

  //        ======      Logout  

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };


  // ------------ check if logged in ----------------------
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const usar = JSON.parse(localStorage.getItem("user"));
  const userName = usar?.email ;
  // console.log(usar, "user");
  useEffect(() => {
    if (usar) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [usar]);

  return (
    <div className="w-full bg-[#F5F5F3] relative">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          <h1 className="font-black">
            Eplore <span className="text-[#808000]">Recipe</span> With{" "}
            <span className="text-[#808000]">Us</span> !
          </h1>
          <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Search your Recipe here"
            />
            <FaSearch className="w-5 h-5 text-[#808000]" />
            {searchQuery && (
              <div
                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {searchQuery &&
                  filteredProducts.map((item) => (
                    <div
                      onClick={() =>
                        navigate(
                          `/product/${item.productName
                            .toLowerCase()
                            .split(" ")
                            .join("")}`,
                          {
                            state: {
                              item: item,
                            },
                          }
                        ) & setSearchQuery("")
                      }
                      key={item._id}
                      className="max-w-[600px] h-28 bg-gray-100 rounded mb-3 flex items-center gap-3"
                    >
                      <img className="w-24" src={item.img} alt="productImg" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg">
                          {item.productName}
                        </p>
                        <p className="text-sm text-[#808000]">
                          Rate:{" "}
                          <span className="text-primeColor font-semibold">
                            {item.rate}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
          
          <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
           <p className="font-bold text-xs">{userName}</p>
            <div onClick={() => setShowUser(true)} className="flex">
              <FaUser className=" text-[#808000] " />
              <FaCaretDown className=" text-[#808000] " />
            </div>
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-6  z-10 bg-primeColor w-58 text-[#767676] h-auto p-4 pb-6 lg:right-2 sm:right-[-1] md:right-2"
              >
              {!isLoggedIn  && (
                <Link onClick={() => setShowUser(false)} to="/signin">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Login
                  </li>
                </Link>
              )}
                {!isLoggedIn && (
                   <Link onClick={() => setShowUser(false)} to="/signup">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Sign Up
                  </li>
                </Link>
                )}
               
                {isLoggedIn && (
                   <div onClick={() => setShowUser(false)} >
                  <li onClick={handleLogOut} className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Log Out
                  </li>
                </div>
                )}
              </motion.ul>
            )}
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;
