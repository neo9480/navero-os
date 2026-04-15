import { Clock, DollarSign, Ship, TrendingUp } from "lucide-react";

export const KPI = [
  {
    label: "Total Shipments",
    value: "156",
    icon: Ship,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    label: "On-Time Delivery",
    value: "94.2%",
    icon: TrendingUp,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    label: "Avg Transit Time",
    value: "12.4 days",
    icon: Clock,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    label: "Total Revenue",
    value: "$1.82M",
    icon: DollarSign,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

export const MONTHLY_DATA = [
  { month: "Oct", shipments: 18, revenue: 120 },
  { month: "Nov", shipments: 22, revenue: 145 },
  { month: "Dec", shipments: 28, revenue: 180 },
  { month: "Jan", shipments: 32, revenue: 210 },
  { month: "Feb", shipments: 26, revenue: 175 },
  { month: "Mar", shipments: 30, revenue: 192 },
];

export const TOP_ROUTES = [
  { route: "Mumbai → Rotterdam", shipments: 28, pct: 82 },
  { route: "Shanghai → Los Angeles", shipments: 24, pct: 71 },
  { route: "Hamburg → São Paulo", shipments: 19, pct: 56 },
  { route: "Singapore → Dubai", shipments: 16, pct: 47 },
  { route: "Tokyo → Sydney", shipments: 12, pct: 35 },
];

export const DOC_METRICS = [
  { type: "Commercial Invoices", count: 142, avgTime: "2.1 hrs" },
  { type: "Bills of Lading", count: 98, avgTime: "3.4 hrs" },
  { type: "Certificates of Origin", count: 76, avgTime: "4.2 hrs" },
  { type: "Customs Declarations", count: 64, avgTime: "5.8 hrs" },
];

export const maxShipments = Math.max(...MONTHLY_DATA.map((d) => d.shipments));
