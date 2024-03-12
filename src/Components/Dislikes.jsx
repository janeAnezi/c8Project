import React, { useState } from "react";

const Dislikes = () => {
  const dislikeOptions = [
    "avocado",
    "beef",
    "beets",
    "tuna",
    "bell peppers",
    "tofu",
    "blue cheese",
    "shrimp",
    "lamb",
    "brussels sprouts",
    "cauliflower",
    "eggplant",
    "olives",
    "eggs",
    "goat cheese",
    "mushrooms",
  ];

  const [dislikes, setDislikes] = useState([]);

  const toggleDislike = (item) => {
    setDislikes(
      dislikes.includes(item)
        ? dislikes.filter((dislike) => dislike !== item)
        : [...dislikes, item]
    );
  };

  return (
    <div className="flex flex-col justify-center lg:items-center min-h-screen px-4">
      <h2 className="text-2xl font-extrabold mb-4">How about dislikes?</h2>
      <div className="lg:text-center">
        {dislikeOptions.map((item) => (
          <button
            key={item}
            onClick={() => toggleDislike(item)}
            className={`border rounded-md py-3 px-5 m-1 hover:bg-blue-200 ${
              dislikes.includes(item) ? "bg-blue-200" : ""
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dislikes;
