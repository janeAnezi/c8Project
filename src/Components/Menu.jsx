import React, { useState } from "react";
import menu from "../assets/menubutton.jpg";
import close from "../assets/closebutton.png";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      className={`bg-white absolute rounded-md ${
        isMenuOpen
          ? `top-0 left-0 lg:top-4 lg:left-4`
          : `top-4 left-4 lg:top-6 lg:left-6`
      }`}
    >
      <button
        className={`p-1 bg-white rounded-md focus:outline-none ${
          isMenuOpen ? `hidden` : `block`
        }`}
        onClick={toggleMenu}
      >
        <img
          src={isMenuOpen ? close : menu}
          alt="menu button"
          className="w-7"
        />
      </button>
      <div
        className={`${
          isMenuOpen ? `block` : `hidden`
        } w-screen h-screen lg:h-auto lg:w-auto mr-10 mb-10`}
      >
        <button
          className=" p-2 static mt-4 ml-4 lg:mt-2 lg:ml-2"
          onClick={toggleMenu}
        >
          <img src={`${close}`} alt="menu button" className=" bg-white w-8" />
        </button>
        <div className="flex flex-col ml-6 mt-2">
          <span className="text-2xl mb-4 font-bold">Menu</span>
          <Link
            to="/home"
            className="py-1 cursor-pointer hover:text-neutral-900"
          >
            Home
          </Link>
          <Link
            to="/profile"
            className="py-1 cursor-pointer hover:text-neutral-900"
          >
            Account
          </Link>
          <Link
            to="/home"
            className="py-1 cursor-pointer hover:text-neutral-900"
          >
            Bookmark
          </Link>
          <Link
            to="/home"
            className="py-1 cursor-pointer hover:text-neutral-900"
          >
            Meal plan
          </Link>
          <div className="flex gap-4 mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 rounded-md text-white py-2 px-4">
              Create a meal plan
            </button>
            <button className="bg-gray-600 py-2 px-4 rounded -md text-neutral-300 hover:bg-gray-700">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
