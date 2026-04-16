import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { BellDot } from "lucide-react";
import { Bell } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

const Notifications = ({ notificationArray, setNotificationArray }) => {
  const unreadCount = notificationArray.filter(
    (n) => n.status === "unread",
  ).length;

  const handleMarkRead = () => {
    setNotificationArray((prev) => prev.map((n) => ({ ...n, status: "read" })));
  };

  return (
    <DropdownMenu>
      {console.log(unreadCount)}
      <DropdownMenuTrigger className="rounded-md" asChild>
        <div className="w-[4vw] h-9 flex justify-center items-center border cursor-pointer rounded-md">
          {unreadCount > 0 ?
            <BellDot className="size-5 [&_circle]:fill-red-500 [&_circle]:stroke-red-500" />
          : <Bell className="size-5" />}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-space_indigo-200/80 p-2 text-platinum-500 font-neue_montreal">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <Separator orientation="horizontal" />
        <ScrollArea>
          <DropdownMenuGroup className={`max-h-[40vh] p-3`}>
            {unreadCount > 0 ?
              notificationArray.map(
                ({ id, type, text, time, icon: Icon, color, status }) =>
                  status === "unread" && (
                    <DropdownMenuItem
                      key={id}
                      className="group focus:text-platinum-500 focus:bg-platinum-500/10">
                      {console.log(status)}
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <Icon className={`size-6 ${color}`} />
                          <p className="text-[16px] font-medium">{type}</p>
                        </div>
                        <p className="text-[14px] group-focus:text-platinum-500 font-extralight text-platinum-500/70">
                          {text}
                        </p>
                        <p className="text-xs font-extralight group-focus:text-platinum-500 text-platinum-500/40">
                          {time}
                        </p>
                      </div>
                    </DropdownMenuItem>
                  ),
              )
            : <DropdownMenuItem className="focus:bg-transparent focus:text-platinum-500">
                No new notifications
              </DropdownMenuItem>
            }
          </DropdownMenuGroup>
        </ScrollArea>
        <Separator orientation="horizontal" />
        {unreadCount > 0 ?
          <button
            className="w-full h-[6vh] mt-2 flex justify-center items-center rounded-xl border border-platinum-500/50 shadow bg-platinum-500 text-space_indigo-100 hover:bg-space_indigo-100 hover:text-platinum-500 transition-all cursor-pointer"
            onClick={unreadCount > 0 && handleMarkRead}>
            Mark all as Read
          </button>
        : <a
            className="w-full h-[6vh] mt-2 flex justify-center items-center rounded-xl border border-platinum-500/50 shadow bg-platinum-500 text-space_indigo-100 hover:bg-space_indigo-100 hover:text-platinum-500 transition-all cursor-pointer"
            href="/notifications">
            View all notifications
          </a>
        }
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default Notifications;
