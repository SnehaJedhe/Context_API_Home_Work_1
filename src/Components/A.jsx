import React, { useState } from "react";
import myContext from '../ContextDataProvider/contextApi';
import '../CSS_Files/A.css';
import B from "./B";

function A() {
    const [state,setState]=useState("");
    const [data,setData]=useState("")

    return(
        <>
        <div id="A">
        <h1>This Is A Component</h1>
        <div className="input">
        <input type="text" placeholder="Type Here....." onChange={(e)=>{setState(e.target.value)}}/>
        <button onClick={()=>{setData
        (state)}}>Click Here</button>
        </div>
        </div>
        <myContext.Provider value={data}>
        <B/>
        </myContext.Provider>
        
        </>
    )
}

export default A;