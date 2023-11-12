import Items from "./Items";
import { PRODUCTS,RESOURCES,COMPANY,SUPPORT } from "../utils/FooterData";
const ItemsContainer = () => {
  return (
    <div className="ml-7 grid grid-cols-4 gap-6">
      <Items Links={PRODUCTS} title="PRODUCTS"/>
      <Items Links={RESOURCES} title="RESOURCES"/>
      <Items Links={COMPANY} title="COMPANY"/>
      <Items Links={SUPPORT} title="SUPPORT"/>
    </div>
  );
};

export default ItemsContainer;
