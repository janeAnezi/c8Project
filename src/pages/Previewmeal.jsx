import React from "react";
import image from "../assets/foodplan.jpg";
import MealListing from "./../Components/MealListing";

function PreviewPage() {
  //const [meal, setMeals] = useState([]);

  /*
  useEffect(() => {
    const getData = async () => {
      try {
        const request = await fetch(
          "https://api.spoonacular.com/recipes/random?apiKey=66bd861568c44b67b8175cac51037e76&number=1&include-tags=vegetarian#"
        );

        const data = await request.json();

        console.log(data);
        setMeals(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
*/

  return (
    <div className="flex flex-col gap-3 bg-white w-full">
      <div className="w-[100%] ">
        <div className="w-full flex flex-col gap-2">
          <img
            src={image}
            className=" h-[100px] w-full rounded-lg object-cover"
            alt="A Grilled Salmon with Lemon-Dill Sauce"
          />

          <h3 className="flex align-left text-[12px] font-semibold">
            Grilled Salmon with Lemon-Dill Sauce
          </h3>

          <div className="flex gap-6 text-[10px] font-semibold">
            <span className="bg-[#F0F6FF] p-1 rounded-md"> Popular</span>
            <span className="bg-[#FFF0F0] p-1 rounded-md">2 weeks plan</span>
          </div>

          <div
          //dangerouslySetInnerHTML={{ __html: singleMeal?.summary }} for text if generated text is too lenghty "line-clamp-2 hover:line-clamp-none"
          >
            <p className="text-[12px] text-[#282828] indent-0">
              Succulent grilled salmon fillets, perfectly seasoned and
              accompanied by a zesty lemon-dill sauce.
            </p>
          </div>

          <ul className="flex flex-row flex-wrap gap-3 text-[12px]">
            <li>
              <p>
                Calories:
                <span className="font-semibold"> 250g</span>
              </p>
            </li>
            <li>
              <p>
                Fat :<span className="font-semibold">10g</span>
              </p>
            </li>
            <li>
              <p>
                Sugars: <span className="font-semibold">11g </span>
              </p>
            </li>
            <li>
              <p>
                Carb: <span className="font-semibold">12g </span>
              </p>
            </li>
            <li>
              <p>
                Sugars: <span className="font-semibold">11g</span>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <hr/>

      <MealListing />

      <div className="flex align-center justify-center gap-2 ">
        <button
          type="btn"
          className="px-4 py-1 bg-[#4268FB] text-white rounded-md text-sm"
        >
          Track progress
        </button>
        <button
          type="btn"
          className="px-10 py-2 bg-[#777777] text-white rounded-md text-sm"
        >
          Share
        </button>
      </div>
    </div>
  );
}
export default PreviewPage;
