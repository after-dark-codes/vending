import { Product, products } from "@/db/seed";
import ProductItemsList from "./product-items-list";
import VendingIo from "./vending-io";
import { createContext, useContext } from "react";
import Pocket from "./pocket";

export const ProductsContext = createContext<Product[]>([]);

const VendingMachine = () => {
  return (
    <div className="flex flex-row gap-4 border-5">
      <ProductsContext.Provider value={products}>
        <>
          <ProductItemsList products={products} />
          <VendingIo />
        </>
      </ProductsContext.Provider>
      <Pocket />
    </div>
  );
};

export default VendingMachine;
