import { useState, useEffect } from "react";
import { getProducts } from "../../DbLocal/dbProducts";
import ItemList from "./ItemList";

 
const Products = () =>{

    const [products, setProducts] = useState([])

    useEffect(() => {

        getProducts()
        .then((data)=>{
            setProducts(data);     
        })
        .catch((error)=>{
        console.error(error);
        })
        .finally(()=>{
            console.log("Finalizo la promesa");  
        })

    }, []);

     return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <ItemList products={products} />
            </div>
        </div>
    );
};

export default Products;
