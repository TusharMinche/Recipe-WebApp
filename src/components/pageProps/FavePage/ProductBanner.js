import React from "react";
import { GoTriangleDown } from "react-icons/go";

const ProductBanner = ({ itemsPerPageFromBanner }) => {

  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
      <div className="flex items-center gap-2 md:gap-6 mt-4 md:mt-0">
        <div className="flex items-center gap-2 text-[#767676] relative float-right" >
          <label className="block font-black text-black">Show:</label>
          <select
            onChange={(e) => itemsPerPageFromBanner(+e.target.value)}
            id="coun"
            className="w-16 md:w-20 border-[1px] border-olive-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >
            <option value="3">3</option>
            <option value="9">9</option>
            <option value="16">16</option>
          </select>
          <span className="absolute text-sm right-3 top-2.5">
            <GoTriangleDown className="text-[#808000]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
