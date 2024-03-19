import React from 'react';
import { useNavigate } from 'react-router-dom';

function MealPlanPoints() {

    // Get the history object from React Router
    const navigate = useNavigate();

    function createMealPlan() {
        alert('This button will direct you to  create meal on meal plan page')

        // to navigate to the meal plan page
        navigate('/mealplan');

    }

    
    function mealHistory() {
        alert('This button will redirect you to meal history page')
        // to navigate to the meal history page
        navigate('/history');
    }

    return(
        <>
           <div className="bg-slate-100 rounded-xl  inline-block  w-80  border pb-4 text-left px-2 pt-2">
                <h1 className="font-semibold text-2xl  pt-2">0 Meal Plan</h1>
                <p className="py-1 text-semibold text-sm">Ready for a delicious meal?Earn 20points per meal.</p>
                <button onClick={createMealPlan} className="  bg-blue-700 p-1 text-white  hover:bg-blue-400 px-2 inline-block mr-5  rounded-xl  font-normal ">Create Meal Plan</button>
               <button onClick={mealHistory} className="bg-neutral-400 p-1 text-white px-4 hover:bg-slate-500  rounded-xl  font-normal">Meal History</button>
               
            </div> <br/>

            
        </>
    )
}

export default MealPlanPoints;