import DashboardLayout from '@/components/dashboardComponents/DashboardLayout';
import {
  Ship, FileText, ShieldAlert, DollarSign,
  Plus, FileCheck, ShieldCheck, ArrowUpRight, ArrowDownRight,
  Clock
} from 'lucide-react';

const STATS = [
  { label: 'Active Shipments', value: '24', change: '+12%', up: true, icon: Ship, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { label: 'Pending Documents', value: '12', change: '-5%', up: false, icon: FileText, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  { label: 'Compliance Alerts', value: '3', change: '+2', up: true, icon: ShieldAlert, color: 'text-red-400', bg: 'bg-red-500/10' },
  { label: 'Revenue This Month', value: '$142K', change: '+18%', up: true, icon: DollarSign, color: 'text-green-400', bg: 'bg-green-500/10' },
];

const SHIPMENTS = [
  { id: 'SHP-2024-001', route: 'Mumbai → Rotterdam', status: 'In Transit', eta: 'Mar 18, 2026', docs: 8 },
  { id: 'SHP-2024-002', route: 'Shanghai → Los Angeles', status: 'Customs Hold', eta: 'Mar 15, 2026', docs: 12 },
  { id: 'SHP-2024-003', route: 'Hamburg → São Paulo', status: 'Delivered', eta: 'Mar 10, 2026', docs: 10 },
  { id: 'SHP-2024-004', route: 'Singapore → Dubai', status: 'In Transit', eta: 'Mar 22, 2026', docs: 6 },
  { id: 'SHP-2024-005', route: 'Tokyo → Sydney', status: 'Pending', eta: 'Mar 25, 2026', docs: 4 },
  { id: 'SHP-2024-006', route: 'New York → London', status: 'In Transit', eta: 'Mar 20, 2026', docs: 9 },
];

const ACTIVITIES = [
  { text: 'Commercial Invoice uploaded for SHP-2024-001', time: '2 hours ago', icon: FileText, color: 'text-blue-400' },
  { text: 'Shipment SHP-2024-003 delivered to São Paulo', time: '5 hours ago', icon: Ship, color: 'text-green-400' },
  { text: 'Compliance check passed for SHP-2024-004', time: '8 hours ago', icon: ShieldCheck, color: 'text-emerald-400' },
  { text: 'Bill of Lading generated for SHP-2024-006', time: '12 hours ago', icon: FileCheck, color: 'text-purple-400' },
  { text: 'Customs hold alert for SHP-2024-002', time: '1 day ago', icon: ShieldAlert, color: 'text-red-400' },
];

const statusColor = {
  'In Transit': 'bg-blue-500/20 text-blue-400',
  'Customs Hold': 'bg-red-500/20 text-red-400',
  'Delivered': 'bg-green-500/20 text-green-400',
  'Pending': 'bg-amber-500/20 text-amber-400',
};

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {STATS.map((s, i) => (
          <div key={i} className="p-5 rounded-xl bg-space_indigo-300/50 border border-space_indigo-500">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg ${s.bg} flex items-center justify-center`}>
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <span className={`flex items-center gap-1 text-xs font-medium ${s.up ? 'text-green-400' : 'text-red-400'}`}>
                {s.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {s.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-platinum-500 font-host_grotesk">{s.value}</div>
            <div className="text-sm text-platinum-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-punch_red-500 text-white text-sm font-medium hover:bg-punch_red-600 transition-colors">
          <Plus className="w-4 h-4" /> Create Shipment
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-space_indigo-400/50 text-platinum-400 text-sm font-medium hover:bg-space_indigo-400 hover:text-platinum-500 transition-colors border border-space_indigo-500">
          <FileText className="w-4 h-4" /> Generate Document
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-space_indigo-400/50 text-platinum-400 text-sm font-medium hover:bg-space_indigo-400 hover:text-platinum-500 transition-colors border border-space_indigo-500">
          <ShieldCheck className="w-4 h-4" /> Run Compliance Check
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Shipments Table */}
        <div className="lg:col-span-2 rounded-xl bg-space_indigo-300/50 border border-space_indigo-500 overflow-hidden">
          <div className="px-5 py-4 border-b border-space_indigo-500">
            <h3 className="text-lg font-bold text-platinum-500 font-host_grotesk">Recent Shipments</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-space_indigo-500">
                  <th className="text-left px-5 py-3 text-platinum-400 font-medium">ID</th>
                  <th className="text-left px-5 py-3 text-platinum-400 font-medium">Route</th>
                  <th className="text-left px-5 py-3 text-platinum-400 font-medium">Status</th>
                  <th className="text-left px-5 py-3 text-platinum-400 font-medium">ETA</th>
                  <th className="text-left px-5 py-3 text-platinum-400 font-medium">Docs</th>
                </tr>
              </thead>
              <tbody>
                {SHIPMENTS.map((s) => (
                  <tr key={s.id} className="border-b border-space_indigo-500/50 hover:bg-space_indigo-400/20 transition-colors">
                    <td className="px-5 py-3 text-platinum-500 font-medium">{s.id}</td>
                    <td className="px-5 py-3 text-platinum-400">{s.route}</td>
                    <td className="px-5 py-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColor[s.status]}`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-platinum-400">{s.eta}</td>
                    <td className="px-5 py-3 text-platinum-400">{s.docs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="rounded-xl bg-space_indigo-300/50 border border-space_indigo-500">
          <div className="px-5 py-4 border-b border-space_indigo-500">
            <h3 className="text-lg font-bold text-platinum-500 font-host_grotesk">Recent Activity</h3>
          </div>
          <div className="p-4 space-y-4">
            {ACTIVITIES.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-space_indigo-400/50 flex items-center justify-center shrink-0">
                  <a.icon className={`w-4 h-4 ${a.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-platinum-400 leading-snug">{a.text}</p>
                  <p className="text-xs text-platinum-300/50 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {a.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}