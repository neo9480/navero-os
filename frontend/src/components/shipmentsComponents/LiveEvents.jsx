// src/components/shipmentsComponents/LiveEvents.jsx
// Shows:
//   - ETA countdown timer
//   - Vertical status timeline with icons + live pulse on latest event
//   - Carrier info chip

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import useShipmentStore from "@/store/useShipmentStore";
import EtaCountdown from "./EtaCountdown";
import EventRow from "./EventRow";
import { Separator } from "../ui/separator";
import { Map, MapPinOff } from "lucide-react";

// ─── ETA Countdown ────────────────────────────────────────────────────────────

// ─── Main component ───────────────────────────────────────────────────────────
const LiveEvents = () => {
  const { selectedShipment, trackingEvents, eta, liveLocation } =
    useShipmentStore();

  const noShipment = !selectedShipment;

  return (
    <Card className="bg-space_indigo-100 border rounded-3xl h-[75vh] w-[22vw] flex flex-col overflow-hidden shrink-0">
      {/* Header */}
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-bold text-platinum-500">Live Tracking</div>
          </div>
          {/* Live indicator */}
          <div className="flex items-center gap-1">
            <div
              className={`w-2 h-2 rounded-full ${liveLocation ? "bg-green-400 animate-pulse" : "bg-platinum-500/30 animate-none"}`}
            />
            <span
              className={`text-xs ${liveLocation ? "text-green-400" : "text-platinum-500/30"}`}>
              {liveLocation ? "LIVE" : "OFFLINE"}
            </span>
          </div>
        </div>
        {selectedShipment && (
          <div className="text-platinum-500/60 text-sm mt-2">
            {/* India → USA */}
            {selectedShipment.origin} → {selectedShipment.destination}
          </div>
        )}
        <Separator />
        {/* Carrier chip */}
        {selectedShipment?.carrier && (
          <div className="inline-flex items-center gap-2 bg-platinum-500/5 w-full rounded-md py-1 px-2.5">
            <span className="text-platinum-500/50 text-sm">Carrier :</span>
            <span className="text-platinum-500 text-sm">
              {selectedShipment.carrier}
            </span>
            {selectedShipment.carrierTrackingId && (
              <>
                <span className="text-platinum-500/80">·</span>
                <span className="text-xs text-platinum-500/60 ">
                  {selectedShipment.carrierTrackingId}
                </span>
              </>
            )}
          </div>
        )}
      </CardHeader>

      <CardContent className={"h-full "}>
        {noShipment ?
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-platinum-500">
              <Map className="size-8" />
            </div>
            <p className="text-platinum-500/70 text-center justify-center flex">
              Select a shipment from the table to view live tracking events.
            </p>
          </div>
        : <>
            <EtaCountdown eta={eta} />
            {trackingEvents.length === 0 ?
              <div className="flex flex-col items-center gap-2">
                <div className="text-platinum-500">
                  <MapPinOff className="size-4" />
                </div>
                <p>No tracking events yet</p>
              </div>
            : <div className="text-platinum-500 flex flex-col">
                {[...trackingEvents].map((event, idx) => (
                  <EventRow
                    key={event.id}
                    event={event}
                    isLast={idx === 0}
                    isFirst={idx === trackingEvents.length - 1}
                  />
                ))}
              </div>
            }
          </>
        }
      </CardContent>
    </Card>
  );
};

export default LiveEvents;
