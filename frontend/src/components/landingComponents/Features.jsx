import { motion as Motion } from "framer-motion";
import {
  Workflow,
  FileText,
  ShieldCheck,
  MapPin,
  Users,
  BarChart3,
  Banknote,
  Bot,
  Plug,
  Lock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import AnimBtn from "@/components/commonComponents/AnimBtn";
import GradBlindBg from "@/components/commonComponents/GradBlindBg";

const FEATURES = [
  {
    icon: Workflow,
    title: "Trade Workflow Engine",
    summary: "Orchestrate the full trade lifecycle",
    details:
      "Create structured workflows for export and import processes with shared timelines, role-based access for exporters, importers, brokers, banks, and customs. Every stage includes defined tasks, required documents, and approval checkpoints — ensuring nothing falls through the cracks.",
    highlights: [
      "Lifecycle tracking",
      "Role-based access",
      "Approval checkpoints",
      "Shared timelines",
    ],
    color: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-400",
  },
  {
    icon: FileText,
    title: "Document Automation",
    summary: "Generate, validate, and version trade documents",
    details:
      "Automatically create commercial invoices, bills of lading, certificates of origin, packing lists, customs declarations, and export licenses from structured shipment data. Built-in templates, auto-population of fields, validation rules, version history, and multi-language support eliminate manual errors.",
    highlights: [
      "Auto-population",
      "Template library",
      "Version control",
      "Multi-language",
    ],
    color: "from-emerald-500/20 to-emerald-600/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Intelligence",
    summary: "Automated regulatory screening and classification",
    details:
      "Stay ahead of regulatory complexity with AI-assisted HS code classification, sanctions and restricted party screening, export control checks, and country-specific documentation rules. The system flags potential compliance risks before shipments are processed and recommends corrective actions.",
    highlights: [
      "HS code classification",
      "Sanctions screening",
      "Export controls",
      "Country-specific rules",
    ],
    color: "from-amber-500/20 to-amber-600/10",
    iconColor: "text-amber-400",
  },
  {
    icon: MapPin,
    title: "Shipment Tracking",
    summary: "Real-time visibility into logistics operations",
    details:
      "Monitor container movements, shipping schedules, port congestion intelligence, and customs clearance updates through a unified logistics dashboard. Predictive algorithms estimate delays based on historical shipping data, helping you manage delivery timelines proactively.",
    highlights: [
      "Container tracking",
      "Port intelligence",
      "Delay prediction",
      "Milestone alerts",
    ],
    color: "from-cyan-500/20 to-cyan-600/10",
    iconColor: "text-cyan-400",
  },
  {
    icon: Users,
    title: "Stakeholder Collaboration",
    summary: "One workspace for all trade participants",
    details:
      "A digital workspace where exporters, importers, freight forwarders, customs brokers, and banks collaborate in real time. Share documents, update shipment information, and communicate directly within the platform — replacing email chains and phone calls with structured, auditable interactions.",
    highlights: [
      "Real-time updates",
      "Document sharing",
      "Role-based permissions",
      "Audit trail",
    ],
    color: "from-violet-500/20 to-violet-600/10",
    iconColor: "text-violet-400",
  },
  {
    icon: BarChart3,
    title: "Trade Analytics",
    summary: "Data-driven insights for smarter decisions",
    details:
      "Aggregate operational data from trade transactions into actionable KPI dashboards. Analyze shipment performance, on-time delivery rates, operational costs, compliance metrics, route efficiency, and exception rates with exportable reports for stakeholders.",
    highlights: [
      "KPI dashboards",
      "Cost analysis",
      "Compliance metrics",
      "Exportable reports",
    ],
    color: "from-pink-500/20 to-pink-600/10",
    iconColor: "text-pink-400",
  },
  {
    icon: Banknote,
    title: "Embedded Finance",
    summary: "Integrated payment and financing workflows",
    details:
      "Simulated payment processing, escrow workflows, invoice financing tools, and trade credit management. Navero's structured trade data creates a reliable basis for credit evaluation, enabling faster access to working capital for exporters.",
    highlights: [
      "Escrow workflows",
      "Invoice financing",
      "Payment tracking",
      "Trade credit",
    ],
    color: "from-green-500/20 to-green-600/10",
    iconColor: "text-green-400",
  },
  {
    icon: Bot,
    title: "AI Trade Copilot",
    summary: "Intelligent assistant for trade operations",
    details:
      "An AI-powered assistant that helps with document preparation guidance, regulatory explanations, shipment risk alerts, HS code suggestions, duty estimation, and workflow recommendations. Navigate complex international trade processes without deep regulatory expertise.",
    highlights: [
      "Document guidance",
      "Risk alerts",
      "Duty estimation",
      "Regulatory Q&A",
    ],
    color: "from-orange-500/20 to-orange-600/10",
    iconColor: "text-orange-400",
  },
  {
    icon: Plug,
    title: "Integrations & APIs",
    summary: "Connect with your existing systems",
    details:
      "RESTful APIs and pre-built connectors for customs portals, banking networks, broker ERPs, logistics providers, and shipping carriers. Webhook support for real-time event notifications like shipment_departed, customs_cleared, and document_generated.",
    highlights: [
      "Customs portals",
      "Banking APIs",
      "ERP connectors",
      "Webhooks",
    ],
    color: "from-teal-500/20 to-teal-600/10",
    iconColor: "text-teal-400",
  },
  {
    icon: Lock,
    title: "Security & Auditing",
    summary: "Enterprise-grade data protection",
    details:
      "Role-based access control, immutable audit logs, document provenance tracking, and encrypted data storage. Every action is logged and traceable, ensuring full compliance with international data governance standards and trade regulations.",
    highlights: ["RBAC", "Audit logs", "Encryption", "Document provenance"],
    color: "from-red-500/20 to-red-600/10",
    iconColor: "text-red-400",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] },
  }),
};

