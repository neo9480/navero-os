import DashboardLayout from "@/components/dashboardComponents/DashboardLayout";
import { Ship, Clock, TrendingUp, DollarSign } from "lucide-react";

const KPI = [
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

const MONTHLY_DATA = [
  { month: "Oct", shipments: 18, revenue: 120 },
  { month: "Nov", shipments: 22, revenue: 145 },
  { month: "Dec", shipments: 28, revenue: 180 },
  { month: "Jan", shipments: 32, revenue: 210 },
  { month: "Feb", shipments: 26, revenue: 175 },
  { month: "Mar", shipments: 30, revenue: 192 },
];

const TOP_ROUTES = [
  { route: "Mumbai → Rotterdam", shipments: 28, pct: 82 },
  { route: "Shanghai → Los Angeles", shipments: 24, pct: 71 },
  { route: "Hamburg → São Paulo", shipments: 19, pct: 56 },
  { route: "Singapore → Dubai", shipments: 16, pct: 47 },
  { route: "Tokyo → Sydney", shipments: 12, pct: 35 },
];

const DOC_METRICS = [
  { type: "Commercial Invoices", count: 142, avgTime: "2.1 hrs" },
  { type: "Bills of Lading", count: 98, avgTime: "3.4 hrs" },
  { type: "Certificates of Origin", count: 76, avgTime: "4.2 hrs" },
  { type: "Customs Declarations", count: 64, avgTime: "5.8 hrs" },
];

const maxShipments = Math.max(...MONTHLY_DATA.map((d) => d.shipments));

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-platinum-500 font-host_grotesk">
          Analytics
        </h1>
        <p className="text-sm text-platinum-400 mt-1">
          Trade performance insights and metrics
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {KPI.map((k, i) => (
          <div
            key={i}
            className="p-5 rounded-xl bg-space_indigo-300/50 border border-space_indigo-500">
            <div
              className={`w-10 h-10 rounded-lg ${k.bg} flex items-center justify-center mb-3`}>
              <k.icon className={`w-5 h-5 ${k.color}`} />
            </div>
            <div className="text-2xl font-bold text-platinum-500 font-host_grotesk">
              {k.value}
            </div>
            <div className="text-sm text-platinum-400 mt-1">{k.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Shipment Volume Chart (CSS bars) */}
        <div className="rounded-xl bg-space_indigo-300/50 border border-space_indigo-500 p-6">
          <h3 className="text-lg font-bold text-platinum-500 font-host_grotesk mb-6">
            Shipment Volume
          </h3>
          <div className="flex items-end gap-4 h-48">
            {MONTHLY_DATA.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-xs text-platinum-400">{d.shipments}</span>
                <div
                  className="w-full bg-linear-to-t from-punch_red-500 to-punch_red-600 rounded-t-md transition-all duration-500"
                  style={{ height: `${(d.shipments / maxShipments) * 100}%` }}
                />
                <span className="text-xs text-platinum-400">{d.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Trade Routes */}
        <div className="rounded-xl bg-space_indigo-300/50 border border-space_indigo-500 p-6">
          <h3 className="text-lg font-bold text-platinum-500 font-host_grotesk mb-6">
            Top Trade Routes
          </h3>
          <div className="space-y-4">
            {TOP_ROUTES.map((r, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm text-platinum-400">{r.route}</span>
                  <span className="text-sm text-platinum-500 font-medium">
                    {r.shipments} shipments
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-space_indigo-400/50">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-blue-500 to-cyan-400 transition-all duration-500"
                    style={{ width: `${r.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Document Processing */}
        <div className="rounded-xl bg-space_indigo-300/50 border border-space_indigo-500 p-6">
          <h3 className="text-lg font-bold text-platinum-500 font-host_grotesk mb-4">
            Document Processing
          </h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-space_indigo-500">
                <th className="text-left py-2 text-platinum-400 font-medium">
                  Type
                </th>
                <th className="text-left py-2 text-platinum-400 font-medium">
                  Count
                </th>
                <th className="text-left py-2 text-platinum-400 font-medium">
                  Avg Time
                </th>
              </tr>
            </thead>
            <tbody>
              {DOC_METRICS.map((d, i) => (
                <tr key={i} className="border-b border-space_indigo-500/50">
                  <td className="py-2.5 text-platinum-400">{d.type}</td>
                  <td className="py-2.5 text-platinum-500 font-medium">
                    {d.count}
                  </td>
                  <td className="py-2.5 text-platinum-400">{d.avgTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Compliance Score */}
        <div className="rounded-xl bg-space_indigo-300/50 border border-space_indigo-500 p-6">
          <h3 className="text-lg font-bold text-platinum-500 font-host_grotesk mb-4">
            Compliance Score
          </h3>
          <div className="flex items-center justify-center py-8">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#222334"
                  strokeWidth="10"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${94.2 * 3.14} ${100 * 3.14}`}
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%">
                    <stop offset="0%" stopColor="#ef233c" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-platinum-500 font-host_grotesk">
                  94.2%
                </span>
                <span className="text-xs text-platinum-400">Score</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="text-center p-3 rounded-lg bg-space_indigo-400/30">
              <div className="text-lg font-bold text-green-400">148</div>
              <div className="text-xs text-platinum-400">Passed</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-space_indigo-400/30">
              <div className="text-lg font-bold text-red-400">9</div>
              <div className="text-xs text-platinum-400">Flagged</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
