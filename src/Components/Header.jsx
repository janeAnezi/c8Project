import Back from "../assets/back.png";

{
  /* <Navbar num_of_page={7} current_page={4}/> */
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
