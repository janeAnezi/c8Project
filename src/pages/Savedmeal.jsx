import React, { useEffect } from "react";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import Menu from "../Components/Menu";

const apiKey = "3fe49c1121264389ae06b158e350b213";

function Savedmeal() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const request = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=4&offset=0`
        );

        const data = await request.json();

        setMeals((prevMeals) => [...prevMeals, ...data.results]);
      } catch (error) {
        console.log(error);
      }
    };

    getData();

  }, []);

  return (
    <>
      <div className="px-6 py-12">
        <Menu />

        <h2 className="text-[#101010] text-base font-bold p-4">
          Saved Meal Plans
        </h2>

        <div className="w-full flex flex-col items-center gap-4 overflow-hidden">
          {meals?.map((singleMeal, index) => (
            <div
              className="flex items-center justify-between gap-6 overflow-hidden w-full"
              key={`${singleMeal?.id}-${index}`}
            >
              <div className="w-[100px] h-[100px] overflow-hidden rounded-lg shrink-0">
                <img
                  src={singleMeal.image}
                  className="w-[100px] h-[100px] object-contain rounded-lg"
                  alt={singleMeal?.title}
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col gap-1 items-start flex-shrink flex-1">
                <p className="font-semibold text-[13px] line-clamp-1 md:text-[15px] lg:text-[20px]">
                  {singleMeal?.title}
                </p>
                <div className="flex gap-3 items-center justify-center text-[12px] md:text-[15px]">
                  <span className="bg-[#F0F6FF] rounded-md px-2 py-1 ">
                    Popular
                  </span>
                  <GoDotFill className="text-pink-200" />
                  <span>Vegan Only</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Savedmeal;
