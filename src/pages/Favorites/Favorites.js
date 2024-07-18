import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetFave } from "../../redux/culinaSlice";
import { emptyFav } from "../../assets/images/index";
import ItemCard from "./ItemCard";

const Favorites = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.culinaReducer.products);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Favorites" />
      {products.length > 0 ? (
        <div className="pb-20">
          <div className="mt-5">
            {products.map((item) => (
              <div key={item._id}>
                <ItemCard item={item} />
              </div>
            ))}
          </div>

          <button
            onClick={() => dispatch(resetFave())}
            className="py-2 px-10 bg-[#808000] text-white font-semibold uppercase mb-4  duration-300"
          >
            Reset Favorites
          </button>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto "
              src={emptyFav}
              alt="emptyFave"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
              Your Favorites are <span className=" text-[#808000]">Empty!</span>
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              Your favorites recipe lives to serve. Give it purpose - fill it
              with Recipes and make it happy.
            </p>
            <Link to="/recipe">
              <button className="bg-[#808000] rounded-md cursor-pointer hover:bg-olive-400 active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                Continue Exproling
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Favorites;
