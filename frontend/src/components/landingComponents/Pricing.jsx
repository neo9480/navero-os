import { motion as Motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, X, ChevronDown, ArrowRight } from "lucide-react";
import PRICING from "../commonComponents/PlanArr";
import GradBlindBg from "../commonComponents/GradBlindBg";

const ROLES = [
  { key: "exporters", label: "Exporters" },
  { key: "importers", label: "Importers" },
  { key: "brokers", label: "Brokers" },
  { key: "logistics", label: "Logistics" },
  { key: "banks", label: "Banks" },
  { key: "customs", label: "Customs" },
];

const FAQ = [
  {
    q: "Can I try Navero before committing to a paid plan?",
    a: "Yes! Early bird customers get a discount as well as a free trial of the platform, which gives you access to core features with limited usage. You can explore document generation, basic shipment tracking, and compliance screening at no cost. Upgrade anytime as your needs grow.",
  },
  {
    q: "How does the annual billing discount work?",
    a: "Annual plans save you approximately 17% compared to monthly billing. You pay for 10 months and get 12 months of access. Annual subscriptions are billed upfront.",
  },
  {
    q: "Can I upgrade or downgrade my plan at any time?",
    a: "Absolutely. You can upgrade your plan at any time and the price difference will be prorated. Downgrades take effect at the end of your current billing cycle.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, wire transfers for annual enterprise plans, and support invoicing for Enterprise customers. All payments are processed securely.",
  },
  {
    q: "Is there a setup fee or long-term contract?",
    a: "No setup fees for Basic, or Pro plans. Enterprise plans may include onboarding and customization services. Monthly plans can be cancelled anytime with no penalties.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Your data remains accessible for 30 days after cancellation. You can export all documents and records during this period. After 30 days, data is securely archived per our retention policy.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] },
  }),
};

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeRole, setActiveRole] = useState("exporters");

  const PLANS = PRICING[activeRole] ?? [];

  return (
    <section className="min-h-screen bg-space_indigo-200 pt-24 pb-20">
      <div className="fixed inset-0">
        <GradBlindBg />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* ── Header ── */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full border border-space_indigo-500 text-punch_red-500 text-sm font-medium mb-6">
            Pricing Plans
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-host_grotesk text-platinum-500 leading-tight">
            Simple, Transparent
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-punch_red-500 to-flag_red-500">
              Pricing
            </span>
          </h1>
          <p className="mt-6 text-lg text-platinum-400 max-w-2xl mx-auto font-neue_montreal">
            Flexible plans built for exporters, brokers, and banks. Start free
            and scale with your trade volume.
          </p>

          {/* ── Monthly / Annual toggle ── */}
          <div className="mt-8 inline-flex items-center gap-3 bg-space_indigo-300/50 rounded-full p-1.5 border border-space_indigo-500">
            <button
              onClick={() => setAnnual(false)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                !annual ? "text-white" : (
                  "text-platinum-400 hover:text-platinum-300"
                )
              }`}>
              {!annual && (
                <Motion.span
                  layoutId="billing-pill"
                  className="absolute inset-0 rounded-full bg-linear-to-r from-punch_red-500 to-flag_red-500 shadow-lg shadow-punch_red-500/20"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">Monthly</span>
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                annual ? "text-white" : (
                  "text-platinum-400 hover:text-platinum-300"
                )
              }`}>
              {annual && (
                <Motion.span
                  layoutId="billing-pill"
                  className="absolute inset-0 rounded-full bg-linear-to-r from-punch_red-500 to-flag_red-500 shadow-lg shadow-punch_red-500/20"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                Annual
                <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">
                  Save 17%
                </span>
              </span>
            </button>
          </div>
        </Motion.div>

        {/* ── Role Selector ── */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 bg-space_indigo-300/40 border border-space_indigo-500 rounded-full p-2">
            {ROLES.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveRole(key)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeRole === key ? "text-platinum-600" : (
                    "text-platinum-400 hover:text-platinum-600 hover:bg-space_indigo-300"
                  )
                }`}>
                {/* Animated active pill */}
                {activeRole === key && (
                  <Motion.span
                    layoutId="role-pill"
                    className="absolute inset-0 rounded-full bg-linear-to-r from-punch_red-500 to-flag_red-500 shadow-lg shadow-punch_red-500/20"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </div>
        </Motion.div>

        {/* ── Plans Grid ── */}
        <Motion.div
          key={activeRole} /* re-mount grid on role change */
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {PLANS.map((plan, i) => (
            <Motion.div
              key={plan.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative p-8 rounded-2xl border transition-all flex flex-col ${
                plan.featured ?
                  "bg-linear-to-b from-space_indigo-300/80 to-space_indigo-400/40 border-punch_red-500 shadow-lg shadow-punch_red-500/10"
                : "bg-space_indigo-300/50 border-space_indigo-500 hover:border-space_indigo-600"
              }`}>
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-punch_red-500 text-white text-xs font-bold whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-platinum-500 font-host_grotesk">
                  {plan.name}
                </h3>
                <p className="text-sm text-platinum-400 mt-1">
                  {plan.description}
                </p>
              </div>

              <div className="mt-6 mb-6">
                {plan.priceMonthly !== null ?
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-platinum-500 font-host_grotesk">
                      ${annual ? plan.priceAnnual : plan.priceMonthly}
                    </span>
                    <span className="text-sm text-platinum-400">
                      {plan.priceMonthly === 0 ?
                        "/forever"
                      : annual ?
                        "/year"
                      : "/month"}
                    </span>
                  </div>
                : <div className="text-2xl font-bold text-platinum-400">
                    Custom Pricing
                  </div>
                }
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm">
                    {f.included ?
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    : <X className="w-4 h-4 text-platinum-300/30 mt-0.5 shrink-0" />
                    }
                    <span
                      className={
                        f.included ? "text-platinum-400" : (
                          "text-platinum-300/40"
                        )
                      }>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to={plan.id === "enterprise" ? "/about-us" : "/dashboard"}
                className={`w-full inline-flex justify-center items-center gap-2 px-4 py-3 rounded-full text-sm font-medium transition-colors ${
                  plan.featured ?
                    "bg-punch_red-500 text-white hover:bg-punch_red-600"
                  : "bg-space_indigo-400/50 text-platinum-400 hover:bg-space_indigo-400 hover:text-platinum-500"
                }`}>
                {plan.id === "enterprise" ?
                  "Contact Sales"
                : plan.priceMonthly === 0 ?
                  "Get Started Free"
                : "Get Started"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Motion.div>
          ))}
        </Motion.div>

        {/* ── FAQ Section ── */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-host_grotesk text-platinum-500 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-space_indigo-500 bg-space_indigo-300/50 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-medium text-platinum-500">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-platinum-400 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <Motion.div
                  initial={false}
                  animate={{
                    height: openFaq === i ? "auto" : 0,
                    opacity: openFaq === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden">
                  <p className="px-5 pb-5 text-platinum-400 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </Motion.div>
              </Motion.div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
