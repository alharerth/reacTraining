import ButtonAppBar from "./navbar";
import { Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function ProductDetails(){
    const location = useLocation();
    const product = location.state || {} ; // Fallback in case state is undefined
console.log(product)
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
        </>
    )
}