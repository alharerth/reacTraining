import React,{useState} from "react";
import ButtonAppBar from "./navbar";

function Counter(){
    var [count,setCount]=useState(0);

    return(
        <>
        <ButtonAppBar/>
        <h1>u clicked </h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <p>{count}</p>
        <button onClick={()=>setCount(count-1)}>-</button>
        </>
    )
}
export default Counter;