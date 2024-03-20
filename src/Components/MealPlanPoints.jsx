import React from 'react';
import { useNavigate } from 'react-router-dom';

function MealPlanPoints() {

    // Get the history object from React Router
    const navigate = useNavigate();

    function createMealPlan() {

        // to navigate to the meal plan page
        navigate('/MealPlan');

    }

    
    function mealHistory() {
        // to navigate to the meal history page
        navigate('/history');
    }

    return(
        <>
            <div className='flex justify-center items-center'>
                <div className="bg-slate-100 rounded-xl  inline-block w-80 mt-6  border pb-3 text-left px-3 pt-3">
                    <h1 className="font-semibold text-2xl  pt-2">0 Meal Plan</h1>
                    <p className="  py-1 text-semibold text-sm pb-1 ">Ready for a delicious meal?Earn 20 points per meal.</p>
                    <button onClick={createMealPlan} className="  bg-blue-700 p-1 text-white  hover:bg-blue-400 px-2 inline-block mr-5  rounded-xl  font-normal ">Create Meal Plan</button>
                    <button onClick={mealHistory} className="bg-neutral-400 p-1 text-white px-4 hover:bg-slate-500  rounded-xl  font-normal">Meal History</button> 
                </div>
            </div>
            
        </>
    )
}

export default MealPlanPoints;