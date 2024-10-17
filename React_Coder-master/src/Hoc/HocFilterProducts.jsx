import { useState } from "react";
import { useProducts } from "../Hooks/useProducts";
import Spinner from "../component/Spinner/Spinner";

const FilterHocProducts = (Component) => {
  return function WrappedComponentWithFilter(props) {

    const { products, spinners } = useProducts();
    const [query, setQuery] = useState(""); 

    // Maneja el input de búsqueda
    const changeInput = (e) => {
      setQuery(e.target.value.toLowerCase());
    };

    // Filtra los productos según la búsqueda
    const search = () => {
      return products.filter((product) =>
        // TolowerCase pasa todo a minuscula.
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    };

    return (
      <>
        <h1 className="text-center my-4">Nuestros Productos</h1>
        <div className="max-w-md mx-auto" >
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="text"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Buscar productos..."
              required
              onChange={changeInput}
            />
          </div>
        </div>
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        {spinners === true ? (<Spinner />) : (<Component products={search()} />)}
      </div>
      </>
    );
  };
};

export default FilterHocProducts;
