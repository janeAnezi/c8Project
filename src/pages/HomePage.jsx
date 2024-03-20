import React from "react";
import Menu from "../Components/Menu";

const HomePage = () => {
  return (
    <>
      <Menu />
      <div className="mx-4 my-2 flex items-center mt-20">
        <h1 className="text-3xl">This is the Home Page</h1>
      </div>
    </>
  );
};

export default HomePage;
