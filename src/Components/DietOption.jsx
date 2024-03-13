import React from "react";

const DietOption = ({ name }) => {
  return (
    <button className="font-semibold text-left py-4 px-4 rounded-md border border-gray-400 hover:bg-blue-100">
      {name}
    </button>
  );
};

export default DietOption;
