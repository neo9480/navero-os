import {
  DollarSign,
  FileCheck,
  FileText,
  ShieldAlert,
  ShieldCheck,
  Ship,
} from "lucide-react";

export const STATS = [
  {
    label: "Active Shipments",
    value: "24",
    change: "+12%",
    up: true,
    icon: Ship,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    label: "Pending Documents",
    value: "12",
    change: "-5%",
    up: false,
    icon: FileText,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    label: "Compliance Alerts",
    value: "3",
    change: "+2",
    up: true,
    icon: ShieldAlert,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    label: "Revenue This Month",
    value: "$142K",
    change: "+18%",
    up: true,
    icon: DollarSign,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
];

export const SHIPMENTS = [
  {
    id: "SHP-2024-001",
    route: "Mumbai → Rotterdam",
    status: "In Transit",
    eta: "Mar 18, 2026",
    docs: 8,
  },
  {
    id: "SHP-2024-002",
    route: "Shanghai → Los Angeles",
    status: "Customs Hold",
    eta: "Mar 15, 2026",
    docs: 12,
  },
  {
    id: "SHP-2024-003",
    route: "Hamburg → São Paulo",
    status: "Delivered",
    eta: "Mar 10, 2026",
    docs: 10,
  },
  {
    id: "SHP-2024-004",
    route: "Singapore → Dubai",
    status: "In Transit",
    eta: "Mar 22, 2026",
    docs: 6,
  },
  {
    id: "SHP-2024-005",
    route: "Tokyo → Sydney",
    status: "Pending",
    eta: "Mar 25, 2026",
    docs: 4,
  },
  {
    id: "SHP-2024-006",
    route: "New York → London",
    status: "In Transit",
    eta: "Mar 20, 2026",
    docs: 9,
  },
];

export const ACTIVITIES = [
  {
    text: "Commercial Invoice uploaded for SHP-2024-001",
    time: "2 hours ago",
    icon: FileText,
    color: "text-blue-400",
  },
  {
    text: "Shipment SHP-2024-003 delivered to São Paulo",
    time: "5 hours ago",
    icon: Ship,
    color: "text-green-400",
  },
  {
    text: "Compliance check passed for SHP-2024-004",
    time: "8 hours ago",
    icon: ShieldCheck,
    color: "text-emerald-400",
  },
  {
    text: "Bill of Lading generated for SHP-2024-006",
    time: "12 hours ago",
    icon: FileCheck,
    color: "text-purple-400",
  },
  {
    text: "Customs hold alert for SHP-2024-002",
    time: "1 day ago",
    icon: ShieldAlert,
    color: "text-red-400",
  },
];

export const statusColor = {
  "In Transit": "bg-blue-500/20 text-blue-400",
  "Customs Hold": "bg-red-500/20 text-red-400",
  Delivered: "bg-green-500/20 text-green-400",
  Pending: "bg-amber-500/20 text-amber-400",
};
