"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import Pocket from "./pocket";

const Sidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <Button
        onClick={toggleSidebar}
        className="block md:hidden mr-2"
        variant="ghost"
        size="sm"
      >
        <Menu className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={toggleSidebar}>
        <SheetContent className="md:[w-50px]">
          <Pocket />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
