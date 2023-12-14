import { Coin } from "@/lib/types";
import { createContext } from "react";

export const vendingCoins: Coin[] = [
  {
    value: 0.05,
    amount: 10,
  },
  {
    value: 0.1,
    amount: 10,
  },
  {
    value: 0.2,
    amount: 10,
  },
  {
    value: 0.5,
    amount: 10,
  },
];

export const VendingContext = createContext<any>({});
