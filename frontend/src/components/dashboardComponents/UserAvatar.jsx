import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown } from "lucide-react";
import { Settings } from "lucide-react";
import { LogOut } from "lucide-react";
import { CreditCard } from "lucide-react";
import { User } from "lucide-react";

function UserAvatar({userName, userEmail}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-center items-center gap-1 cursor-pointer">
          <Button size="icon" className="rounded-full">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
          <div className="flex flex-col items-start">
            <p className="text-md text-platinum-500/80">{userName}</p>
            <p className="text-sm text-platinum-500/50">{userEmail}</p>
          </div>
          <ChevronsUpDown className="size-5" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32  bg-space_indigo-200/80 text-platinum-500">
        <DropdownMenuGroup >
          <DropdownMenuItem className="focus:bg-platinum-500/10 focus:text-platinum-500">
            <User />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-platinum-500/10 focus:text-platinum-500">
            <CreditCard />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-platinum-500/10 focus:text-platinum-500">
            <Settings />
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">
            <LogOut />
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserAvatar;
