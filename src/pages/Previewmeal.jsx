import React, { useState, useEffect } from "react";
import MealListing from "./../Components/MealListing";

function PreviewPage() {
  const [meal, setMeals] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const request = await fetch(
          "https://api.spoonacular.com/recipes/random?apiKey=66bd861568c44b67b8175cac51037e76&number=1&include-tags=vegetarian#"
        );

        const data = await request.json();

        console.log(data);
        setMeals(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="flex flex-col py-10 align-center justify-center">
      {meal?.recipes?.map((singleMeal) => (
        <div className="flex flex-col">
          <div className="">
            <img
              src={singleMeal.image}
              className="w-full h-[60px] rounded-lg object-contain"
              alt={singleMeal?.title}
              loading="lazy"
            />

            <p className="text-base"> {singleMeal?.title}</p>

            <div className="flex gap-6 text-sm">
              <span className="bg-[#F0F6FF]"> Popular</span>
              <span className="bg-[#FFF0F0]">2 weeks plan</span>
            </div>

            <div
              className="line-clamp-2 hover:line-clamp-none"
              dangerouslySetInnerHTML={{ __html: singleMeal?.summary }}
            ></div>
          </div>

          <div>{/**calories */}</div>
        </div>
      ))}

      <MealListing />
      <div className="flex align-center justify-center gap-2 ">
        <button
          type="btn"
          className="px-2 py-1 bg-[#4268FB] text-white rounded-md text-sm"
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
