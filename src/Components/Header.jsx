import Back from '../assets/back.png';

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
}


export default Navbar