import AnimBtn from "@/components/commonComponents/AnimBtn";
import GroupedBar from "@/components/dashboardComponents/charts/commonCharts/GroupedBar";
import ParetoChart from "@/components/dashboardComponents/charts/commonCharts/ParetoChart";
import StackedHorizontalChart from "@/components/dashboardComponents/charts/commonCharts/StackedHorizontalChart";
import Treemap from "@/components/dashboardComponents/charts/commonCharts/Treemap";
import BiaxialLineBarChart from "@/components/dashboardComponents/charts/exporterCharts/BiaxialLineBarChart";
import BoxWhiskerPlot from "@/components/dashboardComponents/charts/exporterCharts/BoxWhiskerPlot";
import GroupedBarAreaChart from "@/components/dashboardComponents/charts/exporterCharts/GroupedBarAreaChart";
import DonutDrilldown from "@/components/dashboardComponents/charts/importerCharts/DonutDrilldown";
import DashboardLayout from "@/components/dashboardComponents/DashboardLayout";
import Kpi from "@/components/dashboardComponents/Kpi";
import React from "react";

const AnalyticsPage = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6 ">
        <p className="text-3xl">Analytics Dashboard</p>
        <AnimBtn
          ctaText="Generate Report"
          bgColor="bg-punch_red-500"
          textColor={"text-platinum-600"}
          hoverColor={"bg-punch_red-400"}
          showArrow={true}
        />
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <Kpi />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-3">
            <BiaxialLineBarChart />
            <ParetoChart />
          </div>
          <Treemap />
          <div className="flex gap-3">
            <DonutDrilldown />
            <BoxWhiskerPlot />
            <GroupedBar />
          </div>
          <hr />
          <div className="flex gap-3">
            <StackedHorizontalChart />
            <GroupedBarAreaChart />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
