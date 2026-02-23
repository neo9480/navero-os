import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ABgLight from "../commonComponents/ABgLight";

const subscriptionPlans = {
  EXPORTER: {
    BASIC: {
      id: "EXPORTER_BASIC",
      name: "Basic",
      priceMonthly: 149,
      billing: "MONTHLY",
      capabilities: {
        maxQuoteResponsesPerMonth: 5,
        maxActiveShipments: 2,
        maxDocumentUploadsPerMonth: 10,
        canUploadDocuments: true,
        canApplyLC: false,
        canViewPaymentStatus: true,
        shipmentHistoryDays: 14,
        analyticsAccess: true, // but limited
        priorityRanking: false,
        apiAccess: false,
        multiUserSupport: false,
      },
    },

    PRO: {
      id: "EXPORTER_PRO",
      name: "Pro",
      priceMonthly: 249,
      billing: "MONTHLY",
      capabilities: {
        maxQuoteResponsesPerMonth: 100,
        maxActiveShipments: 25,
        maxDocumentUploadsPerMonth: 500,
        canUploadDocuments: true,
        canApplyLC: true,
        canViewPaymentStatus: true,
        shipmentHistoryDays: 365,
        analyticsAccess: true,
        priorityRanking: true,
        apiAccess: false,
        multiUserSupport: false,
      },
    },

    ENTERPRISE: {
      id: "EXPORTER_ENTERPRISE",
      name: "Enterprise",
      priceMonthly: null, // Starting at $999/month
      billing: "CUSTOM",
      capabilities: {
        maxQuoteResponsesPerMonth: Infinity,
        maxActiveShipments: Infinity,
        maxDocumentUploadsPerMonth: Infinity,
        canUploadDocuments: true,
        canApplyLC: true,
        canViewPaymentStatus: true,
        shipmentHistoryDays: Infinity,
        analyticsAccess: true,
        priorityRanking: true,
        apiAccess: true,
        multiUserSupport: true,
        auditLogs: true,
        approvalWorkflows: true,
        dedicatedSupport: true,
      },
    },
  },

  IMPORTER: {
    BASIC: {
      id: "IMPORTER_BASIC",
      name: "Basic",
      priceMonthly: 149,
      billing: "MONTHLY",
      capabilities: {
        maxQuoteRequestsPerMonth: 3,
        maxActiveShipments: 1,
        maxDocumentUploadsPerMonth: 5,
        canUploadDocuments: false,
        canInitiateLC: false,
        shipmentHistoryDays: 14,
        analyticsAccess: false,
        automatedNotifications: false,
      },
    },

    PRO: {
      id: "IMPORTER_PRO",
      name: "Pro",
      priceMonthly: 249,
      billing: "MONTHLY",
      capabilities: {
        maxQuoteRequestsPerMonth: 50,
        maxActiveShipments: 20,
        maxDocumentUploadsPerMonth: 300,
        canUploadDocuments: true,
        canInitiateLC: true,
        shipmentHistoryDays: 365,
        analyticsAccess: true,
        automatedNotifications: true,
        supplierPerformanceInsights: true,
      },
    },

    ENTERPRISE: {
      id: "IMPORTER_ENTERPRISE",
      name: "Enterprise",
      priceMonthly: null, // Starting at $999/month
      billing: "CUSTOM",
      capabilities: {
        maxQuoteRequestsPerMonth: Infinity,
        maxActiveShipments: Infinity,
        maxDocumentUploadsPerMonth: Infinity,
        canUploadDocuments: true,
        canInitiateLC: true,
        shipmentHistoryDays: Infinity,
        analyticsAccess: true,
        automatedNotifications: true,
        supplierPerformanceInsights: true,
        apiAccess: true,
        multiUserSupport: true,
        approvalWorkflows: true,
        auditLogs: true,
        dedicatedSupport: true,
      },
    },
  },

  BROKER: {
    BASIC: {
      id: "BROKER_BASIC",
      name: "Basic",
      priceMonthly: 149,
      billing: "MONTHLY",
      capabilities: {
        maxActiveListings: 2,
        maxBidsPerMonth: 10,
        analyticsAccess: false,
        priorityRanking: false,
        leadInsights: false,
      },
    },

    PRO: {
      id: "BROKER_PRO",
      name: "Pro",
      priceMonthly: 399,
      billing: "MONTHLY",
      capabilities: {
        maxActiveListings: 100,
        maxBidsPerMonth: 500,
        analyticsAccess: true,
        priorityRanking: true,
        leadInsights: true,
        performanceMetricsAccess: true,
      },
    },

    ENTERPRISE: {
      id: "BROKER_ENTERPRISE",
      name: "Enterprise",
      priceMonthly: null, // Starting at $1,499/month
      billing: "CUSTOM",
      capabilities: {
        maxActiveListings: Infinity,
        maxBidsPerMonth: Infinity,
        analyticsAccess: true,
        priorityRanking: true,
        leadInsights: true,
        performanceMetricsAccess: true,
        apiAccess: true,
        multiUserSupport: true,
        auditLogs: true,
        dedicatedSupport: true,
      },
    },
  },

  CUSTOMS: {
    BASIC: {
      id: "CUSTOMS_BASIC",
      name: "Basic",
      priceMonthly: 129,
      billing: "MONTHLY",
      capabilities: {
        maxAssignedShipments: 5,
        canUpdateShipmentStatus: true,
        analyticsAccess: false,
        apiAccess: false,
        automatedStatusSync: false,
      },
    },

    PRO: {
      id: "CUSTOMS_PRO",
      name: "Pro",
      priceMonthly: 349,
      billing: "MONTHLY",
      capabilities: {
        maxAssignedShipments: 200,
        canUpdateShipmentStatus: true,
        analyticsAccess: true,
        apiAccess: true,
        automatedStatusSync: true,
        routeOptimizationInsights: true,
      },
    },
  },

  BANK: {
    ENTERPRISE: {
      id: "BANK_ENTERPRISE",
      name: "Enterprise",
      priceMonthly: null,
      billing: "CUSTOM",
      capabilities: {
        unlimitedLCProcessing: true,
        multiUserSupport: true,
        approvalWorkflows: true,
        complianceReporting: true,
        auditLogs: true,
        apiAccess: true,
        riskAssessmentTools: true,
        prioritySupport: true,
        dedicatedSupport: true,
      },
    },
  },
};

