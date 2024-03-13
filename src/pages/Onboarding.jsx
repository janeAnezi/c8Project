import React, { useEffect } from "react";
import { useState } from "react";
import GetStarted from "../Components/GetStarted.jsx";
import AgeAndBMI from "../Components/AgeAndBMI.jsx";
import Dislikes from "../Components/Dislikes.jsx";
import Budget from "../Components/Budget.jsx";
import PlanMeal from "../Components/PlanMeal.jsx";
import DietSelection from "../Components/DietSelection";
import AllergySelection from "../Components/AllergySelection";
import MealServings from "../Components/MealServings";

const Onboarding = () => {
  //   const [selectedScreen, setSelectedScreen] = useState("welcome");
  // const handleGetStartedClick = () => {
  //   setSelectedScreen("ageAndBmi");
  // };
  //   return (
  //     <>
  //       {selectedScreen === "welcome" && (
  //         <GetStarted onClick={handleGetStartedClick} />
  //       )}
  //       {selectedScreen === "dietSelection" && <DietSelection />}
  //     </>
  //   );

  const [currentPage, setCurrentPage] = useState(1);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setShowPage(true);
  }, [currentPage]);

  const changeScreen = () => {
    setShowPage(false);
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
    }, 700);
  };

  return (
    <div className="flex- flex-col items-center justify-center">
      <div
        className={`transition-opacity duration-700 ${
          showPage ? "opacity-100" : "opacity-0"
        }`}
      >
        {currentPage === 1 && <GetStarted onNext={changeScreen} />}
        {currentPage === 2 && <AgeAndBMI />}
        {currentPage === 3 && <Dislikes />}
        {currentPage === 4 && <DietSelection />}
        {currentPage === 5 && <AllergySelection />}
        {currentPage === 6 && <MealServings />}
        {currentPage === 7 && <Budget />}
        {currentPage === 8 && <PlanMeal />}
      </div>
      {/* TEMPORARY BUTTON FOR SWITCHING ONBOARDING SCREENS. */}
      {currentPage > 1 && (
        <button
          onClick={changeScreen}
          className="mt-4 px-8 py-2 bg-blue-500 text-white rounded fixed bottom-0 right-0 m-4"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Onboarding;
