import DashboardLayout from '@/components/dashboardComponents/DashboardLayout';
import { Search, Star, MapPin } from 'lucide-react';
import { useState } from 'react';

const PARTNERS = [
  { name: 'Global Freight Solutions', type: 'Freight Forwarder', rating: 4.8, location: 'Rotterdam, NL', services: ['Ocean Freight', 'Air Freight', 'Warehousing'] },
  { name: 'Pacific Customs Brokers', type: 'Customs Broker', rating: 4.6, location: 'Los Angeles, US', services: ['Import Clearance', 'Export Filing', 'Compliance'] },
  { name: 'TradeShield Insurance', type: 'Insurance', rating: 4.5, location: 'London, UK', services: ['Cargo Insurance', 'Credit Insurance', 'Marine Coverage'] },
  { name: 'Eastern Trade Finance', type: 'Bank', rating: 4.7, location: 'Singapore, SG', services: ['Letters of Credit', 'Invoice Financing', 'Trade Loans'] },
  { name: 'Atlas Logistics', type: 'Freight Forwarder', rating: 4.4, location: 'Dubai, UAE', services: ['Land Transport', 'Ocean Freight', 'Cold Chain'] },
  { name: 'ComplianceFirst', type: 'Customs Broker', rating: 4.9, location: 'Hamburg, DE', services: ['HS Classification', 'Sanctions Screening', 'Audit Support'] },
  { name: 'Maritime Assurance Co.', type: 'Insurance', rating: 4.3, location: 'Mumbai, IN', services: ['Marine Insurance', 'Liability Coverage', 'Risk Assessment'] },
  { name: 'Silk Road Capital', type: 'Bank', rating: 4.6, location: 'Hong Kong, HK', services: ['Supply Chain Finance', 'FX Services', 'Payment Processing'] },
  { name: 'SwiftCargo Express', type: 'Freight Forwarder', rating: 4.7, location: 'Shanghai, CN', services: ['Express Freight', 'E-commerce Logistics', 'Last Mile'] },
];

const typeColor = {
  'Freight Forwarder': 'bg-blue-500/20 text-blue-400',
  'Customs Broker': 'bg-emerald-500/20 text-emerald-400',
  Insurance: 'bg-amber-500/20 text-amber-400',
  Bank: 'bg-purple-500/20 text-purple-400',
};

export default function MarketplacePage() {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');

  const filtered = PARTNERS.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase());
    const matchType = filterType === 'All' || p.type === filterType;
    return matchSearch && matchType;
  });

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-platinum-500 font-host_grotesk">Marketplace</h1>
        <p className="text-sm text-platinum-400 mt-1">Discover and connect with trade partners</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="relative flex-1 min-w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-platinum-400" />
          <input
            type="text"
            placeholder="Search partners..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-space_indigo-300/50 border border-space_indigo-500 text-platinum-500 text-sm placeholder:text-platinum-400/50 focus:outline-none focus:border-punch_red-500/50"
          />
        </div>
        <div className="flex gap-2">
          {['All', 'Freight Forwarder', 'Customs Broker', 'Insurance', 'Bank'].map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filterType === t ? 'bg-punch_red-500 text-white' : 'bg-space_indigo-400/50 text-platinum-400 hover:text-platinum-500'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Partner Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-space_indigo-300/50 border border-space_indigo-500 hover:border-space_indigo-600 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-base font-bold text-platinum-500">{p.name}</h3>
                <span className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${typeColor[p.type]}`}>
                  {p.type}
                </span>
              </div>
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">{p.rating}</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-platinum-400 mb-3">
              <MapPin className="w-3.5 h-3.5" />
              {p.location}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {p.services.map((s, j) => (
                <span key={j} className="px-2 py-0.5 rounded bg-space_indigo-400/50 text-platinum-400 text-xs">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}