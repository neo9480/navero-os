import { motion as Motion } from "framer-motion";
import { useState } from "react";
import { Check, X, ChevronDown } from "lucide-react";
import PRICING from "@/constants/plans.js";
import GradBlindBg from "@/components/commonComponents/GradBlindBg";
import AnimBtn from "@/components/commonComponents/AnimBtn";
import roles from "@/constants/roles.js";
import FAQs from "@/constants/FAQs.js";

const ROLES = roles
const FAQ = FAQs
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] },
  }),
};

function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeRole, setActiveRole] = useState("EXPORTER");

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
              <AnimBtn
                key={key}
                onClick={() => setActiveRole(key)}
                ctaText={label}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeRole === key ? "text-platinum-600" : (
                    "text-platinum-400 hover:text-platinum-600"
                  )
                }`}
                bgColor={activeRole === key ? "bg-punch_red-500" : ""}
                hoverColor={activeRole === key ? "" : "bg-punch_red-400"}>
                {activeRole === key && (
                  <Motion.span
                    layoutId="role-pill"
                    className="absolute inset-0 rounded-full bg-linear-to-r from-punch_red-500 to-flag_red-500 shadow-lg shadow-punch_red-500/20"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </AnimBtn>
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

              <AnimBtn
                ctaText={
                  plan.id === "enterprise" ? "CONTACT SALES"
                  : plan.priceMonthly === 0 ?
                    "Get Started Free"
                  : "GET STARTED"
                }
                to={plan.id === "enterprise" ? "/about-us" : "/sign-up"}
                className={`w-full justify-center items-center `}
                bgColor={
                  plan.featured ? "bg-punch_red-500" : "bg-space_indigo-400/50"
                }
                hoverColor={
                  plan.featured ? "bg-punch_red-400" : "bg-space_indigo-200"
                }
                textColor={"text-platinum-600"}
                showArrow={true}
              />
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

export default Pricing