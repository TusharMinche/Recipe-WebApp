import React from "react";
import { Link } from "react-router-dom";
import { BsSuitHeartFill } from "react-icons/bs";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SpecialCase = () => {

  // ------------ check if logged in ----------------------
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const usar = JSON.parse(localStorage.getItem("user"));
  // console.log(usar, "user");
  useEffect(() => {
    if (usar) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [usar]);

  const handleLoggedIn = (e) =>{
    e.preventDefault();
    if(isLoggedIn) {
      navigate('/fave');
      }
      else{
           navigate('/signin');
      }
  };

  return (
    <div className="fixed top-52 right-2 z-20 hidden md:flex flex-col gap-2">
      <Link onClick={(e) => handleLoggedIn(e)}>
        <div className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative">
          <div className="flex justify-center items-center">
            <BsSuitHeartFill className="text-2xl text-[#808000] -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />

            <BsSuitHeartFill className="text-2xl text-[#808000] -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-xs font-semibold font-titleFont">Favorites</p>
        </div>
      </Link>
    </div>
  );
};

export default SpecialCase;
