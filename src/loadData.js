const apiKey = process.env.REACT_APP_API_KEY;

const fetchMeals = async (offset) => {
  try {
    const request = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=3&offset=${offset}`
    );

    const data = await request.json();

    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default fetchMeals;
