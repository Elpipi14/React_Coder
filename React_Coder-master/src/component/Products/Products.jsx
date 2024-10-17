import ItemListContainer from "./ItemListContainer";
import FilterHocProducts from "../../Hoc/HocFilterProducts";

const Products = ({products}) => {
  return (
    <div>
      <div className="flex flex-col items-center my-8 lg:mx-14">
        <div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
          <button
            aria-current="true"
            type="button"
            className="w-full px-4 py-2 font-medium text-center text-white bg-custom-gree-2 border-b border-gray-200 rounded-t-lg cursor-pointer focus:outline-none"
          >
            Categorias
          </button>
          <button
            type="button"
            className="w-full px-4 py-2 font-medium text-center border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          >
            Carnes
          </button>
          <button
            type="button"
            className="w-full px-4 py-2 font-medium text-center border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          >
            Vegetarianas
          </button>
          <button
            type="button"
            className="w-full px-4 py-2 font-medium text-center border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          >
            Pastas
          </button>
        </div>

        <div>
            <ItemListContainer products={products}/>
        </div>
      </div>
    </div>
  );
};

const ItemListContainerHoc = FilterHocProducts(Products);


export default ItemListContainerHoc;
