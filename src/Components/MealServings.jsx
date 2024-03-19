import React, { useState } from "react";

const MealServings = () => {
  const [selectedTimes, setSelectedTimes] = useState("");
  const [selectedServing, setSelectedServing] = useState("");

  const handleServingClick = (serving) => {
    setSelectedServing(serving);
    localStorage.setItem("selectedServing", serving);
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    // if (selectedTimes.includes(value)) {
    //   setSelectedTimes(selectedTimes.filter((time) => time !== value));
    // } else {
    //   setSelectedTimes([...selectedTimes, value]);
    // }
    setSelectedTimes(value);
    localStorage.setItem("selectedTimes", value);
  };

  return (
    <div className="min-h-screen mx-4 flex flex-col justify-center lg:items-center">
      <h2 className="mb-8 w-full text-3xl font-bold text-left">
        How Many Servings Per Meal?
      </h2>
      <div
        className={`mb-4 border px-4 py-2 w-80 rounded-md cursor-pointer ${
          selectedServing === "2 Servings" ? "bg-blue-200" : ""
        }`}
        onClick={() => handleServingClick("2 Servings")}
      >
        <p className="block font-semibold">2 Servings</p>
        <span className="text-gray-600">
          For two, or one with an extra serving
        </span>
      </div>
      <div
        className={`mb-4 border px-4 py-2 w-80 rounded-md cursor-pointer ${
          selectedServing === "4 Servings" ? "bg-blue-200" : ""
        }`}
        onClick={() => handleServingClick("4 Servings")}
      >
        <p className="block font-semibold">4 Servings</p>
        <span className="text-gray-600">
          For four, or 2/3 with an extra serving
        </span>
      </div>
      <div
        className={`mb-4 border px-4 py-2 w-80 rounded-md cursor-pointer ${
          selectedServing === "6 Servings" ? "bg-blue-200" : ""
        }`}
        onClick={() => handleServingClick("6 Servings")}
      >
        <p className="block font-semibold">6 Servings</p>
        <span className="text-gray-600">
          For six, or below six with extra servings
        </span>
      </div>

      {/* EATING FREQUENCY */}
      <h1 className="text-2xl font-bold mb-4 mt-8">
        How many times do you eat in a day?
      </h1>
      <div className="mb-10 flex flex-col text-[1.05rem] gap-[0.2rem]">
        <div className="flex gap-4 items-center">
          <input
            id="once"
            type="checkbox"
            value="Once"
            onChange={handleCheckboxChange}
            checked={selectedTimes === "Once"}
            className="checked:bg-blue-500"
          />
          <label className="block font-medium cursor-pointer" htmlFor="once">
            Once
          </label>
        </div>
        <div className="flex gap-4 items-center">
          <input
            id="twice"
            type="checkbox"
            value="Twice"
            onChange={handleCheckboxChange}
            checked={selectedTimes === "Twice"}
          />
          <label className="block font-medium cursor-pointer" htmlFor="twice">
            Twice
          </label>
        </div>
        <div className="flex gap-4 items-center">
          <input
            id="thrice"
            type="checkbox"
            value="Thrice"
            onChange={handleCheckboxChange}
            checked={selectedTimes === "Thrice"}
          />
          <label className="block font-medium cursor-pointer" htmlFor="thrice">
            Thrice
          </label>
        </div>
        <div className="flex gap-4 items-center">
          <input
            id="others"
            type="checkbox"
            value="Others"
            onChange={handleCheckboxChange}
            checked={selectedTimes === "Others"}
          />
          <label className="block font-medium cursor-pointer" htmlFor="others">
            Others
          </label>
        </div>
      </div>
    </div>
  );
};

export default MealServings;
