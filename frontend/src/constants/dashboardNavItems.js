import { Receipt } from "lucide-react";
import { CogIcon } from "lucide-react";
import { User } from "lucide-react";
import { CreditCard } from "lucide-react";
import {
  Bell,
  ChartColumn,
  FileArchive,
  LayoutDashboard,
  Settings,
  Ship,
  Store,
} from "lucide-react";

export const dashboardNavItems = [
  {
    group: "Overview",
    items: [
      { id: 0, label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
      { id: 1, label: "Analytics", path: "/analytics", icon: ChartColumn },
      { id: 2, label: "Shipments", path: "/shipments", icon: Ship },
    ],
  },
  {
    group: "Trade",
    items: [
      { id: 3, label: "Documents", path: "/documents", icon: FileArchive },
      { id: 4, label: "Marketplace", path: "/marketplace", icon: Store },
      {id: 5, label: "Operations", path: "/operations", icon: CogIcon}
    ],
  },
  {
    group: "Billing",
    items: [
      { id: 6, label: "Subscriptions", path: "/subscriptions", icon: CreditCard },
      { id: 7, label: "Invoices", path: "/invoices", icon: Receipt },
    ],
  },
  {
    group: "Account",
    items: [
      { id: 8, label: "Notifications", path: "/notifications", icon: Bell },
      { id: 9, label: "Settings", path: "/settings", icon: Settings },
      { id: 10, label: "Profile", path: "/profile", icon: User },
      
    ],
  },
];

export const dataTablefilterParams = [
  {id: 0, label: "Today", type: "Today"},
  {id: 1, label: "Yesterday", type: "Yesterday"},
  {id: 2, label: "Last 7 days", type: "Last 7 days"},
  {id: 3, label: "Last 30 days", type: "Last 30 days"},
  {id: 4, label: "Last year", type: "Last year"},
]