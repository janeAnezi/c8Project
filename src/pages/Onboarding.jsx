import React from "react";
import { useState } from "react";
import GetStarted from "../Components/GetStarted.jsx";
import AgeAndBMI from "../Components/AgeAndBMI.jsx";
// import DietSelection from "../components/DietSelection";

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

  const [currentPage, setCurrentPage] = useState("getStarted");

  const changeScreen = () => {
    setCurrentPage("ageAndBmi");
  };

  return (
    <div className="]">
      {currentPage === "getStarted" && <GetStarted onClick={changeScreen} />}
      {currentPage === "ageAndBmi" && <AgeAndBMI />}
    </div>
  );
};

export default Onboarding;
