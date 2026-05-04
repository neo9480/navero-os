export const DOCUMENTS = [
  {
    name: "Commercial Invoice - SHP-001",
    type: "Invoice",
    date: "Mar 12, 2026",
    status: "Approved",
    shipment: "SHP-2024-001",
  },
  {
    name: "Bill of Lading - SHP-001",
    type: "Bill of Lading",
    date: "Mar 11, 2026",
    status: "Approved",
    shipment: "SHP-2024-001",
  },
  {
    name: "Certificate of Origin - SHP-002",
    type: "Certificate",
    date: "Mar 10, 2026",
    status: "Pending",
    shipment: "SHP-2024-002",
  },
  {
    name: "Packing List - SHP-003",
    type: "Packing List",
    date: "Mar 09, 2026",
    status: "Approved",
    shipment: "SHP-2024-003",
  },
  {
    name: "Export Declaration - SHP-004",
    type: "Declaration",
    date: "Mar 08, 2026",
    status: "Draft",
    shipment: "SHP-2024-004",
  },
  {
    name: "Insurance Certificate - SHP-001",
    type: "Certificate",
    date: "Mar 07, 2026",
    status: "Approved",
    shipment: "SHP-2024-001",
  },
  {
    name: "Commercial Invoice - SHP-005",
    type: "Invoice",
    date: "Mar 06, 2026",
    status: "Draft",
    shipment: "SHP-2024-005",
  },
  {
    name: "Bill of Lading - SHP-006",
    type: "Bill of Lading",
    date: "Mar 05, 2026",
    status: "Pending",
    shipment: "SHP-2024-006",
  },
  {
    name: "Customs Declaration - SHP-002",
    type: "Declaration",
    date: "Mar 04, 2026",
    status: "Approved",
    shipment: "SHP-2024-002",
  },
  {
    name: "Inspection Certificate - SHP-003",
    type: "Certificate",
    date: "Mar 03, 2026",
    status: "Approved",
    shipment: "SHP-2024-003",
  },
  {
    name: "Proforma Invoice - SHP-007",
    type: "Invoice",
    date: "Mar 02, 2026",
    status: "Draft",
    shipment: "SHP-2024-007",
  },
  {
    name: "Packing List - SHP-004",
    type: "Packing List",
    date: "Mar 01, 2026",
    status: "Pending",
    shipment: "SHP-2024-004",
  },
];

export const statusColor = {
  Approved: "bg-green-500/20 text-green-400",
  Pending: "bg-amber-500/20 text-amber-400",
  Draft: "bg-space_indigo-600/30 text-platinum-400",
};

export const typeColor = {
  Invoice: "bg-blue-500/20 text-blue-400",
  "Bill of Lading": "bg-purple-500/20 text-purple-400",
  Certificate: "bg-emerald-500/20 text-emerald-400",
  "Packing List": "bg-cyan-500/20 text-cyan-400",
  Declaration: "bg-amber-500/20 text-amber-400",
};
