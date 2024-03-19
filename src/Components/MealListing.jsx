import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function MealListing({ meals }) {
  return (
    <div className="">
      <h2 className="text-[#101010] text-base font-semibold">Meal Listing</h2>
      {meals.map((singleMeal) => (
        <div className="flex align-center justify-between" key={singleMeal?.id}>
          <div className="flex justify-between">
            <img
              src={`https://spoonacular.com/recipeImages/${singleMeal.id}-556x370.${singleMeal?.imageType}`}
              className="w-[60px] h-[60px] object-contain"
              alt={singleMeal?.title}
              loading="lazy"
            />
            <p className="text-base"> {singleMeal?.title}</p>
          </div>
          <Link to={`/details/${singleMeal?.id}`}>
            <p className="flex align-center justify-center gap-2">
              <span>View</span>
              <MdOutlineKeyboardArrowRight className="text-xxl" />
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MealListing;

/* 

https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apiKey}&number=3

interface Recipe {
    id: number;
    imageType: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    title: string;
}



showing image - read more


https://spoonacular.com/food-api/docs/show-images


Recipes
Recipe endpoints will almost always give you a recipe id. With that and the imageType you can build the complete image paths depending on needs.

The base path for image URLs is https://spoonacular.com/recipeImages/. Once you know the recipe id {ID} and image type {TYPE}, you can complete that path to show an image.
 The complete path follows this pattern https://spoonacular.com/recipeImages/{ID}-{SIZE}.{TYPE}, where {SIZE} is one of the following:

90x90
240x150
312x150
312x231
480x360
556x370
636x393


*/
