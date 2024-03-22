const apiKey = process.env.REACT_APP_API_KEY;


const fetchMeals = async (offset) => {
  try {
    const request = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=3&offset=${offset}`
    );

    const data = await request.json();

    
    if (data && data.status === 'failure') {
      return { error: data.message }; 
    }

    return data.results;
  } catch (error) {
    console.error("Error fetching meals:", error);
    return { error: "An error occurred while fetching meals." }; 
  }
};

export default fetchMeals;
