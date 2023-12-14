"use client";

import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Product } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Circle, EuroIcon } from "lucide-react";

const ProductItem = ({ productName, code, amount, price }: Product) => {
  return (
    <div className="w-[200px] flex flex-col border-2 rounded-lg border-slate-600">
      <div className="flex flex-row justify-between">
        <Label className="text-xl px-2 font-black">{productName}</Label>
        <Circle
          className={cn(
            "w-4 h-4 border-0 mr-1 pt-1",
            !!amount ? "fill-lime-500" : "fill-rose-500"
          )}
        />
      </div>
      <div className="flex flex-row justify-between items-center">
        <Label className="text-sm px-2 font-normal text-zinc-500">price</Label>
        <div className="flex items-center px-2">
          {price}
          <EuroIcon className="w-4 h-4 text-zinc-500" />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <Label className="text-sm px-2 font-normal text-zinc-500">code</Label>
        <div className="flex items-center px-2 pb-1 font-normal">
          <Badge variant="default">{code}</Badge>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
