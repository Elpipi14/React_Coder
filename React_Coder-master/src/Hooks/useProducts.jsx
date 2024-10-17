import { useState, useEffect } from "react";
import { getProducts } from "../DbLocal/dbProducts";

export const useProducts = () =>{
    const [products, setProducts] = useState([]);
    const [spinners, setsPinners ] = useState(true)

    useEffect(()=>{
        setsPinners(true)

        getProducts()
            .then((data)=> setProducts(data))
            .catch((error)=> console.error(error))
            .finally(()=> setsPinners(false))
    }, [])

    return { products, spinners }
};
