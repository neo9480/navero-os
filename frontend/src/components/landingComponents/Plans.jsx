import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ABgLight from "@/components/commonComponents/ABgLight";
import PRICING from "@/constants/plans.js";
import { Check, X } from "lucide-react";
import AnimBtn from "@/components/commonComponents/AnimBtn";

const Plans = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const role = location.state?.role ?? location.state?.formData?.role;
  const previousForm = location.state?.formData || {};
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billing, setBilling] = useState("MONTHLY");

  const plans = useMemo(() => {
    if (!role) return [];
    const key = role.toUpperCase().replace(/ /g, "_");
    return PRICING[key] ?? [];
  }, [role]);

  const handleContinue = () => {
    if (!selectedPlan) return;

    // merge previous form values so SignUp doesn't lose user input
    navigate("/sign-up", {
      state: {
        ...previousForm,
        planId: selectedPlan,
        paymentStatus: "PAID",
        currentStep: 5,
      },
    });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center p-8 bg-platinum-600 ">
      <ABgLight />

      <div className="z-10 flex flex-col justify-center items-center gap-[1vw]">
        <h1 className="text-4xl font-bold text-center">Choose Your Plan</h1>

        {/* Billing toggle */}
        <div className="flex gap-2 bg-gray-100 rounded-full p-1">
          {["MONTHLY", "ANNUAL"].map((b) => (
            <button
              key={b}
              onClick={() => setBilling(b)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                billing === b ? "bg-white shadow text-black" : "text-gray-500"
              }`}>
              {b === "MONTHLY" ? "Monthly" : "Annual (save ~17%)"}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const selected = selectedPlan === plan.id;

            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`cursor-pointer rounded-2xl border p-[2vh] transition-all duration-300 flex flex-col ${
                  selected ?
                    "border-blue-500 bg-blue-50 scale-105 shadow-xl"
                  : "border-gray-200 hover:shadow-lg bg-space_indigo-100 "
                }`}>
                <h3
                  className={`text-xl font-semibold  ${selected ? "text-space_indigo-100" : "text-platinum-600"}`}>
                  {plan.name}
                </h3>

                {/* ✅ Use billing state + actual price fields, not plan.billing */}
                <p
                  className={`text-3xl font-bold  ${selected ? "text-space_indigo-100" : "text-platinum-600"}`}>
                  {plan.priceMonthly === null ?
                    "Custom"
                  : `$${billing === "MONTHLY" ? plan.priceMonthly : plan.priceAnnual}`
                  }
                  <span className="text-sm font-normal text-gray-500">
                    {plan.priceMonthly !== null ?
                      billing === "MONTHLY" ?
                        " /month"
                      : " /year"
                    : ""}
                  </span>
                </p>

                <ul className="text-sm text-platinum-600 flex-1 space-y-1 my-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      {f.included ?
                        <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      : <X className="w-4 h-4 text-platinum-300/30 mt-0.5 shrink-0" />
                      }
                      <span
                        className={`${selected ? `${f.included ? "text-space_indigo-100" : "text-space_indigo-400/40"}` : `${f.included ? "text-platinum-600" : "text-platinum-400/40"}`}`}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={` w-full rounded-full p-[1vh] font-medium transition ${
                    selected ?
                      "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700"
                  }`}>
                  {selected ? "Selected" : "Choose Plan"}
                </button>
              </div>
            );
          })}
        </div>

        {selectedPlan && (
          <AnimBtn
            ctaText={"Continue to Payment"}
            onClick={handleContinue}
            bgColor={""}
            hoverColor={"bg-space_indigo-200"}
            className={
              "shadow backdrop-blur-sm hover:text-platinum-600 transition"
            }
            textColor={"text-space_indigo-100"}
          />
        )}
      </div>
      {console.log(previousForm)}
    </div>
  );
};

export default Plans;
