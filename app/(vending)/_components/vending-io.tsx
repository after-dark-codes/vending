"use client";

import { useContext, useState } from "react";
import Display from "./display";
import Keypad from "./keypad";
import CoinsIo from "./coins-io";
import { ProductsContext } from "@/context/product-ctx";
import { VendingContext } from "@/context/vending-ctx";
import { Product } from "@/lib/types";
import { MessageContext, defaultMessage } from "@/context/message-ctx";

const VendingIo = () => {
  const [enteredItem, setEnteredItem] = useState<number | null>(null);
  const { products, handleProductsChange } = useContext(ProductsContext);
  const { vendingCredit, handleVendorCoinReturn, handleVendingCreditChange } =
    useContext(VendingContext);

  const { handleMessageChange } = useContext(MessageContext);

  const handleKeypadInput = (key: number) => {
    setEnteredItem(key);
  };

  const handleOrder = () => {
    const product = products.filter((p: Product) => p.code === enteredItem)[0];

    const change: number = vendingCredit - product.price;
    if (product.amount <= 0) {
      handleMessageChange("Product not available");
    } else if (change >= 0) {
      handleProductsChange(enteredItem);
      handleVendorCoinReturn(change);
      handleVendingCreditChange(vendingCredit * -1);
      setEnteredItem(null);
      handleMessageChange("Take product");
    } else {
      handleMessageChange("Insuficient credits");
    }
  };

  return (
    <div className="flex flex-col items-center justify-evenly p-4 border-slate-400 border-2 rounded-lg">
      <CoinsIo />
      <Display enteredItem={enteredItem} />
      <Keypad
        input={(key) => handleKeypadInput(key)}
        cancelInput={() => setEnteredItem(null)}
        order={handleOrder}
      />
    </div>
  );
};

export default VendingIo;
