import React from "react";
import image from "../assets/foodplan.jpg";
import { Link } from "react-router-dom";

const GetStarted = ({ onNext }) => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      style={{
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.8) 60%), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: `center`,
      }}
    >
      <h1 className="text-4xl font-bold mb-4 text-white">MealPal</h1>
      <p className="text-gray-200 text-[1.05rem] mb-6 font-medium text-center px-2">
        Discover Amazing Meal Plans to put you in the pink of health
      </p>
      <button
        onClick={onNext}
        className="w-80 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-4 rounded-md"
      >
        Get Started
      </button>
      <p className="text-gray-300 mt-4">
        Already have an account?{" "}
        <span>
          <Link to="/signin" className="text-blue-500 hover:text-blue-600">
            Sign in
          </Link>
        </span>
      </p>
    </div>
  );
};

export default GetStarted;
