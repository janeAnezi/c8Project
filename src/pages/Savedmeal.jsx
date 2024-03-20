import React, { useEffect } from "react";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";

const apiKey = "3fe49c1121264389ae06b158e350b213";

function SavedPage() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const request = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10&offset=0`
        );

        const data = await request.json();

        // console.log(data);
        // i will save only the result and not concern myself with other data
        setMeals((prevMeals) => [...prevMeals, ...data.results]);
      } catch (error) {
        console.log(error);
      }
    };

    getData();

    // on change of the offset, the useEffect get Triggers to fetch again so I do not need to bother myself trying to call the function.. this is react
  }, []);

  return (
    <>
      <h2 className="text-[#101010] text-base font-semibold">
        Saved Meal Plans
      </h2>

      <div className="w-full flex flex-col items-center gap-2">
        {meals?.map((singleMeal, index) => (
          <div
            className="flex items-center gap-2 overflow-hidden w-full"
            key={`${singleMeal?.id}-${index}`}
          >
            <div className="w-[100px] h-[100px] overflow-hidden rounded-md shrink-0">
              <img
                src={singleMeal.image}
                className="w-[100px] h-[100px] object-contain"
                alt={singleMeal?.title}
                loading="lazy"
              />
            </div>

            <div className="flex flex-col gap-1 items-start flex-shrink flex-1">
              <div className="flex gap-3 items-start">
                <span className="">Popular</span>
                <GoDotFill />
                <span>Vegan Only</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SavedPage;
