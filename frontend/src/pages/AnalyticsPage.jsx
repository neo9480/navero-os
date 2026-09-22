import DashboardLayout from "@/components/dashboardComponents/DashboardLayout";
import Kpi from "@/components/dashboardComponents/Kpi";
import Map from "@/components/shipmentsComponents/Map";
import React from "react";

const AnalyticsPage = () => {
  return (
    <DashboardLayout>
      <Kpi />
      <div></div>
      <Map />
      <div></div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
