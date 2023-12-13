"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Coins, RectangleVertical } from "lucide-react";
import { useState } from "react";

const CoinsIo = () => {
  const [credit, setCredit] = useState<number>(0);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-end content-center">
        <Button size="sm" variant="default" className="rounded-lg mb-1">
          <Coins className="w-4 h-4" />
        </Button>
        <RectangleVertical className="h-6 w-6" />
      </div>
      <Input
        disabled
        type="text"
        defaultValue={`credit: ${credit}`}
        className="mb-1"
      />
    </div>
  );
};

export default CoinsIo;
