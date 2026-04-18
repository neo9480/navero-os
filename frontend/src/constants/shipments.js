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

export const shipmentStatusFilterParams = [
  {id: 0, label: "Booked", value: "BOOKED"},
  {id: 1, label: "Cargo Recieved", value: "CARGO_RECEIVED"},
  {id: 2, label: "Loaded", value: "LOADED"},
  {id: 3, label: "Departed", value: "DEPARTED"},
  {id: 4, label: "In Transit", value: "IN_TRANSIT"},
  {id: 5, label: "Arrived at Port", value: "ARRIVED_PORT"},
  {id: 6, label: "Discharged", value: "DISCHARGED"},
  {id: 7, label: "At CFS", value: "AT_CFS"},
  {id: 8, label: "Customs Hold", value: "CUSTOMS_HOLD"},
  {id: 9, label: "Docs Verified", value: "DOCUMENT_VERIFIED"},
  {id: 10, label: "Customs CLeared", value: "CUSTOMS_CLEARED"},
  {id: 11, label: "Out For Delivery", value: "OUT_FOR_DELIVERY"},
  {id: 12, label: "Delivered", value: "DELIVERED"},
  {id: 13, label: "Delayed", value: "DELAYED"},
  {id: 14, label: "Exception", value: "EXCEPTION"},
]

export const shipmentOriginFilterParams = [
  {id: 0, label: "Mumbai", value: "Mumbai"},
  {id: 0, label: "Shanghai", value: "Shanghai"},
  {id: 0, label: "Hamburg", value: "Hamburg"},
  {id: 0, label: "Singapore", value: "Singapore"},
  {id: 0, label: "Tokyo", value: "Tokyo"},
  {id: 0, label: "New York", value: "New York"},
  {id: 0, label: "Chennai", value: "Chennai"},
  {id: 0, label: "Shenzhen", value: "Shenzhen"},
  {id: 0, label: "Jeddah", value: "Jeddah"},
  {id: 0, label: "Los Angeles", value: "Los Angeles"},
  {id: 0, label: "Rotterdam", value: "Rotterdam"}
];

export const statusColor = {
  'In Transit': 'bg-blue-500/20 text-blue-400',
  'Customs Hold': 'bg-red-500/20 text-red-400',
  'Delivered': 'bg-green-500/20 text-green-400',
  'Pending': 'bg-amber-500/20 text-amber-400',
};
