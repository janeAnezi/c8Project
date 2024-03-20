import React, { useEffect } from "react";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";

const apiKey = "216354ab050b4d29b1712c3e701c7543";

function Savedmeals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const request = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=5&offset=0`
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
      <div className="flex flex-col gap-3 px-4 py-6">
        <h2 className="text-[#101010] text-base font-bold">Saved Meal Plans</h2>

        <div className="w-full flex flex-col items-center gap-2">
          {meals?.map((singleMeal, index) => (
            <div
              className="flex items-center gap-2 w-full"
              key={`${singleMeal?.id}-${index}`}
            >
              <div className="w-[60px] h-[60px] overflow-hidden rounded-md shrink-0">
                <img
                  src={singleMeal.image}
                  className="w-[60px] h-[0px] object-contain"
                  alt={singleMeal?.title}
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col gap-1 items-start flex-shrink flex-1">
                <p className="text-base line-clamp-1"> {singleMeal?.title}</p>

                <div className="flex gap-3 items-start text-sm">
                  <span className="">Popular</span>
                  <GoDotFill className="text-slate-300" />
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

export default Savedmeals;
