"use client";

import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import VendingMachine from "./_components/vending-machine";
import { createContext } from "react";
import { Product } from "@/lib/types";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const ProductsContext = createContext<Product[]>([]);

const VendingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <VendingMachine />
      </div>
    </div>
  );
};
export default VendingPage;
