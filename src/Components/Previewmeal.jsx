import React from "react";
import MealListing from "./MealListing";

function Preview() {
  return (
    <div>
      <div>
        <MealListing />
      </div>

      <div className="flex align-center justify-center gap-2 ">
        <button
          type="btn"
          className="px-2 py-1 bg-[#4268FB] text-white rounded-md text-sm"
        >
          Add to bookmark
        </button>
        <button
          type="btn"
          className="px-10 py-2 bg-[#777777] text-white rounded-md text-sm"
        >
          Share
        </button>
      </div>
    </div>
  );
}
export default Preview;
