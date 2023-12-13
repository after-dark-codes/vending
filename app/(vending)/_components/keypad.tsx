import { Button } from "@/components/ui/button";
import { useState } from "react";

interface KeypadProps {
  input: (key: number) => void;
  cancelInput: () => void;
  order: () => void;
}
const Keypad = ({ input, cancelInput, order }: KeypadProps) => {
  const [validInput, setValidInput] = useState<boolean>(false);

  const handleInput = (key: number) => {
    input(key);
    setValidInput(true);
  };

  const handleCancelInput = () => {
    cancelInput();
    setValidInput(false);
  };

  const handleOrder = () => {
    order();
    setValidInput(false);
  };

  return (
    <div className="grid grid-cols-3">
      {Array.from(Array(10).keys()).map((k) => (
        <Button
          size="sm"
          variant="outline"
          className="w-[40px] h-[40px] rounded-full"
          key={k}
          onClick={() => handleInput(k)}
        >
          {k}
        </Button>
      ))}
      <Button
        size="sm"
        variant="destructive"
        className="w-[40px] h-[40px] rounded-full"
        onClick={() => handleCancelInput()}
      >
        C
      </Button>
      <Button
        size="sm"
        variant="default"
        className="w-[40px] h-[40px] rounded-full"
        onClick={() => handleOrder()}
        disabled={!validInput}
      >
        E
      </Button>
    </div>
  );
};

export default Keypad;
