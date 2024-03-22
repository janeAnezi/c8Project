import React, { useEffect, useState } from "react";

const PlanMeal = () => {

  const [selectedOption,setSelectedOption]= useState("")

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
  };

  useEffect(() => {
    localStorage.setItem("selectedMealPlan", selectedOption);
  }, [selectedOption]);

  return (
    <div className="flex flex-col gap-y-5 justify-center min-h-screen mx-10">
      <h2 className="font-bold text-2xl">
        How would you like your meal planned?
      </h2>
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-2">
          <input
            type="radio"
            name="time"
            id="daily"
            checked={selectedOption === "daily"}
            onChange={() => handleOptionSelect("daily")}
          />
          <label htmlFor="daily">Daily</label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            name="time"
            id="weekly"
            checked={selectedOption === "weekly"}
            onChange={() => handleOptionSelect("weekly")}
          />
          <label htmlFor="weekly">Weekly</label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            name="time"
            id="occasionally"
            checked={selectedOption === "occasionally"}
            onChange={() => handleOptionSelect("occasionally")}
          />
          <label htmlFor="occasionally">Occasionally</label>
        </div>
      </div>
    </div>
  );
};

export default PlanMeal;
