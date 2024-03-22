import React from "react";
import Loading from "../assets/load.png";

const Loader = () => {
  return (
    <div className="h-screen w-full grid place-items-center absolute top-0 backdrop-blur-sm">
      <img src={Loading} alt="loader" className="animate-spin w-40 h-40" />
    </div>
  );
};

export default Loader;
