import { Clock, DollarSign, Ship, TrendingUp } from "lucide-react";

export const KPI = [
  {
    id: 0,
    label: "Gross Revenue",
    value: "$1,820,000.00",
    prevValue: "$1,560,000.00",
    icon: DollarSign,
  },
  {
    id: 1,
    label: "Total Shipments",
    value: "156 MT",
    prevValue: "140 MT",
    icon: Ship,
  },
  {
    id: 2,
    label: "On-Time Delivery",
    value: "94.2%",
    prevValue: "95.7%",
    icon: TrendingUp,
  },
  {
    id: 3,
    label: "Avg Transit Time",
    value: "12.4 days",
    prevValue: "11.8 days",
    icon: Clock,
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

export const MONTHLY_DATA_CONFIG = {
  Sales: {
    label: "Sales",
    color: "#759bab",
  },
  Shipments: {
    label: "Shipments",
    color: "#edf2f4",
  },
  October: {
    label: "October"
  },
  November: {
    label: "November"
  },
  December: {
    label: "December"
  },
  January: {
    label: "January"
  },
  February: {
    label: "February"
  },
  March: {
    label: "March"
  },
};

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
