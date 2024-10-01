import { useState } from "react";
import cart from '../../assets/products/cart.svg';

export const CartWidget = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prevState => !prevState);
    const closeMenu = () => setIsMenuOpen(false);
    
    return (
        <div className="relative">
            <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center size-14 font-medium tracking-wide transition duration-200 rounded shadow-md transform hover:scale-105 sm:ml-5"
            >
                <img src={cart} alt="Cart" className="" />
            </button>
            <span
                className="relative bottom-10 right-3 rounded-full bg-red-500 px-[0.45em] py-[0.15em] text-[1rem] font-bold leading-none text-black"
            >1</span>
            
            {isMenuOpen && (
                <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-auto">
                    <div className="flex items-center justify-between border-b border-gray-200">
                        <h1 className="p-4 font-bold">Tu Carrito</h1>
                        <button
                            title="Close Menu"
                            className="m-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            onClick={closeMenu}
                        >
                            X
                        </button>
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between border-b border-gray-200 py-2">
                            <p className="font-semibold px-2">Producto</p>
                            <p className="font-semibold px-2">Cantidad</p>
                            <p className="font-semibold px-2">Precio</p>
                        </div>
                        <div className="flex justify-between py-2">
                            <p className="px-2">Producto 1</p>
                            <p className="px-2">4</p>
                            <p className="px-2">$500</p>
                        </div>
                        <div className="flex justify-between border-t border-gray-200 pt-2 mt-4">
                            <p className="font-bold px-2">Total:</p>
                            <p className="font-bold px-2">$500</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
