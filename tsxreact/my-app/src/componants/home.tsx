import React ,{useState} from "react";

type greetingProps={
    name:string,
    age:number
}

const Greeting:React.FC<greetingProps>=({name,age})=>{
    const [count,setCount]=useState(0);

    return(
        <>
        <h1>hi,{name}</h1>
        <p>your age is: {age}</p>
        <h1>u clicked me</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <p>{count}</p>
        <button onClick={()=>setCount(count-1)}>-</button>
        </>
    )
}
export default Greeting;
