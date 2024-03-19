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
import Navbar from "../Components/Header.jsx";
import Button from "../Components/button.jsx";
import { Link } from "react-router-dom";
// import SignUp from "./SignUp.jsx";

const Onboarding = () => {
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

  const pageNum = currentPage - 1;

  const backButton = () => {
    console.log("you skipped");
    setShowPage(false);
    setTimeout(() => {
      setCurrentPage(currentPage - 1);
    }, 600);
  };

  return (
    <>
      <div className="flex flex-col lg:items-center justify-around">
        {currentPage > 1 && currentPage <= 8 && (
          <Navbar
            className={`transition-opacity duration-700 ${
              showPage ? "opacity-100" : "opacity-0"
            }`}
            num_of_page={7}
            current_page={pageNum}
            previous={backButton}
          />
        )}
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
          {/* {currentPage === 9 && <SignUp />} */}
        </div>

        {currentPage > 1 && (
          <div
            className={`flex lg:justify-center absolute bottom-4 mx-auto w-full transition-opacity duration-700`}
          >
            {currentPage >= 5 && currentPage <= 8 && (
              <Button
                btnClicked={changeScreen}
                className={`transition-opacity duration-700 ${
                  showPage ? "opacity-100" : "opacity-0"
                }`}
              >
                Skip
              </Button>
            )}
            {currentPage < 8 && (
              <Button
                color={"blue"}
                btnClicked={changeScreen}
                className={`transition-opacity duration-700 ${
                  showPage ? "opacity-100" : "opacity-0"
                }`}
              >
                Next
              </Button>
            )}
            {currentPage === 8 && (
              <Link to="/signup">
                <Button color={"blue"}>Next</Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Onboarding;
