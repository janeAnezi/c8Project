import Proptypes from "prop-types"; 


const Button = ({ children, ...props}) => {
    const btn_class = props.color === "blue" ?
         "bg-blue-800 font-semibold text-white text-sm px-8 py-1.5 mx-2 my-2 rounded cursor-pointer outline-none border-none select"
        :
        "bg-blue-100 font-semibold text-blue text-sm px-8 py-1.5 mx-2 my-2 rounded cursor-pointer outline-none border-none select"

    return(
        <div>
            <button className={btn_class} onClick={props.btnClicked}>
                {children}
            </button>
        </div>
    )
}

export default Button