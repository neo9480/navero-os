import { useMemo, useState } from "react";
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

const Plans = ({ role, onPlanSelected }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = useMemo(() => {
    if (!role) return [];
    return Object.values(subscriptionPlans[role]);
  }, [role]);

  if (!role)
    return <p className="text-center">Select a role first.</p>;

  return (
    <div className="flex flex-col items-center gap-6">
      <ABgLight />

      <h1 className="text-3xl font-bold">Choose Your Plan</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => {
          const selected = selectedPlan === plan.id;

          return (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`cursor-pointer rounded-2xl border p-6 transition ${
                selected
                  ? "border-blue-500 bg-blue-50 scale-105"
                  : "bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold">{plan.name}</h3>

              <p className="text-3xl font-bold">
                {plan.priceMonthly === null
                  ? "Custom"
                  : `$${plan.priceMonthly}`}
              </p>

              <button
                className={`mt-4 w-full rounded-lg p-2 ${
                  selected
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {selected ? "Selected" : "Choose Plan"}
              </button>
            </div>
          );
        })}
      </div>

      {selectedPlan && (
        <button
          onClick={() =>
            onPlanSelected({
              planId: selectedPlan,
            })
          }
          className="bg-black text-white px-6 py-2 rounded-full"
        >
          Continue to Payment
        </button>
      )}
    </div>
  );
};

export default Plans;
