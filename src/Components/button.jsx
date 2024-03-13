import Proptypes from "prop-types"; 

const skip_function=()=>{
    console.log("you skipped");
}

const next_function=()=>{
    console.log("you clicked next");
}

{/* <Button btnClicked={skip_function}>Skip</Button>
<Button color={"blue"} btnClicked={next_function}>Next</Button> */}


const Button = ({ children, ...props}) => {
    const btn_class = props.color === "blue" ?
         "bg-blue-800 font-semibold text-white text-sm px-8 py-1.5 mx-2 my-2 rounded cursor-pointer outline-none border-none select"
        :
        "bg-blue-100 font-semibold text-blue text-sm px-8 py-1.5 mx-2 my-2 rounded cursor-pointer outline-none border-none select"

    return(
        <div style={{display:'flex', justifyContent:'center'}}>
            <button className={btn_class} onClick={props.btnClicked}>
                {children}
            </button>
        </div>
    )
}

export default Button