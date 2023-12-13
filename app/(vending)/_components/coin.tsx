import { Button } from "@/components/ui/button";
import { BadgeCent } from "lucide-react";
import React from "react";

interface CoinProps {
  value: number;
  ammount: number;
}
const Coin = ({ value, ammount }: CoinProps) => {
  return (
    <div className="flex items-center">
      <Button size="sm" className="rounded-full w-12 h-12 mr-1">
        {value * 100}
        <BadgeCent className="h-4 w-4" />
      </Button>
      x <p className="px-1">{ammount}</p>
    </div>
  );
};

export default Coin;
