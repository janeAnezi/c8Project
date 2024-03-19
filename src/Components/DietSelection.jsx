import React, { useState, useEffect } from "react";

const DietSelection = () => {
  const [selectedOptions, setSelectedOptions] = useState("");

  const dietOptions = [
    "Classic",
    "Vegetarian",
    "Flexitarian",
    "Vegan",
    "Pescetarian",
    "Low Carb",
    "Lactose Intolerant",
    "Keto",
  ];

  const handleOptionSelect = (option) => {
    setSelectedOptions(option);
  };

  return (
    <div className="min-h-screen w-screen px-4 flex flex-col justify-center lg:items-center">
      <h2 className="mb-8 w-full text-3xl font-bold text-left lg:text-center">
        Pick your Diet
      </h2>
      <div className="flex flex-col gap-2 mb-10">
        {dietOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionSelect(option)}
            className={`text-left py-4 px-4 w-80 rounded-md border border-gray-300 hover:bg-blue-100 ${
              selectedOptions === option ? "bg-blue-200" : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DietSelection;
