import React, { useState } from 'react';

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
    <div className="min-h-screen mx-[10%] flex flex-col">
      <h2 className="mb-8 w-full text-3xl font-bold text-left">How Many Servings Per Meal?</h2>
      <div className="mb-4">
        <label className="block text-sm font-semibold cursor-pointer">
          <input
            type="checkbox"
            value="2"
            onChange={handleCheckboxChange}
            checked={selectedTimes.includes('2')}
          />
          2 Servings
        </label>
        <p className="text-gray-600">For two, or one with an extra serving</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold cursor-pointer">
          <input
            type="checkbox"
            value="4"
            onChange={handleCheckboxChange}
            checked={selectedTimes.includes('4')}
          />
          4 Servings
        </label>
        <p className="text-gray-600">For four, or 2/3 with an extra serving</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold cursor-pointer">
          <input
            type="checkbox"
            value="6"
            onChange={handleCheckboxChange}
            checked={selectedTimes.includes('6')}
          />
          6 Servings
        </label>
        <p className="text-gray-600">For six, or below six with extra servings</p>
      </div>

      <h1 className="text-2xl font-bold mb-4 mt-8">How many times do you eat in a day?</h1>
      <div className="mb-4">
        <label className="block text-sm font-semibold cursor-pointer">
          <input
            type="checkbox"
            value="Once"
            onChange={handleCheckboxChange}
            checked={selectedTimes.includes('Once')}
          />
          Once
        </label>
        <label className="block text-sm font-semibold cursor-pointer">
          <input
            type="checkbox"
            value="Twice"
            onChange={handleCheckboxChange}
            checked={selectedTimes.includes('Twice')}
          />
          Twice
        </label>
        <label className="block text-sm font-semibold cursor-pointer">
          <input
            type="checkbox"
            value="Thrice"
            onChange={handleCheckboxChange}
            checked={selectedTimes.includes('Thrice')}
          />
          Thrice
        </label>
        <label className="block text-sm font-semibold cursor-pointer">
          <input
            type="checkbox"
            value="Others"
            onChange={handleCheckboxChange}
            checked={selectedTimes.includes('Others')}
          />
          Others
        </label>
        {/* Add similar checkboxes for Twice, Thrice, and Others */}
      </div>
    </div>
  );
};

export default MealServings;
