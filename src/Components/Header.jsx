import Back from "../assets/back.png";

<<<<<<< HEAD
<Navbar num_of_page={7} current_page={4}/>

{/* <p display={"none"}></p> */}

const Navbar = ({ children, ...props}) => {
    // const header = props.display === "none" ?
    //     "hidden"
    //     :
    //     "block"

    return(
        <div className="w-full flex justify-between">
            <img src={Back} className="h-[1.5rem] w-[1.5rem]" onClick={props.previous}></img>
            
            <p className='text-sm font-semibold'>{props.current_page} of {props.num_of_page}</p>
        </div>
    )
=======
{
  /* <Navbar num_of_page={7} current_page={4}/> */
>>>>>>> aad0f4b5e712f3a406a8285404ecd935b25a175b
}

const Navbar = ({ children, ...props }) => {
  return (
    <div className="w-full flex pt-4 px-5 justify-between absolute top-4">
      <img
        src={Back}
        className="h-[1.5rem] w-[1.5rem] cursor-pointer"
        onClick={props.previous}
      ></img>

      <p className="text-sm font-semibold">
        {props.current_page} of {props.num_of_page}
      </p>
    </div>
  );
};

export default Navbar;
