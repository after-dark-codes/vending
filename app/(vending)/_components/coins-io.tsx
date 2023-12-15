"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VendingContext } from "@/context/vending-ctx";
import { Coins, RectangleVertical } from "lucide-react";
import { useContext } from "react";

const CoinsIo = () => {
  const { vendingCredit, handleVendingCreditChange, handleVendorCoinReturn } =
    useContext(VendingContext);

  const handleReturnChange = () => {
    handleVendingCreditChange(vendingCredit * -1);
    handleVendorCoinReturn(vendingCredit, false);
  };

  return (
    <div className="flex flex-col">
      <div
        className="flex flex-row justify-end content-center"
        onClick={handleReturnChange}
      >
        <Button size="sm" variant="default" className="rounded-lg mb-1">
          <Coins className="w-4 h-4" />
        </Button>
        <RectangleVertical className="h-6 w-6" />
      </div>
      <Input
        disabled
        type="text"
        defaultValue={`credit: ${(vendingCredit / 100).toFixed(2)}`}
        className="mb-1"
      />
    </div>
  );
};

export default CoinsIo;
