import ButtonAppBar from "./navbar";
import Home from "./home";
import { useLocation } from "react-router-dom";
import { useEffect } from "react"; // Add useEffect here
import { useState } from "react";
import './style/details.css';


export default function ProductDetails(){

 // State to manage the visibility of the element
 const [isVisible, setIsVisible] = useState(false);

 const location = useLocation();
 const { product } = location.state || {}; // Ensure updateProduct is destructured
 // State to manage form inputs
 const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: ''
});
 // Populate form data with product details if available
 useEffect(() => {
    if (product) {
        setFormData({
            name: product.NAme,
            price: product.price,
            category: product.category,
            description: product.description
        });
    }
}, [product]);

 // Function to toggle visibility
 const toggleVisibility = () => {
    setIsVisible(!isVisible);
 };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (product) {
            const updatedProduct = { ...product, NAme: formData.name, price: formData.price, category: formData.category, description: formData.description };
            // Call the update function directly in Home or use a context
            // For now, we will just log the updated product
            console.log("Updated Product:", updatedProduct);
            // You can implement a way to call updateProduct here if using context
        }
    };
    if (!product) {
        return <div>No product available. Please select a product to edit.</div>;
    }
    return(

        <>
            <ButtonAppBar />
            {product.description ? (
                <div>
                    <p>{product.NAme}</p>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                    <p>{product.description}</p>
                    
                </div>
                
            ) : (
                <p>No product available.</p> 
            )}
            <div>
                <form className={isVisible ? 'visible' : 'hidden'} onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name"  onChange={handleChange} placeholder="Product name" />
                    </label>
                    <label>
                        Price:
                        <input type="number" name="price"  onChange={handleChange} placeholder="0.0$" />
                    </label>
                    <label>
                        Category:
                        <input type="text" name="category"  onChange={handleChange} placeholder="Category" />
                    </label>
                    <label>
                        Description:
                        <input type="text" name="description"  onChange={handleChange} placeholder="Description..." />
                    </label>
                    <button type="submit" id="sub">Submit</button>
                </form>
                <button onClick={toggleVisibility}>
                    {isVisible ? 'Hide' : 'Show'} Edit
                </button>
            </div>
        </>
    )
}