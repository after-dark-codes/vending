import { Product } from "@/lib/types";
import { createContext } from "react";

export const products: Product[] = [
  {
    productName: "water",
    price: 0.3,
    amount: 0,
    code: 5,
  },
  {
    productName: "coffee",
    price: 0.1,
    amount: 15,
    code: 3,
  },
  {
    productName: "soda",
    price: 0.45,
    amount: 9,
    code: 2,
  },
  {
    productName: "ice tea",
    price: 0.4,
    amount: 1,
    code: 8,
  },
  {
    productName: "gatorade",
    price: 0.3,
    amount: 10,
    code: 9,
  },
  { productName: "diet coke", price: 0.65, amount: 14, code: 4 },
];

export const ProductsContext = createContext<Product[]>([]);
