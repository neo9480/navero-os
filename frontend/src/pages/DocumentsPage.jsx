import DashboardLayout from '@/components/dashboardComponents/DashboardLayout';
import { FileText, Upload, Grid3X3, List, Search } from 'lucide-react';
import { useState } from 'react';

const DOCUMENTS = [
  { name: 'Commercial Invoice - SHP-001', type: 'Invoice', date: 'Mar 12, 2026', status: 'Approved', shipment: 'SHP-2024-001' },
  { name: 'Bill of Lading - SHP-001', type: 'Bill of Lading', date: 'Mar 11, 2026', status: 'Approved', shipment: 'SHP-2024-001' },
  { name: 'Certificate of Origin - SHP-002', type: 'Certificate', date: 'Mar 10, 2026', status: 'Pending', shipment: 'SHP-2024-002' },
  { name: 'Packing List - SHP-003', type: 'Packing List', date: 'Mar 09, 2026', status: 'Approved', shipment: 'SHP-2024-003' },
  { name: 'Export Declaration - SHP-004', type: 'Declaration', date: 'Mar 08, 2026', status: 'Draft', shipment: 'SHP-2024-004' },
  { name: 'Insurance Certificate - SHP-001', type: 'Certificate', date: 'Mar 07, 2026', status: 'Approved', shipment: 'SHP-2024-001' },
  { name: 'Commercial Invoice - SHP-005', type: 'Invoice', date: 'Mar 06, 2026', status: 'Draft', shipment: 'SHP-2024-005' },
  { name: 'Bill of Lading - SHP-006', type: 'Bill of Lading', date: 'Mar 05, 2026', status: 'Pending', shipment: 'SHP-2024-006' },
  { name: 'Customs Declaration - SHP-002', type: 'Declaration', date: 'Mar 04, 2026', status: 'Approved', shipment: 'SHP-2024-002' },
  { name: 'Inspection Certificate - SHP-003', type: 'Certificate', date: 'Mar 03, 2026', status: 'Approved', shipment: 'SHP-2024-003' },
  { name: 'Proforma Invoice - SHP-007', type: 'Invoice', date: 'Mar 02, 2026', status: 'Draft', shipment: 'SHP-2024-007' },
  { name: 'Packing List - SHP-004', type: 'Packing List', date: 'Mar 01, 2026', status: 'Pending', shipment: 'SHP-2024-004' },
];

const statusColor = {
  Approved: 'bg-green-500/20 text-green-400',
  Pending: 'bg-amber-500/20 text-amber-400',
  Draft: 'bg-space_indigo-600/30 text-platinum-400',
};

const typeColor = {
  Invoice: 'bg-blue-500/20 text-blue-400',
  'Bill of Lading': 'bg-purple-500/20 text-purple-400',
  Certificate: 'bg-emerald-500/20 text-emerald-400',
  'Packing List': 'bg-cyan-500/20 text-cyan-400',
  Declaration: 'bg-amber-500/20 text-amber-400',
};

export default function DocumentsPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [search, setSearch] = useState('');

  const filtered = DOCUMENTS.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-platinum-500 font-host_grotesk">Documents</h1>
          <p className="text-sm text-platinum-400 mt-1">Manage all your trade documentation</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-punch_red-500 text-white text-sm font-medium hover:bg-punch_red-600 transition-colors">
          <Upload className="w-4 h-4" /> Upload Document
        </button>
      </div>

      {/* Search & View Toggle */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-platinum-400" />
          <input
            type="text"
            placeholder="Search documents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-space_indigo-300/50 border border-space_indigo-500 text-platinum-500 text-sm placeholder:text-platinum-400/50 focus:outline-none focus:border-punch_red-500/50"
          />
        </div>
        <div className="flex gap-1 bg-space_indigo-300/50 rounded-lg p-1 border border-space_indigo-500">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-punch_red-500 text-white' : 'text-platinum-400'}`}
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded ${viewMode === 'list' ? 'bg-punch_red-500 text-white' : 'text-platinum-400'}`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Documents */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((d, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-space_indigo-300/50 border border-space_indigo-500 hover:border-space_indigo-600 transition-colors cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-space_indigo-400/50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5 text-platinum-400" />
              </div>
              <h3 className="text-sm font-medium text-platinum-500 mb-2 line-clamp-2">{d.name}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${typeColor[d.type] || 'bg-space_indigo-600/30 text-platinum-400'}`}>
                  {d.type}
                </span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColor[d.status]}`}>
                  {d.status}
                </span>
              </div>
              <div className="text-xs text-platinum-400/60">
                <p>{d.date}</p>
                <p>{d.shipment}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-xl bg-space_indigo-300/50 border border-space_indigo-500 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-space_indigo-500">
                <th className="text-left px-5 py-3 text-platinum-400 font-medium">Document</th>
                <th className="text-left px-5 py-3 text-platinum-400 font-medium">Type</th>
                <th className="text-left px-5 py-3 text-platinum-400 font-medium">Date</th>
                <th className="text-left px-5 py-3 text-platinum-400 font-medium">Status</th>
                <th className="text-left px-5 py-3 text-platinum-400 font-medium">Shipment</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((d, i) => (
                <tr key={i} className="border-b border-space_indigo-500/50 hover:bg-space_indigo-400/20 transition-colors">
                  <td className="px-5 py-3 text-platinum-500 font-medium flex items-center gap-2">
                    <FileText className="w-4 h-4 text-platinum-400" /> {d.name}
                  </td>
                  <td className="px-5 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${typeColor[d.type] || 'bg-space_indigo-600/30 text-platinum-400'}`}>
                      {d.type}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-platinum-400">{d.date}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColor[d.status]}`}>
                      {d.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-platinum-400">{d.shipment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </DashboardLayout>
  );
}