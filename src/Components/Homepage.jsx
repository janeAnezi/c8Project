import React from "react";
import Menu from "./Menu";
import  { useEffect } from "react";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const HomePage = () => {
  
/* 
    endpoint call comes in this way 
      https://api.spoonacular.com/recipes/complexSearch?apiKey=f29fa4d13d854421a167ec7b23670eaf&number=10&offset=1


    interface RecipesComplexSearch {
      results: Array<{
          id: number;
          title: string;
          image: string; //  "https://spoonacular.com/recipeImages/715497-312x231.jpg",
          "imageType": string;  // "jpg"
      }>,
      offset: number;
      number: number;
      totalResults: number; 
    }
*/
const apiKey = "7fffe677eb714b4c848b64963a57193a";

function HomePage() {
  const [meals, setMeals] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const request = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10&offset=${offset}`
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
  }, [offset]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + 3);
  };

  return (
    <>
    <Menu/> 
      <h2 className="text-[#101010] text-base font-semibold">
        Recommended Meal Plans
      </h2>

      <div className="w-full flex flex-col items-center gap-2">
        {meals?.map((singleMeal, index) => (
          /* two children seems to have same id for no reason */
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
                className="hover:text-blue-600"
              >
                <p className="text-base line-clamp-1"> {singleMeal?.title}</p>
              </Link>

              <div className="flex gap-3 items-start">
                <span className="">Popular</span>
                <GoDotFill />
                <span>Vegan Only</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleLoadMore}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
      >
        Load More
      </button>
    </>
  );
}


}
export default HomePage;
