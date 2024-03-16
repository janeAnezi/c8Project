import React, { useState } from "react";
// import DietOption from "./DietOption";

const DietSelection = () => {
  // // State to keep track of selected diet options
  // const [selectedOptions, setSelectedOptions] = useState([]);

  // // Function to handle selection of diet options
  // const handleOptionSelect = (option) => {
  //   if (selectedOptions.includes(option)) {
  //     setSelectedOptions(selectedOptions.filter((item) => item !== option));
  //   } else {
  //     setSelectedOptions([...selectedOptions, option]);
  //   }
  // };

  // State to keep track of selected diet option
  // const [selectedOptions, setSelectedOptions] = useState(null);

  // // Function to handle selection of diet option
  // const handleOptionSelect = (option) => {
  //   if (selectedOptions === option) {
  //     // If the selected option is already the current one, deselect it
  //     setSelectedOptions(null);
  //   } else {
  //     // Otherwise, select the new option
  //     setSelectedOptions(option);
  //   }
  // };

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

  return (
    <div className="min-h-screen w-screen px-4 flex flex-col justify-center lg:items-center">
      <h2 className="mb-8 w-full text-3xl font-bold text-left lg:text-center">
        Pick your Diet
      </h2>
      <div className="flex flex-col gap-2">
        {dietOptions.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedOptions(option)}
            className={`text-left py-4 px-4 w-80 rounded-md border border-gray-300 hover:bg-blue-100 ${
              selectedOptions === option ? "bg-blue-200" : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold w-full py-4 px-4 rounded-md mt-5">
        Continue
      </button> */}
    </div>
  );
};

export default DietSelection;
