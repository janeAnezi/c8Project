import React from "react";
import { useNavigate } from "react-router-dom";

function RecommendedMealPlans() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-3xl text-black font-Manrope font-bold mt-4 mb-4">
        Recommended Meal Plans
      </h1>
      {/* recomended meal plan */}
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
              <p className="text-lg flex items-start text-black-600 font-Manrope font-semibold">
                Grilled Salmon with Lemon-Dill Sauce{" "}
              </p>
              <div className="flex self-start p-1 gap-6 text-[10px] font-semibold">
                <span className="bg-[#F0F6FF] p-1 rounded-md"> Popular</span>
                <span className="bg-[#FFF0F0] p-1 rounded-md">Vegan Only</span>
              </div>
            </div>
          </li>

          <hr />
          <li className="flex flex-row items-center justify-between">
            <div className="flex gap-2">
              <img
                src="https://cdn.pixabay.com/photo/2021/06/21/15/03/salmon-6353898_960_720.jpg"
                className="w-[80px] h-[80px] object-contain"
                alt=""
                loading="lazy"
              />
              <p className="text-lg flex items-start text-black-600 font-Manrope font-semibold">
                Lentil and Vegetable Curry
              </p>
              <div className="flex self-start p-1 gap-6 text-[10px] font-semibold">
                <span className="bg-[#F0F6FF] p-1 rounded-md"> Popular</span>
                <span className="bg-[#FFF0F0] p-1 rounded-md">Vegan Only</span>
              </div>
            </div>
          </li>

          <hr />
          <li className="flex flex-row items-center justify-between">
            <div className="flex gap-2">
              <img
                src="https://cdn.pixabay.com/photo/2021/01/06/13/01/pearl-barley-5894346_960_720.jpg"
                className="w-[80px] h-[80px] object-contain"
                alt=""
                loading="lazy"
              />
              <p className="text-lg flex items-start text-black-600 font-Manrope font-semibold">
                Mushroom Risotto{" "}
              </p>
              <div className="flex self-start p-1 gap-6 text-[10px] font-semibold">
                <span className="bg-[#F0F6FF] p-1 rounded-md"> Popular</span>
                <span className="bg-[#FFF0F0] p-1 rounded-md">
                  Vegan and Non-Vegan
                </span>
              </div>
            </div>
          </li>

          <hr />
          <li className="flex flex-row items-center justify-between">
            <div className="flex gap-2">
              <img
                src="https://cdn.pixabay.com/photo/2024/02/24/23/22/ai-generated-8594918_960_720.jpg"
                className="w-[80px] h-[80px] object-contain"
                alt=""
                loading="lazy"
              />
              <p className="text-lg flex items-start text-black-600 font-Manrope font-semibold">
                Grilled Lemon Herb Chicken Bowl{" "}
              </p>
              <div className="flex self-start p-1 gap-6 text-[10px] font-semibold">
                <span className="bg-[#F0F6FF] self-start p-1 rounded-md">
                  {" "}
                  Popular
                </span>
                <span className="bg-[#FFF0F0] p-1 rounded-md">
                  Vegan and Non-Vegan
                </span>
              </div>
            </div>
          </li>

          <hr />
          <li className="flex flex-row items-center justify-between">
            <div className="flex gap-2">
              <img
                src="https://cdn.pixabay.com/photo/2016/09/06/14/24/hummus-1649231_960_720.jpg"
                className="w-[80px] h-[80px] object-contain"
                alt=""
                loading="lazy"
              />
              <p className="text-lg flex items-start text-black-600 font-Manrope font-semibold">
                Hummus and Falafel{" "}
              </p>
              <div className="flex self-start p-1 gap-6 text-[10px] font-semibold">
                <span className="bg-[#F0F6FF] p-1 rounded-md"> Popular</span>
                <span className="bg-[#FFF0F0] p-1 rounded-md">
                  Vegan and Non-Vegan
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default RecommendedMealPlans;
