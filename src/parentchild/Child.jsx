import React ,{useState} from "react";
import './Child.css';
const Child = ()=>{
    const[change,setChange]=useState("not Clicked");
    function changeState (){
     setChange("Clicked!")
    }
    return(
        <div>
            <h2>{change} </h2>
            <button onClick={changeState}>Click</button>
        </div>
    )
}
export default Child;