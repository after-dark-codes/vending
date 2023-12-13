import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface DisplayProps {
  enteredItem: number | null;
}

const Display = ({ enteredItem }: DisplayProps) => {
  return (
    <div className="flex flex-col flex-nowrap overflow-hidden">
      <Label className="animate-infinite-scroll flex items-center justify-center whitespace-nowrap">
        Select Item
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
