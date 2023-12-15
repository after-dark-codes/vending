"use client";

import ProductItemsList from "./product-items-list";
import VendingIo from "./vending-io";
import { useState } from "react";
import Pocket from "./pocket";
import { Coin, Product } from "@/lib/types";
import { PocketContext, change, userCoins } from "@/context/pocket-ctx";
import { ProductsContext, vendorProducts } from "@/context/product-ctx";
import { VendingContext, vendingCoins } from "@/context/vending-ctx";

const VendingMachine = () => {
  const [pocketCredit, setPocketCredit] = useState<number>(change);
  const [pocketCoins, setPocketCoins] = useState<Coin[]>(userCoins);
  const [vendingCredit, setVendingCredit] = useState<number>(0);
  const [vendorCoins, setVendorCoins] = useState<Coin[]>(vendingCoins);
  const [products, setProducts] = useState<Product[]>(vendorProducts);

  const handlePocketCreditChange = (valueChange: number) => {
    setPocketCredit(pocketCredit + valueChange);
  };

  const handlePocketCoinChange = (value: number) => {
    let updatedCoins = pocketCoins.map((coin: Coin) =>
      coin.value === value ? { ...coin, amount: --coin.amount } : coin
    );
    setPocketCoins(updatedCoins);
  };

  const handleVendingCreditChange = (valueChange: number) => {
    setVendingCredit(vendingCredit + valueChange);
  };

  const handleVendorCoinReturn = (value: number) => {
    const sortedCoins = [50, 20, 10, 5];
    const change = value;

    for (let i = 0; i < sortedCoins.length; i++) {
      if (value <= 0) break;
      const coin = sortedCoins[i];
      while (value >= coin) {
        const updatedVendorCoins = vendorCoins.map((c: Coin) => {
          if (c.value === coin && c.amount > 0) {
            value -= coin;
            return { ...c, amount: --c.amount };
          }
          {
            return c;
          }
        });

        setVendorCoins(updatedVendorCoins);

        const updatedPocketCoins = pocketCoins.map((c: Coin) =>
          c.value === coin ? { ...c, amount: ++c.amount } : c
        );
        setPocketCoins(updatedPocketCoins);
      }
    }

    setPocketCredit(pocketCredit + change);
  };

  const handleVendorCoinInsert = (value: number) => {
    let updatedCoins = vendingCoins.map((coin: Coin) =>
      coin.value === value ? { ...coin, amount: ++coin.amount } : coin
    );
    setVendorCoins(updatedCoins);
  };

  const handleProductsChange = (code: number) => {
    const updatedProducts = products.map((product: Product) =>
      product.code === code ? { ...product, amount: --product.amount } : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="flex flex-row gap-4 border-5">
      <ProductsContext.Provider
        value={{
          products,
          handleProductsChange,
        }}
      >
        <VendingContext.Provider
          value={{
            vendingCredit,
            handleVendingCreditChange,
            vendorCoins,
            handleVendorCoinInsert,
            handleVendorCoinReturn,
          }}
        >
          <PocketContext.Provider
            value={{
              pocketCredit,
              handlePocketCreditChange,
              pocketCoins,
              handlePocketCoinChange,
            }}
          >
            <>
              <ProductItemsList />
              <VendingIo />
              <Pocket />
            </>
          </PocketContext.Provider>
        </VendingContext.Provider>
      </ProductsContext.Provider>
    </div>
  );
};

export default VendingMachine;
