import { useState, useEffect } from "react";
// import { getProducts } from "../../DbLocal/dbProducts";
import ItemList from "./ItemList";

import { getProducts } from "../../utils/fetchApi";

const Products = () => {
  const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts()
//       .then((data) => {
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//       .finally(() => {
//         console.log("Finalizo la promesa");
//       });
//   }, []);

//   useEffect(() => {
//     getProducts()
//       .then((data) => {
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//       .finally(() => {
//         console.log("Finalizo la promesa");
//       });
//   }, []);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Finalizo la promesa");
      });
  }, []);



  return (
<div>    
    <h1 className="text-center my-4">Nuestro Productos</h1>
    <div className="flex flex-col items-center lg:flex-row lg:items-baseline mx-14 ">
      <div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <button aria-current="true" type="button" className="w-full px-4 py-2 font-medium text-center rtl:text-right text-white bg-custom-gree-2 border-b border-gray-200 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600">
         Categorias
        </button>
        <button type="button" className="w-full px-4 py-2 font-medium text-center rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          Carnes
        </button>
        <button type="button" className="w-full px-4 py-2 font-medium text-center rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          Vegetarianas
        </button>
        <button type="button" className="w-full px-4 py-2 font-medium text-center rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
            Pastas
        </button>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <ItemList products={products} />
      </div>
    </div>
</div>    
  );
};

export default Products;
