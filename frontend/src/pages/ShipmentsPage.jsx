import DashboardLayout from "@/components/dashboardComponents/DashboardLayout";
import DataTable from "@/components/dashboardComponents/DataTable";
import Kpi from "@/components/dashboardComponents/Kpi";
import LiveEvents from "@/components/shipmentsComponents/LiveEvents";
import Map from "@/components/shipmentsComponents/Map";
import { SHIPMENTS } from "@/constants/shipments";
import React from "react";

const ShipmentsPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        {/* <nav>
        navigation
      </nav> */}
        <Kpi />
        <div className="flex gap-4">
          <Map />
          <LiveEvents />
        </div>
        <DataTable tableData={SHIPMENTS} />
      </div>
    </DashboardLayout>
  );
};

export default ShipmentsPage;
