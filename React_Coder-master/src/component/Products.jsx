import { useState } from "react";
import viandas from "../DbLocal/dbProducts.json";

 
const Products = () =>{

    const [product, setProduct] = useState(viandas);

     return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                
                <div className="mt-6 text-center grid grid-cols-1 px-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {product.map(({ id, name, description, price, image }) => (
                        <div 
                            key={id} 
                            className="group relative flex flex-col justify-between h-full border rounded-lg shadow-md p-4"
                        > {/* Añadimos borde, sombra y relleno para mejor diseño */}
                            <h2 
                                className="text-xl text-center mb-2 font-bold tracking-tight text-gray-900 min-h-[3rem]" 
                            > {/* Altura mínima para el título */}
                                {name}
                            </h2>
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img 
                                    src={image} 
                                    alt={name} 
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full" 
                                />
                            </div>
                            <div className="mt-4 flex flex-col justify-between mb-4 flex-grow">
                                <h3 className="text-sm text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        {description}
                                    </a>
                                </h3>
                                <p className="text-sm font-medium text-gray-900">${price}</p>
                            </div>
                            <a href="/comprar" // Link a la compra
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-green-500 rounded shadow-md hover:bg-green-600 focus:shadow-outline focus:outline-none"
                            >
                                Ver Producto
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
