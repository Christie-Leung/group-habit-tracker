"use client"

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Copy, MoreHorizontal, Trash } from "lucide-react";
import { toast } from "react-hot-toast";
import axios from "axios";


import { Group } from "@/models/group"
import { Button } from "@/components/ui/button";

interface CellActionProps {
  data: Group;
}

export const CellAction: React.FC<CellActionProps> = ({
  data,
}) => {

  const router = useRouter();

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success("Invite Code copied to the clipbaord.")
  };

  const onLeave = async () => {
    try {
      // await axios.delete(`/dir`);
      router.refresh();
      toast.success("Successfully left group.");
    } catch (error) {
      toast.error("Error Message");
    }
  }

  return ( 
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 w-8 p-0"
          >
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4"/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>
            Actions
          </DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onCopy(data.inviteCode)}>
            <Copy className="mr-2 h-4 w-4"/>
            Copy Invite Code
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onLeave}>
            <Trash className="mr-2 h-4 w-4"/>
            Leave Group
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
   );
}
 