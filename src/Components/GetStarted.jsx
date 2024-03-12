import React from "react";
import image from "../assets/foodplan.jpg";

const GetStarted = ({ onClick }) => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: `center`,
      }}
    >
      <h1 className="text-3xl font-bold mb-4 text-white">MealPal</h1>
      <p className="text-gray-300 mb-6 text-center">
        Discover Amazing Meal Plans to put you in the pink of health
      </p>
      <button
        onClick={onClick}
        className="w-80 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-4 rounded-md"
      >
        Get Started
      </button>
      <p className="text-gray-400 mt-4">
        Already have an account?{" "}
        <span>
          <a href="" className="text-blue-500 hover:text-blue-600">
            Sign in
          </a>
        </span>
      </p>
    </div>
  );
};

export default GetStarted;
