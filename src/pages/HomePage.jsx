import React from "react";
import Menu from "../Components/Menu";


const HomePage = () => {
  

  return (
    <>
      <Menu />
      <div className="flex justify-center items-center mt-4 ml-4">
        <div>
          <div>
            <p className=" font-semibold text-xl mb-3">Recommended Meal Plans</p>
            <div className="flex space-x-4 mb-4">
              <img src="./src/assets/image-menu/frame1.jpg" alt="food image" />
              <div>
                <p className="font-medium">Grilled Salmon with Lemon-Dill Sauce</p>
                <p className="my-4 text-sm"><span className="bg-blue-100 p-1 rounded-lg">popular</span><div className="inline-block w-2 h-2 bg-slate-400 rounded-lg mx-2"></div> Vegan Only</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <img src="./src/assets/image-menu/frame2.png" alt="food image" />
              <div>
                <p className="font-medium">Lentil and Vegetable Curry</p>
                <p className="my-4 text-sm"><span className="bg-blue-100 p-1 rounded-lg">popular</span><div className="inline-block w-2 h-2 bg-slate-400 rounded-lg mx-2"></div> Vegan Only</p>
              </div>
            </div>
          </div>
          <button className="inline-block w-80 border border-purple-500 py-2 mt-8 rounded-md hover:border-purple-800">View more</button>
          <div className="mt-3 mr-3 items-center relative">
            <img src="./src/assets/image-menu/frame3.png" alt="food image" />
            <button className=" absolute bottom-8 left-3 bg-blue-500 py-2 text-white  hover:bg-blue-400 px-3 inline-block mr-5  rounded-lg  text-sm ">Create Meal Plan</button>
            <button className=" absolute bottom-8 right-20 border-blue-700 py-2 text-black bg-white  hover:bg-blue-100 px-3 inline-block   rounded-lg text-sm ">Quick Meal</button>
          </div>
          
          <div class="absolute bottom-0 w-full">
            <p className=" p-2 text-center text-xs"><span className="text-xl">&copy;</span> All Rights Reserved.2024</p>
          </div>
          
        </div>
      </div> 
    </>
  );
};

export default HomePage;
