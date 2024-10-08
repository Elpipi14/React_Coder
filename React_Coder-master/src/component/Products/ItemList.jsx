import Item from "./ItemProduct"

const ItemList = ({products}) => {
  return (
    <div className="mt-6 text-center grid grid-cols-1 px-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {
        products.map((product) => (
        <Item product={product} key={product.id} />
      ))
      }
    </div>
  );
};

export default ItemList;
