import { useContext } from "react";
import ProductItem from "./product-item";
import { Product } from "@/lib/types";
import { ProductsContext } from "@/context/product-ctx";

const ProductItemsList = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border-slate-400 border-2 rounded-lg">
      {products.map((product: Product) => (
        <ProductItem
          key={product.code}
          code={product.code}
          amount={product.amount}
          price={product.price}
          productName={product.productName}
        />
      ))}
    </div>
  );
};

export default ProductItemsList;
