import './App.css';
import Referral from './Components/Referral';
import Button from './Components/button';
import Navbar from './Components/Header'


function App() {
    const skip_function=()=>{
        console.log("you skipped");
    }

    const next_function=()=>{
        console.log("you clicked next");
    }


    return (
        <>
           {/* <Referral /> */}
           
           <div>
             <Navbar num_of_page={7} current_page={4}/>
           </div>
           
           <div style={{display:'flex', justifyContent:'center'}}>
                <Button btnClicked={skip_function}>Skip</Button>
                <Button color={"blue"} btnClicked={next_function}>Next</Button>
           </div>
        </>
    );
}

export default App;
