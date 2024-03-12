import React, { useState } from "react";

const AgeAndBMI = () => {
  const [ageRange, setAgeRange] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState("");

  const ageRanges = ["18 - 24", "25 - 36", "37 - 50+"];

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / heightInMeters ** 2).toFixed(2);
      setBMI(bmiValue);
    }
  };

  return (
    <div className="flex flex-col lg:items-center justify-center mx-2 my-4 p-4">
      <h2 className="text-2xl font-extrabold mb-4">What's your age range?</h2>
      <p className="mb-6">Age helps us understand your nutritional needs.</p>
      <div className="flex mb-8">
        {ageRanges.map((range) => (
          <button
            key={range}
            onClick={() => setAgeRange(range)}
            className={`px-4 py-2 mr-2 rounded-md border hover:bg-blue-300 ${
              ageRange === range ? "bg-blue-300" : ""
            }`}
          >
            {range}
          </button>
        ))}
      </div>
      <h3 className="text-2xl font-extrabold mb-4">
        Interested in Knowing your BMI?
      </h3>
      <div className="flex space-x-4">
        <label htmlFor="height" className="flex flex-col gap-2">
          Height{" "}
          <input
            type="number"
            id="height"
            placeholder="Height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border rounded p-2 mb-4 w-40"
          />
        </label>

        <label htmlFor="weight" className="flex flex-col gap-2">
          Weight{" "}
          <input
            type="number"
            id="weight"
            placeholder="Weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border rounded p-2 mb-4 w-40"
          />
        </label>
      </div>

      <button
        onClick={calculateBMI}
        className="px-4 py-2 w-80 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold"
      >
        Calculate BMI
      </button>
      <p className="mt-4 text-lg font-medium">
        BMI: {bmi && <strong>{bmi}</strong>}
      </p>
    </div>
  );
};

export default AgeAndBMI;
