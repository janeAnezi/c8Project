import React, { useState, useEffect } from "react";

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

  const initialDislikes = JSON.parse(localStorage.getItem("dislikes")) || [];
  const [dislikes, setDislikes] = useState(initialDislikes);

  useEffect(() => {
    localStorage.setItem("dislikes", JSON.stringify(dislikes));
  }, [dislikes]);

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
      <div className="lg:text-center lg:max-w-lg">
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
