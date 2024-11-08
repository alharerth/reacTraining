import ButtonAppBar from "./navbar";
import React,{useState} from "react";
import './style/namelist.css' 
import { Component } from "react";


export default function Namelist(){
    const [newlist, setNewlist] = useState([]);


const addPerson = () => {
    const n = document.getElementById("fName").value;
    const a = document.getElementById("age").value;

    
    const person = {
        name: n,
        age: a
    };

    setNewlist([...newlist, person]);

    
    document.getElementById("fName").value = '';
    document.getElementById("age").value = '';
};
    return(
        <>
        <ButtonAppBar/>
        <div className="container">
            <h1>welcome to news</h1>

           <label>name:<input type="text" id="fName" placeholder="your first name"/></label>
           <label> age:<input type="number" id="age" placeholder="your age"/></label>
            <button onClick={addPerson}>submit</button>
            <ul>
            {newlist.map((item,index)=>(
                <li key={index}>welcome {item.name} your age is {item.age}</li>
            ))}</ul>
        </div>
        </>
    )
}
