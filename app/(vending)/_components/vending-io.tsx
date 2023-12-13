"use client";

import { useState } from "react";
import Display from "./display";
import Keypad from "./keypad";
import CoinsIo from "./coins-io";

const VendingIo = () => {
  const [enteredItem, setEnteredItem] = useState<number | null>(null);

  const handleKeypadInput = (key: number) => {
    setEnteredItem(key);
  };

  const handleOrder = () => {
    console.log("ordered " + enteredItem);
    setEnteredItem(null);
  };

  return (
    <div className="flex flex-col items-center justify-evenly p-4 border-slate-400 border-2 rounded-lg">
      <CoinsIo />
      <Display enteredItem={enteredItem} />
      <Keypad
        input={(key) => handleKeypadInput(key)}
        cancelInput={() => setEnteredItem(null)}
        order={handleOrder}
      />
    </div>
  );
};

export default VendingIo;
