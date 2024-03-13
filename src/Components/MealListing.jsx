import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function MealListing() {
  /* 
    this is the interface for response
      interface Recipe {
          id: number;
          title: string;
          image: string;
          imageType: string;
      }

      interface RecipeApiResponse {
          results: Recipe[];
          offset: number;
          number: number;
          totalResults: number;
      }

  */
  const [meal, setMeals] = useState([]);
  const navigate = useNavigate();

  function getMealDetails() {
    // to navigate to the meal details page
    navigate("/MealFullDetails");
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const request = await fetch(
          "https://api.spoonacular.com/recipes/complexSearch?apiKey=66bd861568c44b67b8175cac51037e76"
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
    <div className="">
      <h2 className="text-[#101010] text-base font-semibold">Meal Listing</h2>
      {meal?.results?.map((singleMeal) => (
        <div className="flex align-center justify-between" key={singleMeal?.id}>
          <div className="flex justify-between">
            <img
              src={singleMeal.image}
              className="w-[60px] h-[60px] object-contain"
              alt={singleMeal?.title}
              loading="lazy"
            />
            <p className="text-base"> {singleMeal?.title}</p>
          </div>

          <button
            onClick={getMealDetails}
            className="flex align-center justify-center gap-2 "
          >
            <span>View</span>
            <MdOutlineKeyboardArrowRight className="text-xxl" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default MealListing;
