import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const AgeAndBMI = () => {
  const [ageRange, setAgeRange] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const ageRanges = ["18 - 24", "25 - 36", "37 - 50+"];

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / heightInMeters ** 2).toFixed(2);
      setBMI(bmiValue);
      localStorage.setItem("bmi", bmiValue);
    } else {
      toast.error("Please enter height and weight");
    }
  };

  const handleAgeRange = (range) => {
    setAgeRange(range);
    localStorage.setItem("ageRange", range);
  };
  const handleHeightChange = (e) => {
    setHeight(e.target.value);
    updateButtonDisabledState(e.target.value, weight);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
    updateButtonDisabledState(height, e.target.value);
  };

  const updateButtonDisabledState = (newHeight, newWeight) => {
    if (newHeight && newWeight) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col min-h-screen lg:items-center justify-center px-5">
        <h2 className="text-2xl font-extrabold mb-4">What's your age range?</h2>
        <p className="mb-6">Age helps us understand your nutritional needs.</p>
        <div className="flex mb-8 max-w-screen-md">
          {ageRanges.map((range) => (
            <button
              key={range}
              onClick={() => handleAgeRange(range)}
              className={`px-5 py-3 mr-4 text-[18px] w-1/3 lg:w-80 rounded-md border lg:hover:bg-blue-200 ${
                ageRange === range ? "bg-blue-200" : ""
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
              onChange={handleHeightChange}
              className="border rounded p-3 mb-4 w-40 lg:w-80"
            />
          </label>
          <label htmlFor="weight" className="flex flex-col gap-2">
            Weight{" "}
            <input
              type="number"
              id="weight"
              placeholder="Weight in kg"
              value={weight}
              onChange={handleWeightChange}
              className="border rounded p-3 mb-4 w-40 lg:w-80"
            />
          </label>
        </div>
        <button
          onClick={calculateBMI}
          disabled={isButtonDisabled}
          className={`px-4 py-2 w-1/2 md:w-80 mt-4 bg-blue-500  text-white rounded-md font-semibold ${
            isButtonDisabled ? "opacity-40" : "hover:bg-blue-600"
          }`}
        >
          Calculate BMI
        </button>
        {bmi && (
          <p className="mt-4 text-xl font-medium">
            BMI: <strong>{bmi}</strong>
          </p>
        )}
      </div>
    </>
  );
};

export default AgeAndBMI;
