
import React, { useContext } from "react";
import myContext from "../ContextDataProvider/contextApi";
import '../CSS_Files/A.css';
function D() {
    const data=useContext(myContext);
    return(
        <>
        <div id="A">
        <h1>This Is D Component</h1>
        <p>{data}</p>
        </div>
        </>
    )
}

export default D;