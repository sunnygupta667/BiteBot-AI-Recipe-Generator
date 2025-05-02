import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "Create Recipe", path: "/create-recipe" },
    { id: 3, text: "View Recipe", path: "/view-recipe" },
    { id: 4, text: "About Us", path: "/about" },
    { id: 5, text: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-20 shadow-md bg-gradient-to-r from-gray-950 via-blue-950 to-gray-950 text-white fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center h-20">
        {/* Logo Section */}
        <div className="flex items-center space-x-4 cursor-pointer">
          <img
            src="https://images.pexels.com/photos/59999/raspberries-fruits-fruit-berries-59999.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="h-12 w-12 rounded-full hover:scale-110 duration-300 animate-glow2"
            alt="Logo"
          />
          <h1 className="text-xl font-bold transition-transform hover:scale-105">
            Bite<span className="text-yellow-300 text-2xl ml-[-7px]"> Bot</span>
            <p className="text-sm font-medium">
              <span className="text-orange-500">Make</span>
              <span className="text-white">Your</span>
              <span className="text-green-500">Recipe</span>
            </p>
          </h1>
        </div>

        {/* Desktop Navbar */}
        <div>
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text, path }) => (
              <li
                className="transition transform hover:scale-110 hover:text-cyan-500 duration-300 cursor-pointer text-lg"
                key={id}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "text-cyan-500 font-bold" : "text-white"
                  }
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setMenu(!menu)}
            className="md:hidden text-gray-300 cursor-pointer"
          >
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {menu && (
        <div className="bg-black bg-opacity-90 fixed inset-0 z-40 flex items-center justify-center">
          <ul className="md:hidden flex flex-col space-y-6 text-2xl font-semibold text-white">
            {navItems.map(({ id, text, path }) => (
              <li
                className="hover:text-fuchsia-500 hover:scale-110 duration-300 cursor-pointer"
                key={id}
              >
                <NavLink
                  to={path}
                  onClick={() => setMenu(false)}
                  className={({ isActive }) =>
                    isActive ? "text-fuchsia-500 font-bold" : "text-white"
                  }
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
