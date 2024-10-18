import { useState, useEffect } from "react";
import { getProducts } from "../DbLocal/dbProducts";

export const useProducts = () =>{
    const [products, setProducts] = useState([]);
    const [spinners, setSpinners ] = useState(true)

    useEffect(()=>{
        setSpinners(true)

        getProducts()
            .then((data)=> setProducts(data))
            .catch((error)=> console.error(error))
            .finally(()=> setSpinners(false))
    }, [])

    return { products, spinners }
};
