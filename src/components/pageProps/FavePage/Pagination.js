import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { paginationItems } from "../../../constants";

const items = paginationItems;
function Items({ currentItems , selectedCategory }) {

  const filteredItems = selectedCategory
  ? currentItems.filter((item) => item.categ === selectedCategory)
  : currentItems;

  return (
    <>
    {filteredItems.map((item) => (
      <div key={item._id} className="w-full">
        <Product
          _id={item._id}
          img={item.img}
          productName={item.productName}
          rate={item.rate}
          categ={item.categ}
          des={item.des}
        />
      </div>
    ))}
  </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    setItemStart(newOffset);
    setSelectedCategory(""); 
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="flex items-center gap-2 text-base text-[#767676] relative mb-5">
        <h2 className="block font-black text-black">Category : </h2>
        <div className="flex ml-2 gap-3">
          <button
          className={`text-gray-400 border-2 font-black rounded border-[#808000] p-1 hover:bg-[#808000] hover:text-white ${
            selectedCategory === "" ? "bg-[#808000]" : ""
          }`}
            onClick={() => handleCategoryClick("")}
          >
            All
          </button>
          <button
           className={`text-gray-400 border-2 font-black rounded border-[#808000] p-1 hover:bg-[#808000] hover:text-white ${
            selectedCategory === "Quick meals" ? "bg-[#808000]" : ""
          }`}
            onClick={() => handleCategoryClick("Quick meals")}
          >
            Quick Meals
          </button>
          <button
           className={`text-gray-400 border-2 font-black rounded border-[#808000] p-1 hover:bg-[#808000] hover:text-white ${
            selectedCategory === "Vegetarian" ? "bg-[#808000]" : ""
          }`}
            onClick={() => handleCategoryClick("Vegetarian")}
          >
            Vegetarian
          </button>
          <button
           className={`text-gray-400 border-2 font-black rounded border-[#808000] p-1 hover:bg-[#808000] hover:text-white ${
            selectedCategory === "Dessert" ? "bg-[#808000]" : ""
          }`}
            onClick={() => handleCategoryClick("Dessert")}
          >
            Dessert
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10 ">
        <Items currentItems={currentItems} selectedCategory={selectedCategory} />
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-olive-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-[#808000] text-white"
        />
        <p className="text-base font-normal text-lightText">
          Products from {itemStart === 0 ? 1 : itemStart} to {endOffset} of{" "}
          {items.length}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
