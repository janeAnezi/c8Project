import React from "react";
import { ImYoutube2 } from "react-icons/im";
import { GiNoodles } from "react-icons/gi";
import { FaClockRotateLeft } from "react-icons/fa6";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Mealdetails() {
  const [recipeDetail, setRecipeDetail] = useState(null);
  let { id } = useParams();
  const apiKey = "7fffe677eb714b4c848b64963a57193a";
  console.log(id);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const getReceipeDetail = fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
        );

        const [recipeDetailsResponse] = await Promise.all([getReceipeDetail]);

        const recipeDetailData = await recipeDetailsResponse.json();
        setRecipeDetail(recipeDetailData);

        console.log(recipeDetailData);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipeDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" flex flex-col gap-4 px-8 py-6">
      <div className="w-full flex items-center">
        <img
          src={recipeDetail.image}
          alt={recipeDetail.title}
          className="w-[100%] h-52 object-cover rounded-lg"
        />
      </div>

      <div className="flex items-center justify-start gap-3 font-semibold text-sm text-left">
        <div className="flex gap-2 border-[#c9c9cc] bg-slate-200 px-3 py-2">
          <FaClockRotateLeft />
          <p>Ready In {recipeDetail.readyInMinutes} Minutes</p>
        </div>

        <div className="flex gap-2 border-[#c9c9cc] bg-slate-200 px-3 py-2">
          <GiNoodles />
          <p>{recipeDetail.servings} SERVING </p>
        </div>
      </div>

      <div className="flex flex-col gap-1 bg-slate-200 rounded-md text-left px-2 py-4">
        <h3>INGREDIENTS</h3>
        {recipeDetail?.extendedIngredients.map((ingredient, index) => (
          <div key={`${ingredient?.id}-${index}`}>
            <p>{ingredient.original}</p>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold">Instructions:</h3>
        <p dangerouslySetInnerHTML={{ __html: recipeDetail?.instructions }}></p>
      </div>

      {/* For rendering other details if needed */}

      <div>
        <h3>VIDEO TUTORIAL</h3>
        <p className="bg-slate-200 border-slate-400 px-2 py-3">
          <ImYoutube2 />
        </p>
      </div>
    </div>
  );
}

export default Mealdetails;
