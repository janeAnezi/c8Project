import React, { useEffect } from "react";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const apiKey = "3fe49c1121264389ae06b158e350b213";

function HomePage() {
  const [meals, setMeals] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const request = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=3&offset=${offset}`
        );

        const data = await request.json();

        // console.log(data);

        setMeals((prevMeals) => [...prevMeals, ...data.results]);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [offset]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + 1);
  };

  

  return (
    <>
      <div className="p-6">
        <h2 className="text-[#101010] text-base font-bold p-4">
          Recommended Meal Plans
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
                <Link
                  to={`/preview/${singleMeal?.id}`}
                  className="hover:text-slate-500"
                >
                  <p className="font-semibold text-[13px] line-clamp-1 md:text-[15px] lg:text-[20px]">
                    {singleMeal?.title}
                  </p>
                </Link>

                <div className="flex gap-3 items-center justify-start text-[12px] md:text-[15px]">
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
        <button
          onClick={handleLoadMore}
          className=" border border-blue-500 text-black bg-white px-4 py-1 w-full rounded-md mt-2"
        >
          Load More
        </button>

        <div className="w-full bg-">
          <div className="flex flex-row gap-2 justify-normal content-end">
            <Link to={`/mealplan`}>
              <button
                type="btn"
                className="px-2 py-1 bg-[#4268FB] hover:bg-[#93a6f3] text-white rounded-md text-sm"
              >
                Create Meal Plan
              </button>
            </Link>
            <button
              type="btn"
              className="px-2 py-1 border border-blue-500 text-black bg-white hover:opacity-5  rounded-md text-sm"
            >
              Quick Meal
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default HomePage;
