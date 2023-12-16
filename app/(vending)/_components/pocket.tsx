"use client";

import { useContext } from "react";
import Coin from "./coin";
import { Separator } from "@/components/ui/separator";
import { Euro } from "lucide-react";
import { PocketContext } from "@/context/pocket-ctx";

const Pocket = () => {
  const { pocketCredit, pocketCoins } = useContext(PocketContext);

  return (
    <div className="mt-4 md:mt-0 flex flex-col p-4 items-center border-slate-400 border-2 rounded-lg justify-between">
      <div className="flex flex-col justify-start gap-1">
        {pocketCoins.map(
          (coin: { amount: number; value: number }) =>
            !!coin.amount && (
              <Coin key={coin.value} value={coin.value} amount={coin.amount} />
            )
        )}
      </div>
      <Separator className="my-2" />
      <p className="text-sm ">
        Total: {(pocketCredit / 100).toFixed(2)}
        <Euro className="h-3 w-3 inline-block" />
      </p>
    </div>
  );
};

export default Pocket;
