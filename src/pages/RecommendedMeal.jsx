import React from "react";
import RecommendedMealPlans from "./../Components/RecommendedMealPlans";
function RecommendedMeal() {
 

  return (
    <div className="flex flex-col gap-3 bg-white w-full">
      <div className="w-[100%] ">
        <div className="w-full flex flex-col gap-2">
          <img
            src={image}
            className=" h-[100px] w-full rounded-lg object-cover"
            alt="A Grilled Salmon with Lemon-Dill Sauce"
          />

          <h3 className="flex align-left text-[12px] font-semibold">
            Grilled Salmon with Lemon-Dill Sauce
          </h3>

          <div className="flex gap-6 text-[10px] font-semibold">
            <span className="bg-[#F0F6FF] p-1 rounded-md"> Popular</span>
            <span className="bg-[#FFF0F0] p-1 rounded-md">2 weeks plan</span>
          </div>

         

      <hr/>

      <MealListing />

      <div className="flex align-center justify-center gap-2 ">
        <button
          type="btn"
          className="px-4 py-1 bg-[#4268FB] text-white rounded-md text-sm"
        >
          Track progress
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
export default PreviewPage;
