import ButtonAppBar from "./navbar";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import newComponant from "./classComponant";
import './style/home.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function Home(props){
    var Navigate=useNavigate()
    const handleProduct = (product)=>{
        Navigate(`/details`,{state:product})
    }

    var allProducts=[
        {NAme:'product1',price:10,category:'men',description:'this is product1'},
        {NAme:'product2',price:20,category:'women',description:'this is product2'},
        {NAme:'product3',price:30,category:'women',description:'this is product3'},
        {NAme:'product4',price:40,category:'men',description:'this is product4'},
        {NAme:'product5',price:50,category:'old',description:'this is product5'},
        {NAme:'product6',price:60,category:'men',description:'this is product6'},
    ]
    var [category,setcategory]=useState('all');
    var [price,setprice]=useState('0');
    
    
    var filtercategory=category==='all'?allProducts:allProducts.filter(item => item.category===category)
    var filteredPrices=filtercategory.filter(item => item.price>=price)
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
        <Box sx={{ width: 300 }} className="slid">
            <Slider min={10} max={100} defaultValue={0} aria-label="Price" valueLabelDisplay="auto" onChange={(e)=>(setprice(e.target.value))} />
            </Box>
            {filteredPrices.map(product=>(
                <div key={product.NAme} className="product">
                <h3>{product.NAme}</h3>
                <p>{product.price}</p>
                <p>{product.category}</p>
                <p>{product.description}</p>
                <button onClick={()=>handleProduct(product)}>
                Go to Detail Page
            </button>
                </div>
            ))}
            
        </div>
        </>
    )
}