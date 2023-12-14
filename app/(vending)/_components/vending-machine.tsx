"use client";

import ProductItemsList from "./product-items-list";
import VendingIo from "./vending-io";
import { useState } from "react";
import Pocket from "./pocket";
import { Coin } from "@/lib/types";
import { PocketContext, change, userCoins } from "@/context/pocket-ctx";
import { ProductsContext, products } from "@/context/product-ctx";

const VendingMachine = () => {
  const [pocketCredit, setPocketCredit] = useState<number>(change);
  const [pocketCoins, setPocketCoins] = useState<Coin[]>(userCoins);

  const handlePocketCreditChange = (valueChange: number) => {
    setPocketCredit(pocketCredit + valueChange);
  };
  const handlePocketCoinChange = (value: number) => {
    let updatedCoins = pocketCoins.map((coin: Coin) =>
      coin.value === value ? { ...coin, amount: --coin.amount } : coin
    );
    setPocketCoins(updatedCoins);
  };

  return (
    <div className="flex flex-row gap-4 border-5">
      <ProductsContext.Provider value={products}>
        <PocketContext.Provider
          value={{
            pocketCredit,
            handlePocketCreditChange,
            pocketCoins,
            handlePocketCoinChange,
          }}
        >
          <>
            <ProductItemsList products={products} />
            <VendingIo />
            <Pocket />
          </>
        </PocketContext.Provider>
      </ProductsContext.Provider>
    </div>
  );
};

export default VendingMachine;
