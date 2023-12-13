import React from "react";
import ProductItem from "./product-item";
import { Product } from "@/db/seed";

interface ProductItemListProps {
  products: Product[];
}
const ProductItemsList = ({ products }: ProductItemListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border-slate-400 border-2 rounded-lg">
      {products.map((product) => (
        <ProductItem
          key={product.code}
          code={product.code}
          ammount={product.ammount}
          price={product.price}
          productName={product.productName}
        />
      ))}
    </div>
  );
};

export default ProductItemsList;
