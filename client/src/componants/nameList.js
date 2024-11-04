import ButtonAppBar from "./navbar";
import React,{useState} from "react";




export default function Namelist(){
    const [newlist, setNewlist] = useState([]);

// Function to handle adding a new person
const addPerson = () => {
    const n = document.getElementById("fName").value;
    const a = document.getElementById("age").value;

    // Create a new person object
    const person = {
        name: n,
        age: a
    };

    setNewlist([...newlist, person]);

    // Clear the input fields
    document.getElementById("fName").value = '';
    document.getElementById("age").value = '';
};
    return(
        <>
        <ButtonAppBar/>
        <div>
            <h1>welcome to news</h1>

           name:<input type="text" id="fName"/>
            age:<input type="number" id="age"/>
            <button onClick={addPerson}>submit</button>
            {newlist.map((item,index)=>(
                <li key={index}>welcome {item.name} your age is {item.age}</li>
            ))}
        </div>
        </>
    )
}