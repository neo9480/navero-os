import DashboardLayout from '../components/dashboardComponents/DashboardLayout';
import { Search, Filter, Ship } from 'lucide-react';
import { useState } from 'react';

const SHIPMENTS = [
  { id: 'SHP-2024-001', origin: 'Mumbai', destination: 'Rotterdam', status: 'In Transit', carrier: 'Maersk', eta: 'Mar 18, 2026', docs: 8 },
  { id: 'SHP-2024-002', origin: 'Shanghai', destination: 'Los Angeles', status: 'Customs Hold', carrier: 'COSCO', eta: 'Mar 15, 2026', docs: 12 },
  { id: 'SHP-2024-003', origin: 'Hamburg', destination: 'São Paulo', status: 'Delivered', carrier: 'Hapag-Lloyd', eta: 'Mar 10, 2026', docs: 10 },
  { id: 'SHP-2024-004', origin: 'Singapore', destination: 'Dubai', status: 'In Transit', carrier: 'MSC', eta: 'Mar 22, 2026', docs: 6 },
  { id: 'SHP-2024-005', origin: 'Tokyo', destination: 'Sydney', status: 'Pending', carrier: 'ONE', eta: 'Mar 25, 2026', docs: 4 },
  { id: 'SHP-2024-006', origin: 'New York', destination: 'London', status: 'In Transit', carrier: 'CMA CGM', eta: 'Mar 20, 2026', docs: 9 },
  { id: 'SHP-2024-007', origin: 'Busan', destination: 'Vancouver', status: 'In Transit', carrier: 'Evergreen', eta: 'Mar 28, 2026', docs: 7 },
  { id: 'SHP-2024-008', origin: 'Chennai', destination: 'Antwerp', status: 'Pending', carrier: 'ZIM', eta: 'Apr 02, 2026', docs: 3 },
  { id: 'SHP-2024-009', origin: 'Shenzhen', destination: 'Hamburg', status: 'Delivered', carrier: 'Maersk', eta: 'Mar 08, 2026', docs: 11 },
  { id: 'SHP-2024-010', origin: 'Jeddah', destination: 'Mumbai', status: 'Customs Hold', carrier: 'MSC', eta: 'Mar 16, 2026', docs: 5 },
  { id: 'SHP-2024-011', origin: 'Los Angeles', destination: 'Tokyo', status: 'In Transit', carrier: 'ONE', eta: 'Mar 30, 2026', docs: 8 },
  { id: 'SHP-2024-012', origin: 'Rotterdam', destination: 'Singapore', status: 'Pending', carrier: 'Hapag-Lloyd', eta: 'Apr 05, 2026', docs: 2 },
];

const statusColor = {
  'In Transit': 'bg-blue-500/20 text-blue-400',
  'Customs Hold': 'bg-red-500/20 text-red-400',
  'Delivered': 'bg-green-500/20 text-green-400',
  'Pending': 'bg-amber-500/20 text-amber-400',
};

export default function ShipmentsPage() {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filtered = SHIPMENTS.filter((s) => {
    const matchSearch =
      s.id.toLowerCase().includes(search.toLowerCase()) ||
      s.origin.toLowerCase().includes(search.toLowerCase()) ||
      s.destination.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'All' || s.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-platinum-500 font-host_grotesk">Shipments</h1>
        <p className="text-sm text-platinum-400 mt-1">Track and manage all your trade shipments</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="relative flex-1 min-w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-platinum-400" />
          <input
            type="text"
            placeholder="Search by ID, origin, or destination..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-space_indigo-300/50 border border-space_indigo-500 text-platinum-500 text-sm placeholder:text-platinum-400/50 focus:outline-none focus:border-punch_red-500/50"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-platinum-400" />
          {['All', 'In Transit', 'Pending', 'Customs Hold', 'Delivered'].map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filterStatus === s
                  ? 'bg-punch_red-500 text-white'
                  : 'bg-space_indigo-400/50 text-platinum-400 hover:text-platinum-500'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl bg-space_indigo-300/50 border border-space_indigo-500 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-space_indigo-500">
                <th className="text-left px-5 py-3 text-platinum-400 font-medium">Shipment ID</th>
                <th className="text-left px-5 py-3 text-platinum-400 font-medium">Route</th>
                <th className="text-left px-5 py-3 text-platinum-400 font-medium">Status</th>
                <th className="text-left px-5 py-3 text-platinum-400 font-medium">Carrier</th>
                <th className="text-left px-5 py-3 text-platinum-400 font-medium">ETA</th>
                <th className="text-left px-5 py-3 text-platinum-400 font-medium">Documents</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
                <tr key={s.id} className="border-b border-space_indigo-500/50 hover:bg-space_indigo-400/20 transition-colors">
                  <td className="px-5 py-3.5 text-platinum-500 font-medium flex items-center gap-2">
                    <Ship className="w-4 h-4 text-platinum-400" />
                    {s.id}
                  </td>
                  <td className="px-5 py-3.5 text-platinum-400">
                    {s.origin} → {s.destination}
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColor[s.status]}`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-platinum-400">{s.carrier}</td>
                  <td className="px-5 py-3.5 text-platinum-400">{s.eta}</td>
                  <td className="px-5 py-3.5 text-platinum-400">{s.docs} files</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="p-12 text-center text-platinum-400">No shipments found matching your criteria.</div>
        )}
      </div>
    </DashboardLayout>
  );
}