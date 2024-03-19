import React from "react";

function RecommendedMealPlans() {
  return (
    <>
    <h1 className="text-3xl text-black font-Manrope font-bold"> Recommended Meal Plans </h1>
    <div>
       <ul className="flex flex-col gap-2 font-semibold">
        <li className="flex flex-row items-center justify-between">
          <div className="flex gap-2">
            <img
              src="https://cdn.pixabay.com/photo/2021/06/21/15/03/salmon-6353898_960_720.jpg"
              className="w-[80px] h-[80px] object-contain"
              alt=""
              loading="lazy"
            />
            <p className="text-lg flex items-start text-black-600 font-Manrope font-semibold">Grilled Salmon with Lemon-Dill Sauce </p>
             <div className="flex gap-6 text-[10px] font-semibold">
            <span className="bg-[#F0F6FF] p-1 rounded-md"> Popular</span>
            <span className="bg-[#FFF0F0] p-1 rounded-md">Vegan Only</span>
            </div>
            
          </div>
    </>
      );
  }

export default RecommendedMealPlans;
