import BarChart from "@/components/dashboardComponents/charts/commonCharts/BiaxialBarChart";
import BiaxialLineChart from "@/components/dashboardComponents/charts/exporterCharts/BiaxialLineChart";
import DashboardLayout from "@/components/dashboardComponents/DashboardLayout";
import DataTable from "@/components/dashboardComponents/DataTable";
import Kpi from "@/components/dashboardComponents/Kpi";
import { SHIPMENTS } from "@/constants/shipments";
import React from "react";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <BiaxialLineChart />
          <BarChart />
        </div>
        <Kpi />
        <DataTable tableData={SHIPMENTS} />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
