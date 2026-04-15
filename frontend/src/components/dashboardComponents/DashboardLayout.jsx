import { dashboardNavItems } from "@/constants/dashboardNavItems";
import { Sidebar } from "lucide-react";
import { useState } from "react";
import ABgDark from "../commonComponents/ABgDark";
import { useLocation } from "react-router-dom";
import { ScrollArea } from "../ui/scroll-area";

const DashboardLayout = ({ Children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const sidebarNavItems = dashboardNavItems;
  return (
    <div>
      <ABgDark />
      <div className="bg-zinc-900/70 text-platinum-500 z-10 backdrop-blur-xl w-full h-screen flex">
        {collapsed ?
          <nav className="h-full w-[5vw]">
            <div className="h-[10vh] flex justify-center items-center">
              <div className="flex flex-col h-full justify-center gap-2 mt-10 items-center ">
                <img className="size-6" src="imgs/dark-N-removebg.png" />
                <Sidebar
                  className="size-6  cursor-pointer"
                  onClick={() => setCollapsed(false)}
                />
              </div>
            </div>
            <div className="h-[90vh] flex flex-col pt-10 items-center gap-8">
              {sidebarNavItems.map(({ group, items }) => {
                return (
                  <div key={group} className="flex flex-col gap-2">
                    {items.map(({ id, path, icon: Icon }) => {
                      const isActive = location.pathname === path;
                      return (
                        <div
                          key={id}
                          className={`h-[4vh] w-[4vh] flex justify-center items-center hover:bg-flag_red-500/50 rounded-sm ${isActive && "bg-flag_red-400"}`}>
                          <a href={path}>
                            <Icon
                              className={`size-6`}
                            />
                          </a>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </nav>
        : <nav className="h-full w-[20vw]">
            <div className="h-[10vh] w-full flex justify-center items-center gap-2">
              <div className="flex justify-center items-center gap-2 h-full w-full">
                <img className="size-8" src="imgs/dark-N-removebg.png" />
                <img className="h-6" src="imgs/dark-navero-removebg.png" />
              </div>
              <span className="h-10 w-10 flex justify-center items-center">
                <Sidebar
                  className="size-6  cursor-pointer"
                  onClick={() => setCollapsed(true)}
                />
              </span>
            </div>
            <div className="h-[90vh] flex flex-col p-7 gap-8">
              {sidebarNavItems.map(({ group, items }) => {
                return (
                  <div key={group} className="">
                    <p className="text-platinum-500/50">{group}</p>
                    {items.map( ( { id, label, path, icon: Icon } ) => {
                      const isActive = location.pathname === path
                      return (
                        <div className={`flex items-center w-full rounded-sm hover:bg-flag_red-500/50 cursor-pointer ${isActive && "bg-flag_red-500/80"} mt-1 border border-lavender_grey-200/50 shadow  p-1.5`}>
                          <a
                            key={id}
                            href={path}
                            className=" flex justify-center items-center gap-2">
                            <Icon className="size-6 " />
                            <p className="">{label}</p>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </nav>
        }

        <div className="m-[0.5vh] w-full rounded-xl bg-space_indigo-100/70 border overflow-hidden border-zinc-700">
          <nav className="w-full h-[9.5vh] "></nav>
          <hr className="border-zinc-700" />
          <ScrollArea onWheel={(e) => e.stopPropagation()} className="h-[88vh]">
            {Children}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
