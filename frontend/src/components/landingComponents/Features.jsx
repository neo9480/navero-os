import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

// Expanded features list based on PLANNING.md and RESEARCH.md
const FEATURES = [
  {
    id: "workflow",
    title: "Unified Workflow",
    summary: "Shared timeline & role-based access",
    details:
      "One source-of-truth for exporters, importers, brokers, banks and customs — reduces duplicate work and mismatches.",
  },
  {
    id: "documents",
    title: "Document Automation",
    summary: "Templates, validation, and versioning",
    details:
      "Generate invoices, bills of lading and customs declarations automatically from structured shipment data.",
  },
  {
    id: "finance",
    title: "Embedded Finance",
    summary: "Simulated payments, escrow & ledger",
    details:
      "Subscription billing, escrow workflows and transaction history for auditors and banks (prototype stage).",
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    summary: "Role-specific dashboards",
    details:
      "KPIs for on-time performance, costs and exception rates with exportable reports for stakeholders.",
  },
  {
    id: "integrations",
    title: "Integrations",
    summary: "APIs & connectors",
    details:
      "Connectors for customs portals, banks and broker ERPs to reduce manual handoffs.",
  },
  {
    id: "security",
    title: "Security & Auditing",
    summary: "Access control & logs",
    details:
      "Role-based permissions, immutable audit logs and document provenance for compliance.",
  },
];

function FeatureRow({ f, i }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.06 }}
      className="p-6 rounded-lg bg-white/3 border border-white/6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-md bg-space_indigo-100/10 flex items-center justify-center text-space_indigo-100 font-semibold">
          {f.title[0]}
        </div>
        <div>
          <div className="font-semibold text-platinum-100">{f.title}</div>
          <div className="text-sm text-platinum-300 mt-1">{f.summary}</div>
        </div>
      </div>
      <p className="mt-4 text-sm text-platinum-300">{f.details}</p>
    </Motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-platinum-100">
            Product features
          </h2>
          <p className="mt-2 text-platinum-300 max-w-3xl mx-auto">
            Everything needed to manage shipments, documents and compliance in
            one product-led workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <FeatureRow key={f.id} f={f} i={i} />
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-platinum-300">
            Integrations, compliance checks and analytics are included in
            platform subscriptions — scales with usage.
          </div>
          <div className="text-right">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-space_indigo-100 text-platinum-700 font-medium">
              See pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
