import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect } from "react";
import { useState } from "react";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function MealListing() {
  const navigate = useNavigate();

  function getMealDetails() {
    // to navigate to the meal details page
    navigate("/MealDetails");
  }

  return (
    <>
      <h2 className="text-[#101010] text-base font-semibold">Meal Listing</h2>
      <div className="flex align-center justify-between ">
        <div className="flex justify-between">
          <img
            src=""
            className="w-[60px] h-[60px] object-contain"
            alt=""
            loading="lazy"
          />
          <p className="text-base"> </p>
        </div>

        <button
          onClick={getMealDetails}
          className="flex align-center justify-center gap-2 "
        >
          <span>View</span>
          <MdOutlineKeyboardArrowRight className="text-xxl" />
        </button>
      </div>
    </>
  );
}

export default MealListing;
