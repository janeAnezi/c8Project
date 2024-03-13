import React, { useState } from "react";

const AllergySelection = () => {
  const allergyOptions = [
    "Shellfish-Free",
    "Dairy-Free",
    "Nut-Free",
    "Gluten-Free",
    "Fish-Free",
    "Soy-Free",
    "Tree Nut-Free",
    "Sesame-Free",
    "Peanut-Free",
    "Egg-Free",
    "Sulfite-Free",
    "Lactose-Free",
    "Mustard-Free",
  ];

  const [selectedAllergies, setSelectedAllergies] = useState([]);

  const handleAllergyClick = (allergy) => {
    // Handle click event for each allergy button
    // console.log(`Selected allergy: ${allergy}`);
    if (selectedAllergies.includes(allergy)) {
      setSelectedAllergies(
        selectedAllergies.filter((item) => item !== allergy)
      );
    } else {
      setSelectedAllergies([...selectedAllergies, allergy]);
    }
  };

  return (
    <div className="flex flex-col justify-center lg:items-center min-h-screen px-4">
      <h2 className="text-2xl font-extrabold mb-4">Any allergies?</h2>
      <div className="lg:text-center lg:max-w-lg">
        {allergyOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleAllergyClick(option)}
            className={`border rounded-md py-3 px-5 m-1 hover:bg-blue-200 ${
              selectedAllergies.includes(option) ? "bg-blue-200" : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllergySelection;

