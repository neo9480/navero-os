// src/pages/ShipmentsPage.jsx
// Wires: shipment list → select → SSE stream → Map + LiveEvents

import React, { useEffect } from "react";
import DashboardLayout from "@/components/dashboardComponents/DashboardLayout";
import DataTable from "@/components/dashboardComponents/DataTable";
import Kpi from "@/components/dashboardComponents/Kpi";
import LiveEvents from "@/components/shipmentsComponents/LiveEvents";
import Map from "@/components/shipmentsComponents/Map";
import useShipmentStore from "@/store/useShipmentStore";
import useAuthStore from "@/store/useAuthStore";

const ShipmentsPage = () => {
  const { user, accessToken } = useAuthStore();
  const {
    shipments,
    selectedShipment,
    fetchUserShipments,
    fetchShipment,
    startLiveTracking,
    stopLiveTracking,
    selectShipment,
  } = useShipmentStore();

  // Load shipments on mount
  useEffect(() => {
    if (user?.id && accessToken) {
      fetchUserShipments(user.id, accessToken);
    }
  }, [user?.id, accessToken, fetchUserShipments]);

  // When a shipment is selected, fetch full data + open SSE stream
  useEffect(() => {
    if (!selectedShipment?.id || !accessToken) return;

    fetchShipment(selectedShipment.id, accessToken);
    startLiveTracking(selectedShipment.id, accessToken);

    return () => stopLiveTracking();
  }, [selectedShipment?.id, accessToken, fetchShipment, startLiveTracking, stopLiveTracking]);

  // Handle row click from DataTable
  const handleRowClick = (shipment) => {
    if (selectedShipment?.id === shipment.id) return; // already selected
    stopLiveTracking();
    selectShipment(shipment);
  };

  const tableData = shipments.map(
    ({ id, origin, destination, status, carrier, eta }) => ({
      id,
      origin,
      destination,
      status,
      carrier,
      eta: eta ? new Date(eta).toLocaleDateString() : "—",
      docs: "—", // placeholder until you have a docs field
    }),
  );

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <Kpi />

        <div className="flex gap-4">
          <Map />
          <LiveEvents />
        </div>

        {/* Pass onRowClick so selecting a row triggers tracking */}
        {shipments.length > 0 && (
          <DataTable
            tableData={tableData}
            onRowClick={handleRowClick}
            selectedId={selectedShipment?.id}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default ShipmentsPage;
