export const SHIPMENTS = [
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

export const statusColor = {
  'In Transit': 'bg-blue-500/20 text-blue-400',
  'Customs Hold': 'bg-red-500/20 text-red-400',
  'Delivered': 'bg-green-500/20 text-green-400',
  'Pending': 'bg-amber-500/20 text-amber-400',
};
