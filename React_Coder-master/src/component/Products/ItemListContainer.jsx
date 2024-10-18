import ItemList from "./ItemList";
import FilterHocProducts from "../../Hoc/HocFilterProducts";

const ItemListContainer = ({products}) => {
  console.log(products);
  
  return (
    <div>
      <div className="flex flex-col items-center my-8 lg:mx-14">
            <ItemList products={products}/>
      </div>
    </div>
  );
};

const ItemListContainerHoc = FilterHocProducts(ItemListContainer);


export default ItemListContainerHoc;
