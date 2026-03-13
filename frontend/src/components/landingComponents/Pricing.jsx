import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    priceMonthly: 29,
    priceAnnual: 290,
    features: ["Up to 5 shipments", "Basic templates", "Email support"],
  },
  {
    id: "pro",
    name: "Pro",
    featured: true,
    priceMonthly: 99,
    priceAnnual: 990,
    features: ["Up to 50 shipments", "Advanced templates", "Priority support"],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceMonthly: null,
    priceAnnual: null,
    features: [
      "Unlimited shipments",
      "Custom integrations",
      "Dedicated success",
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-platinum-100">
          Pricing
        </h2>
        <p className="mt-3 text-platinum-300 max-w-3xl mx-auto">
          Flexible plans built for exporters, brokers and banks. Start small and
          scale with your volume.
        </p>

        <div className="mt-6 inline-flex items-center gap-3 bg-white/5 rounded-full p-1">
          <button
            onClick={() => setAnnual(false)}
            className={`px-4 py-2 rounded-full ${!annual ? "bg-space_indigo-100 text-platinum-900" : "text-platinum-300"}`}>
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-4 py-2 rounded-full ${annual ? "bg-space_indigo-100 text-platinum-900" : "text-platinum-300"}`}>
            Annual
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {PLANS.map((plan) => (
          <Motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ translateY: -8 }}
            transition={{ type: "spring", stiffness: 160 }}
            className={`p-6 rounded-2xl border ${plan.featured ? "bg-space_indigo-100/6 border-space_indigo-100" : "bg-white/3 border-white/6"}`}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-platinum-100">
                {plan.name}
              </h3>
              {plan.featured && (
                <div className="text-sm px-2 py-1 bg-space_indigo-100 text-platinum-900 rounded">
                  Popular
                </div>
              )}
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              {plan.priceMonthly ?
                <>
                  <span className="text-3xl font-bold text-platinum-100">
                    ${annual ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  <span className="text-sm text-platinum-300">
                    {annual ? "/yr" : "/mo"}
                  </span>
                </>
              : <span className="text-lg text-platinum-300">Contact sales</span>
              }
            </div>

            <ul className="mt-4 text-platinum-300 space-y-2 text-sm">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-space_indigo-100">●</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Link
                to={plan.id === "enterprise" ? "/contact" : "/sign-up/plans"}
                className={`w-full inline-flex justify-center items-center px-4 py-2 rounded-full ${plan.featured ? "bg-space_indigo-100 text-platinum-900" : "bg-space_indigo-100/90 text-platinum-700"}`}>
                {plan.id === "enterprise" ? "Contact Sales" : "Get Started"}
              </Link>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
