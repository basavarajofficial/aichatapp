import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { History } from "lucide-react";
import { chats } from "@/lib/chatHistory";

const HistoryData = () => {
  return (
      <div className="grid grid-cols-2 gap-2">
        <Sheet>
          <SheetTrigger asChild type="button" className="hover:cursor-pointer">
                <History />
          </SheetTrigger>
          <SheetContent side="right"  className="bg-gray-600 text-inherit">
            <SheetHeader  >
              <SheetTitle className="text-slate-100">History</SheetTitle>
              <SheetDescription className="text-slate-100">
                Find your previous conversations
              </SheetDescription>
            </SheetHeader>

            {/* history data */}
            <div className="flex flex-col gap-2 mt-8">
                {chats?.map((chat, index) => {
                    return(
                        <Button key={index} className="bg-gray-500">
                            <span>{chat.title}</span>
                        </Button>
                    )
                })}
            </div>

            <SheetFooter>
              {/* <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose> */}
            </SheetFooter>
          </SheetContent>
        </Sheet>
    </div>
  );
};

export default HistoryData;
