import React from "react";
import Menu from "../Components/Menu";

const HomePage = () => {
  return (
    <>
      <Menu />
      <div className="flex justify-center items-center mt-16 ml-4">
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
        </div>
        
        
      </div>
      
    </>
  );
};

export default HomePage;
