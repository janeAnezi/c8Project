import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function MealListing() {
  const navigate = useNavigate();

  function getMealDetails() {
    // to navigate to the meal details page
    navigate("/MealDetails");
  }

  return (
    <>
      <h2 className="flex content-start text-[#101010] text-base font-semibold ">
        Meal listing
      </h2>
      <ul className="flex flex-col gap-2 font-semibold">
        <li className="flex flex-row items-center justify-between">
          <div className="flex gap-2">
            <img
              src="https://cdn.pixabay.com/photo/2015/02/06/15/51/steak-626206_1280.jpg"
              className="w-[50px] h-[50px] object-contain"
              alt=""
              loading="lazy"
            />
            <p className="text-[11px] flex items-center">Nigerian Jollof </p>
          </div>

          <button
            onClick={getMealDetails}
            className="flex items-center justify-center gap-2 "
          >
            <span className="text-[12px]">View</span>
            <MdOutlineKeyboardArrowRight className="text-xxl" />
          </button>
        </li>
        <hr />

        <li className="flex flex-row  items-center justify-between">
          <div className="flex gap-2 ">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/11/15/59/ramen-8627028_960_720.jpg"
              className="w-[50px] h-[50px] object-contain"
              alt=""
              loading="lazy"
            />
            <p className="text-[11px] flex items-center">Cabbage Stir Fry </p>
          </div>

          <button
            onClick={getMealDetails}
            className="flex align-center justify-center gap-2 "
          >
            <span className="text-[12px]">View</span>
            <MdOutlineKeyboardArrowRight className="text-xxl" />
          </button>
        </li>
        <hr />
        <li className="flex flex-row  items-center justify-between ">
          <div className="flex gap-1">
            <img
              src="https://cdn.pixabay.com/photo/2019/06/09/23/58/spaghetti-4263260_960_720.jpg"
              className="w-[50px] h-[50px] object-contain"
              alt=""
              loading="lazy"
            />
            <p className="text-[11px] flex items-center ">
              Cauliflower Fried spaghetti
            </p>
          </div>

          <button
            onClick={getMealDetails}
            className="flex align-center justify-center gap-1"
          >
            <span className="text-[12px]">View</span>
            <MdOutlineKeyboardArrowRight className="text-xxl" />
          </button>
        </li>
      </ul>
    </>
  );
}

export default MealListing;
