"use client";

import { useState } from "react";
import Coin from "./coin";
import { Separator } from "@/components/ui/separator";
import { Euro } from "lucide-react";
import { pocketChange } from "@/lib/const";

const Pocket = () => {
  const total = pocketChange.reduce(
    (total, coin) => total + coin.ammount * coin.value,
    0
  );
  const [pocketTotal, setPocketTotal] = useState<number>(total);

  return (
    <div className="flex flex-col p-4 border-slate-400 border-2 rounded-lg">
      {pocketChange.map((coin) => (
        <Coin key={coin.value} value={coin.value} ammount={coin.ammount} />
      ))}
      <Separator className="my-2" />
      <p className="text-sm">
        Total: {pocketTotal}
        <Euro className="h-3 w-3 inline-block" />
      </p>
    </div>
  );
};

export default Pocket;
