import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import lo from "../../../assets/images/Logo.png";
import Image from "../../designLayouts/Image";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);

  const location = useLocation();
  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

// ------------ check if logged in ----------------------
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

  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          <Link to="/">
            <div className="flex flex-row justify-center items-center">
              <Image className="w-12 h-12 object-cover" imgSrc={lo} />{" "}
              <h1 className="mx-1 text-3xl font-black">
                Culina
                <span className="text-gray-400">Share</span>
              </h1>
            </div>
          </Link>
          <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-2"
              >
                <>
                {navBarList.map(({ _id, title, link }) => {
                    if (link === '/fave' && !isLoggedIn) {
                      return null; 
                    } else {
                      return (
                        <NavLink
                          key={_id}
                          className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-gray-400 hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#808000]  md:border-r-[2px] border-r-[#808000] hoverEffect last:border-r-0"
                          to={link}
                          state={{ data: location.pathname.split("/")[1] }}
                        >
                          <li>{title}</li>
                        </NavLink>
                      );
                    }
                  })}
                </>
              </motion.ul>
            )}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            />
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-400 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className="w-full h-full bg-primeColor p-6">
                    <img className="w-28 mb-6" src={lo} alt="logoLight" />
                    <ul className="text-gray-400 flex flex-col gap-2">
                    {navBarList.map((item) => (
                      item.link === '/fave' && !isLoggedIn ? null : (
                        <li
                          className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                          key={item._id}
                        >
                          <NavLink
                            to={item.link}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                        )
                      ))}
                    </ul>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;
