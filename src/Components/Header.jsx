import Back from '../assets/back.png';

const Navbar = ({ children, ...props}) => {
    const btn_class = props.color === "blue" ?
         "bg-blue-400 text-white px-6 py-2 mx-2 my-2 rounded shadow-md cursor-pointer outline-none border-none select"
        :
        "bg-white-400 text-blue px-6 py-2 mx-2 my-2 rounded shadow-md cursor-pointer outline-none border-none select"

    return(
        <div className="w-full flex justify-between">
            <img src={Back} className="h-[1.5rem] w-[1.5rem]" onClick={props.previous}></img>
            
            <p className='text-sm font-semibold justify-between w-full'>{props.current_page} of {props.num_of_page}</p>

        </div>
    )
}


export default Navbar