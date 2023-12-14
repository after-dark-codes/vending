"use client";

import { Button } from "@/components/ui/button";
import { PocketContext } from "@/context/pocket-ctx";
import { BadgeCent } from "lucide-react";
import React, { useContext } from "react";

interface CoinProps {
  value: number;
  amount: number;
}
const Coin = ({ value, amount }: CoinProps) => {
  const { pocketChange, handlePocketCreditChange, _, handlePocketCoinChange } =
    useContext(PocketContext);

  const handleCoinClick = (value: number) => {
    handlePocketCreditChange(value * -1);
    handlePocketCoinChange(value);
  };

  return (
    <div className="flex items-center">
      <Button
        size="sm"
        className="rounded-full w-12 h-12 mr-1"
        onClick={() => handleCoinClick(value)}
      >
        {value * 100}
        <BadgeCent className="h-4 w-4" />
      </Button>
      x <p className="px-1">{amount}</p>
    </div>
  );
};

export default Coin;