export default function Features() {
  return (
    <section className="relative min-h-screen pt-24 pb-20">
      <div className="fixed inset-0 ">
        <GradBlindBg />
      </div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Header */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-space_indigo-500 text-punch_red-500 text-sm font-medium mb-6">
              Platform Features
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-host_grotesk text-platinum-500 leading-tight">
              Everything You Need to
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-punch_red-500 to-flag_red-500">
                Manage Global Trade
              </span>
            </h1>
            <p className="mt-6 text-lg text-platinum-400 max-w-3xl mx-auto font-neue_montreal">
              A comprehensive suite of integrated modules covering
              documentation, compliance, logistics, finance, analytics, and AI —
              all in one product-led workflow.
            </p>
          </Motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {FEATURES.map((f, i) => (
              <Motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group p-8 rounded-2xl bg-space_indigo-300/50 border border-space_indigo-500 hover:border-space_indigo-600 transition-all">
                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${f.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <f.icon className={`w-6 h-6 ${f.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-platinum-500 font-host_grotesk">
                      {f.title}
                    </h3>
                    <p className="text-sm text-punch_red-500 font-medium">
                      {f.summary}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-platinum-400 leading-relaxed mb-4 text-sm">
                  {f.details}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {f.highlights.map((h, j) => (
                    <span
                      key={j}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-space_indigo-400/50 text-platinum-400 text-xs">
                      <CheckCircle2 className="w-3 h-3 text-punch_red-500" />
                      {h}
                    </span>
                  ))}
                </div>
              </Motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-linear-to-r from-space_indigo-300/80 to-space_indigo-400/40 border border-space_indigo-500">
            <div>
              <h3 className="text-xl font-bold text-platinum-500 font-host_grotesk">
                Ready to streamline your trade operations?
              </h3>
              <p className="text-platinum-400 mt-1">
                All features included in platform subscriptions — scales with
                your usage.
              </p>
            </div>
            <AnimBtn
              ctaText={"GET STARTED"}
              to={"/pricing"}
              bgColor={"bg-punch_red-500"}
              textColor={"text-platinum-600"}
              hoverColor={"bg-punch_red-400"}
              showArrow={true}
            />
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
