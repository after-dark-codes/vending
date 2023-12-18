import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { MessageContext } from "@/context/message-ctx";
import { useContext } from "react";

interface DisplayProps {
  enteredItem: number | null;
}

const Display = ({ enteredItem }: DisplayProps) => {
  const { message } = useContext(MessageContext);

  return (
    <div className="flex flex-col flex-nowrap overflow-hidden">
      <Label className="animate-infinite-scroll flex items-center justify-center whitespace-nowrap">
        {message}
      </Label>
      <Separator />
      <Input
        disabled
        type="text"
        defaultValue={enteredItem == null ? "" : `code: ${enteredItem}`}
      />
    </div>
  );
};

export default Display;
