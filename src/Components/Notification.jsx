import React from 'react';
import { useNavigate } from 'react-router-dom';

const Notification = () => {
    const navigate = useNavigate();

    function createMealPlan() {
        navigate('/home');
    }

  return (
    <>
        <div className='flex items-center justify-center'>
            <div className='text-center'>
                <div className='ml-8'>
                    <div> <img className='animate-ping' src="./src/assets/images/Confetti.jpg" alt="image" /></div>
                    <div className='ml-16'> <img className='animate-bounce w-40' src="./src/assets/images/Emotion.jpg" alt="image"  /></div>
                </div>
                <div>
                    <p className=" mt-1 text-3xl font-extrabold  text-black mb-2">YOU DID IT!</p>
                    <p className='font-bold'> Welcome to <span className='bg-foodbg bg-center bg-cover bg-clip-text text-transparent text-2xl'>MealPal</span></p>
                    <p className='font-medium'> Let's Plan You a Meal</p>
                </div>
                <button onClick={createMealPlan} className=" inline-block mt-3 bg-blue-500 text-white  hover:bg-blue-700 font-sans-medium  py-2 px-4 rounded">
                    Go to meal plan
                </button>
            </div>
        </div>
    </>
   
  );
};

export default Notification;