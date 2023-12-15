import { Coin } from "@/lib/types";
import { createContext } from "react";

export const userCoins: Coin[] = [
  {
    value: 5,
    amount: 4,
  },
  {
    value: 10,
    amount: 3,
  },
  {
    value: 20,
    amount: 5,
  },
  {
    value: 50,
    amount: 2,
  },
];

export const change = userCoins.reduce(
  (total: number, coin: { amount: number; value: number }) =>
    total + coin.amount * coin.value,
  0
);

export const PocketContext = createContext<any>({});
