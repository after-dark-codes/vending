export interface Product {
  productName: string;
  price: number;
  ammount: number;
  code: number;
}

export const products: Product[] = [
  {
    productName: "water",
    price: 0.3,
    ammount: 0,
    code: 5,
  },
  {
    productName: "coffee",
    price: 0.1,
    ammount: 15,
    code: 3,
  },
  {
    productName: "soda",
    price: 0.45,
    ammount: 9,
    code: 2,
  },
  {
    productName: "ice tea",
    price: 0.4,
    ammount: 1,
    code: 8,
  },
  {
    productName: "gatorade",
    price: 0.3,
    ammount: 10,
    code: 9,
  },
  { productName: "diet coke", price: 0.65, ammount: 14, code: 4 },
];
