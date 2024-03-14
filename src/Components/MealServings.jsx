import React, { useState } from "react";

const MealServings = () => {
  const [selectedTimes, setSelectedTimes] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (selectedTimes.includes(value)) {
      setSelectedTimes(selectedTimes.filter((time) => time !== value));
    } else {
      setSelectedTimes([...selectedTimes, value]);
    }
  };

  return (
    <div className="min-h-screen mx-4 flex flex-col justify-center lg:items-center">
      <h2 className="mb-8 w-full text-3xl font-bold text-left">
        How Many Servings Per Meal?
      </h2>
      <div className="mb-4 border px-4 py-2 w-80 rounded-md">
        <p className="block font-semibold cursor-pointer">2 Servings</p>
        <span className="text-gray-600">
          For two, or one with an extra serving
        </span>
      </div>
      <div className="mb-4 border px-4 py-2 w-80 rounded-md">
        <p className="block font-semibold cursor-pointer">4 Servings</p>
        <span className="text-gray-600">
          For four, or 2/3 with an extra serving
        </span>
      </div>
      <div className="mb-4 border px-4 py-2 w-80 rounded-md">
        <p className="block font-semibold cursor-pointer">6 Servings</p>
        <span className="text-gray-600">
          For six, or below six with extra servings
        </span>
      </div>

      {/* EATING FREQUENCY */}
      <h1 className="text-2xl font-bold mb-4 mt-8">
        How many times do you eat in a day?
      </h1>
      <div className="mb-4">
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            value="Once"
            onChange={handleCheckboxChange}
            checked={selectedTimes.includes("Once")}
          />
          <label className="block font-medium cursor-pointer">Once</label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            value="Twice"
            onChange={handleCheckboxChange}
            checked={selectedTimes.includes("Twice")}
          />
          <label className="block font-medium cursor-pointer">Twice</label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            value="Thrice"
            onChange={handleCheckboxChange}
            checked={selectedTimes.includes("Thrice")}
          />
          <label className="block font-medium cursor-pointer">Thrice</label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            value="Others"
            onChange={handleCheckboxChange}
            checked={selectedTimes.includes("Others")}
          />
          <label className="block font-medium cursor-pointer">Others</label>
        </div>
      </div>
    </div>
  );
};

export default MealServings;
