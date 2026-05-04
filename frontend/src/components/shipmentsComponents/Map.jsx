// src/components/shipmentsComponents/Map.jsx
// Leaflet map with:
//   - Origin marker (green)
//   - Destination marker (red)
//   - Dashed route polyline between them
//   - Pulsing live-location marker (blue) — moves as events arrive
//
// Install: npm install leaflet react-leaflet
// Also add to index.html or main.jsx:
//   import "leaflet/dist/leaflet.css";

import React, { useEffect, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
  useMap,
  AttributionControl,
} from "react-leaflet";
import L from "leaflet";
import { Card } from "@/components/ui/card";
import useShipmentStore from "@/store/useShipmentStore";
import { getSeaRoute } from "@/lib/seaRoutes.js";

// ─── Fix Leaflet default icon broken by Vite ─────────────────────────────────
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// ─── Custom icons ─────────────────────────────────────────────────────────────
const originIcon = L.divIcon({
  className: "",
  html: `<div style="
    width:14px;height:14px;border-radius:50%;
    background:#22c55e;border:3px solid white;
    box-shadow:0 0 0 2px #22c55e;
  "></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

const destIcon = L.divIcon({
  className: "",
  html: `<div style="
    width:14px;height:14px;border-radius:50%;
    background:#ef4444;border:3px solid white;
    box-shadow:0 0 0 2px #ef4444;
  "></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

// const getLiveIcon = ({ type, angle = 0 }) => {
//   let src = "";

//   if (type === "air") {
//     src =
//       angle % 180 === 0 ?
//         "/icons/straight_plane.png"
//       : "/icons/angled_plane.png";
//   } else {
//     // sea
//     src =
//       angle % 180 === 0 ? "/icons/straight_ship.png" : "/icons/angled_ship.png";
//   }

  const liveIcon = L.divIcon({
    className: "",
    html: `
      <div style="position:relative;width:40px;height:40px;">
        <img 
          src="/markers/flat_ship-removebg-preview.png" 
          style="
            width:36px;
            height:36px;
            position:absolute;
            top:50%;
            left:50%;
            transform-origin: center;
            transition: transform 0.4s linear;
            pointer-events: none;
          "
        />
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });


// ─── Overview dot — used for all-shipments view (no shipment selected) ────────
const overviewOriginIcon = L.divIcon({
  className: "",
  html: `<div style="
    width:10px;height:10px;border-radius:50%;
    background:#22c55e;border:2px solid rgba(255,255,255,0.6);
    box-shadow:0 0 4px rgba(34,197,94,0.6);
  "></div>`,
  iconSize: [10, 10],
  iconAnchor: [5, 5],
});

const overviewDestIcon = L.divIcon({
  className: "",
  html: `<div style="
    width:10px;height:10px;border-radius:50%;
    background:#ef4444;border:2px solid rgba(255,255,255,0.6);
    box-shadow:0 0 4px rgba(239,68,68,0.6);
  "></div>`,
  iconSize: [10, 10],
  iconAnchor: [5, 5],
});
function FitBounds({ points }) {
  const map = useMap();
  useEffect(() => {
    if (points.length >= 2) {
      const bounds = L.latLngBounds(points.map((p) => [p.lat, p.lng]));
      map.fitBounds(bounds, { padding: [60, 60] });
    }
  }, [points, map]);
  return null;
}


// ─── Main Map component ───────────────────────────────────────────────────────
const Map = () => {
  const { selectedShipment, liveLocation, shipments } = useShipmentStore();

  const noShipment = !selectedShipment;

  // ── Selected shipment derived values ────────────────────────────────────────
  const origin = useMemo(() => {
    if (selectedShipment?.originLat && selectedShipment?.originLng)
      return {
        lat: selectedShipment.originLat,
        lng: selectedShipment.originLng,
      };
    return null;
  }, [selectedShipment]);

  const destination = useMemo(() => {
    if (selectedShipment?.destLat && selectedShipment?.destLng)
      return { lat: selectedShipment.destLat, lng: selectedShipment.destLng };
    return null;
  }, [selectedShipment]);

const routePoints = useMemo(() => {
  if (!origin || !destination) return [];
  return getSeaRoute(origin, destination).map((p) => [p.lat, p.lng]);
}, [origin, destination]);

  const completedRoute = useMemo(() => {
    if (!liveLocation) return [];
    const idx = routePoints.findIndex(
      ([lat, lng]) => lat === liveLocation.lat && lng === liveLocation.lng,
    );
    return idx >= 0 ? routePoints.slice(0, idx + 1) : routePoints;
  }, [routePoints, liveLocation]);

  const remainingRoute = useMemo(() => {
    if (!liveLocation || completedRoute.length === 0) return routePoints;
    return routePoints.slice(completedRoute.length - 1);
  }, [routePoints, completedRoute, liveLocation]);

  const boundsPoints = useMemo(() => {
    const pts = [];
    if (origin) pts.push(origin);
    if (destination) pts.push(destination);
    if (liveLocation) pts.push(liveLocation);
    return pts;
  }, [origin, destination, liveLocation]);

  // ── Overview: all shipments that have geocoded coords ───────────────────────
  const overviewShipments = useMemo(() => {
    if (!noShipment) return [];
    return (shipments ?? []).filter(
      (s) => s.originLat && s.originLng && s.destLat && s.destLng,
    );
  }, [shipments, noShipment]);

  const defaultCenter = [20, 0];
  const defaultZoom = 2;

  return (
    <Card className="relative overflow-hidden bg-space_indigo-100 h-[75vh] w-full p-0 border-0">
      {/* ── Non-blocking hint banner (replaces the old full-screen overlay) ── */}
      {noShipment && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-1000 flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-1.5 pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 inline-block" />
          <p className="text-slate-400 text-xs font-medium whitespace-nowrap">
            Click a shipment in the table below to start live tracking
          </p>
        </div>
      )}

      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        attributionControl={false}
        minZoom={2}
        maxZoom={18}
        maxBounds={[
          [-90, -180],
          [90, 180],
        ]}
        maxBoundsViscosity={1.0}
        worldCopyJump={false}
        style={{ height: "100%", width: "100%", background: "#0f172a" }}
        zoomControl={false}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          maxZoom={19}
          noWrap={true}
        />
        <AttributionControl position="bottomright" />

        {/* ── OVERVIEW MODE: all shipment markers + dashed lines ────────────── */}
        {noShipment &&
          overviewShipments.map((s) => {
            const pts = getSeaRoute(
              { lat: s.originLat, lng: s.originLng },
              { lat: s.destLat, lng: s.destLng },
            ).map((p) => [p.lat, p.lng]);

            return (
              <React.Fragment key={s.id}>
                <Polyline
                  positions={pts}
                  pathOptions={{
                    color: "#334155",
                    weight: 1.5,
                    dashArray: "4 5",
                    opacity: 0.7,
                  }}
                />
                {/* Dashed line between origin and destination */}
                
                {/* Origin dot */}
                <Marker
                  position={[s.originLat, s.originLng]}
                  icon={overviewOriginIcon}>
                  <Popup>
                    <div style={{ fontFamily: "sans-serif", fontSize: 12 }}>
                      <strong style={{ color: "#22c55e" }}>
                        🟢 {s.origin}
                      </strong>
                      <p style={{ margin: "4px 0 0", color: "#64748b" }}>
                        → {s.destination}
                      </p>
                      <p
                        style={{
                          margin: "2px 0 0",
                          color: "#94a3b8",
                          fontSize: 11,
                        }}>
                        Carrier: {s.carrier}
                      </p>
                    </div>
                  </Popup>
                </Marker>
                {/* Destination dot */}
                <Marker
                  position={[s.destLat, s.destLng]}
                  icon={overviewDestIcon}>
                  <Popup>
                    <div style={{ fontFamily: "sans-serif", fontSize: 12 }}>
                      <strong style={{ color: "#ef4444" }}>
                        🔴 {s.destination}
                      </strong>
                      <p style={{ margin: "4px 0 0", color: "#64748b" }}>
                        ← {s.origin}
                      </p>
                      {s.eta && (
                        <p
                          style={{
                            margin: "2px 0 0",
                            color: "#94a3b8",
                            fontSize: 11,
                          }}>
                          ETA: {new Date(s.eta).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </Popup>
                </Marker>
              </React.Fragment>
            );
          })}

        {/* ── SELECTED SHIPMENT MODE ─────────────────────────────────────────── */}
        {!noShipment && (
          <>
            {boundsPoints.length >= 2 && <FitBounds points={boundsPoints} />}

            {remainingRoute.length >= 2 && (
              <Polyline
                positions={remainingRoute}
                pathOptions={{
                  color: "#475569",
                  weight: 2,
                  dashArray: "6 6",
                  opacity: 0.6,
                }}
              />
            )}
            {completedRoute.length >= 2 && (
              <Polyline
                positions={completedRoute}
                pathOptions={{ color: "#3b82f6", weight: 3, opacity: 0.9 }}
              />
            )}

            {origin && (
              <Marker position={[origin.lat, origin.lng]} icon={originIcon}>
                <Popup>
                  <div style={{ fontFamily: "sans-serif", fontSize: 13 }}>
                    <strong>🟢 Origin</strong>
                    <p style={{ margin: "4px 0 0" }}>
                      {selectedShipment.origin}
                    </p>
                    {selectedShipment.etd && (
                      <p style={{ color: "#64748b", margin: "2px 0 0" }}>
                        ETD:{" "}
                        {new Date(selectedShipment.etd).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </Popup>
              </Marker>
            )}

            {destination && (
              <Marker
                position={[destination.lat, destination.lng]}
                icon={destIcon}>
                <Popup>
                  <div style={{ fontFamily: "sans-serif", fontSize: 13 }}>
                    <strong>🔴 Destination</strong>
                    <p style={{ margin: "4px 0 0" }}>
                      {selectedShipment.destination}
                    </p>
                    {selectedShipment.eta && (
                      <p style={{ color: "#64748b", margin: "2px 0 0" }}>
                        ETA:{" "}
                        {new Date(selectedShipment.eta).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </Popup>
              </Marker>
            )}

            {liveLocation && (
              <Marker
                position={[liveLocation.lat, liveLocation.lng]}
                icon={liveIcon}>
                <Popup>
                  <div style={{ fontFamily: "sans-serif", fontSize: 13 }}>
                    <strong>🔵 Live Location</strong>
                    {liveLocation.location && (
                      <p style={{ margin: "4px 0 0" }}>
                        {liveLocation.location}
                      </p>
                    )}
                    <p
                      style={{
                        color: "#64748b",
                        margin: "2px 0 0",
                        fontSize: 11,
                      }}>
                      Updated:{" "}
                      {new Date(liveLocation.updatedAt).toLocaleTimeString()}
                    </p>
                  </div>
                </Popup>
              </Marker>
            )}
          </>
        )}
      </MapContainer>

      {/* ── Legend ────────────────────────────────────────────────────────────── */}
      <div className="absolute bottom-4 left-4 z-1000 bg-slate-900/90 backdrop-blur-sm rounded-xl px-4 py-3 flex gap-4 text-xs text-slate-300 border border-slate-700/50">
        {noShipment ?
          <>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Origin
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              Destination
            </span>
            <span className="text-slate-500">
              {overviewShipments.length} shipments
            </span>
          </>
        : <>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
              {selectedShipment.origin}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block animate-pulse" />
              Live
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
              {selectedShipment.destination}
            </span>
          </>
        }
      </div>
    </Card>
  );
};

export default Map;
