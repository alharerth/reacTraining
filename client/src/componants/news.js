import ButtonAppBar from "./navbar";
import { useState } from "react";
import EffectPage from "./effect";
export default function News(){
    const [users, setUsers] = useState([]);
    const [name, setname] = useState("");
    const [age, setage] = useState(0);
    
    const handlesubmit = (e) => {
        e.preventDefault(); 
        const person = {
            name: name, 
            age: age    
        };
    
        setUsers([...users, person]); 
    };
    return(
        <>
        <ButtonAppBar/>
        <EffectPage/>
        <div>
            <form id="userform" onSubmit={handlesubmit}>
                <lable>
                    name:
                </lable>
                <input type="text" id="name" name="name" required value={name} onChange={(e)=>setname(e.target.value)}>
                </input>
                <lable>
                    age:
                </lable>
                <input type="number" id="age" name="age" required value={age} onChange={(e)=>setage(e.target.value)}>
                </input>
                <button type="submit">submit</button>
            </form>
            <ul>
            {users.map((item,index)=>(
                <li key={index}>welcome {item.name} your age is {item.age}</li>
            ))}</ul>
        </div>
        </>
    )
}