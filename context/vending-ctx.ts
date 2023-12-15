import { Coin } from "@/lib/types";
import { createContext } from "react";

export const vendingCoins: Coin[] = [
  {
    value: 5,
    amount: 10,
  },
  {
    value: 10,
    amount: 10,
  },
  {
    value: 20,
    amount: 10,
  },
  {
    value: 50,
    amount: 10,
  },
];

export const VendingContext = createContext<any>({});
