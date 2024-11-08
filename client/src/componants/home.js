import ButtonAppBar from "./navbar";
import newComponant from "./classComponant";
import './style/home.css'
import { useState } from "react";

export default function Home(props){
    var allProducts=[
        {NAme:'product1',price:10,category:'men',description:'this is product1'},
        {NAme:'product2',price:13,category:'women',description:'this is product2'},
        {NAme:'product3',price:14,category:'children',description:'this is product3'},
        {NAme:'product4',price:22,category:'men',description:'this is product4'},
        {NAme:'product5',price:45,category:'old',description:'this is product5'},
        {NAme:'product6',price:23,category:'men',description:'this is product6'},
    ]
    var [category,setcategory]=useState('all');

    var filteredProducts=category==='all'?allProducts:allProducts.filter(item => item.category===category)
    return(
        <>
        <ButtonAppBar/>
        <div>
            <h1 className="title">welcome to home page{props.name}</h1>
            
        <select onChange={(e)=>
            (setcategory(e.target.value))
        }>
            <option value={'all'}>all</option>
            <option value={'men'}>men</option>
            <option value={'women'}>women</option>
        </select>

            {filteredProducts.map(item=>(
                <div key={item.NAme}>
                <h3>{item.NAme}</h3>
                <p>{item.price}</p>
                <p>{item.category}</p>
                <p>{item.description}</p>
                </div>
            ))}
        </div>
        </>
    )
}