const Plans = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const role = location.state?.role ?? location.state?.formData?.role;
  const previousForm = location.state?.formData || {};
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = useMemo(() => {
    if (!role) return [];
    return Object.values(subscriptionPlans[role]);
  }, [role]);

  const formatCapability = (key, value) => {
    const label = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());

    if (value === true) return `✔ ${label}`;
    if (value === false) return `✖ ${label}`;
    if (value === Infinity) return `Unlimited ${label}`;

    return `${value} ${label}`;
  };

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
                  : "border-gray-200 hover:shadow-lg bg-white"
                }`}>
                <h3 className="text-xl font-semibold">{plan.name}</h3>

                <p className="text-3xl font-bold ">
                  {plan.priceMonthly === null ?
                    "Custom"
                  : `$${plan.priceMonthly}`}
                  <span className="text-sm font-normal text-gray-500">
                    {plan.billing === "MONTHLY" ? " /month" : ""}
                  </span>
                </p>

                <ul className=" text-sm text-gray-700 flex-1">
                  {Object.entries(plan.capabilities).map(([key, value]) => (
                    <li key={key}>{formatCapability(key, value)}</li>
                  ))}
                </ul>

                <button
                  className={` w-full rounded-lg p-[1vh] font-medium transition ${
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
          <button
            onClick={handleContinue}
            className="bg-black text-white p-[1vh] rounded-full">
            Continue to payment
          </button>
        )}
      </div>
    </div>
  );
};

export default Plans;
