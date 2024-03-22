import React, { useEffect } from "react";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const apiKey = "3fe49c1121264389ae06b158e350b213";

function HomePage() {
  const [meals, setMeals] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const request = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=3&offset=${offset}`
        );

        const data = await request.json();

        // console.log(data);

        setMeals((prevMeals) => [...prevMeals, ...data.results]);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [offset]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + 1);
  };

  return (
    <div className="mx-4 my-2 flex items-center mt-20">
      <h1 className="text-3xl">This is the Home Page</h1>
    </div>
  );
}

export default HomePage;
