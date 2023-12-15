import { Product } from "@/lib/types";
import { createContext } from "react";

export const vendorProducts: Product[] = [
  {
    productName: "water",
    price: 30,
    amount: 0,
    code: 5,
  },
  {
    productName: "coffee",
    price: 10,
    amount: 1,
    code: 3,
  },
  {
    productName: "soda",
    price: 45,
    amount: 9,
    code: 2,
  },
  {
    productName: "ice tea",
    price: 40,
    amount: 1,
    code: 8,
  },
  {
    productName: "gatorade",
    price: 30,
    amount: 10,
    code: 9,
  },
  { productName: "diet coke", price: 65, amount: 14, code: 4 },
];

export const ProductsContext = createContext<any>({});
