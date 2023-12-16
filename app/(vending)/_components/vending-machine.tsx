"use client";

import ProductItemsList from "./product-items-list";
import VendingIo from "./vending-io";
import Pocket from "./pocket";

const VendingMachine = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row  gap-4 border-5">
      <>
        <ProductItemsList />
        <VendingIo />
        <div className="hidden md:block">
          <Pocket />
        </div>
      </>
    </div>
  );
};

export default VendingMachine;
