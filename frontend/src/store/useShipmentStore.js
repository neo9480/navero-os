// src/store/useShipmentStore.js
import { create } from "zustand";
import axios from "axios";
import config from "@/lib/config";

const BASE_SHIPMENT_URL = config.BASE_SHIPMENT_URL;

const useShipmentStore = create((set, get) => ({
  // ── State ──────────────────────────────────────────────────────────────────
  shipments: [],
  selectedShipment: null, // full shipment object with events
  trackingEvents: [], // live event list for selected shipment
  liveLocation: null, // { lat, lng, location, updatedAt }
  eta: null,
  isLoading: false,
  error: null,
  sseConnection: null, // active EventSource

  // ── Actions ────────────────────────────────────────────────────────────────

  /** Fetch all shipments for the logged-in user */
  fetchUserShipments: async (userId, accessToken) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.get(`${BASE_SHIPMENT_URL}/user/${userId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      });
      set({ shipments: res.data.shipment ?? [], isLoading: false });
    } catch (err) {
      set({
        error: err.response?.data?.message ?? "Failed to load shipments",
        isLoading: false,
      });
    }
  },

  /** Fetch one shipment with full tracking history */
  fetchShipment: async (shipmentId, accessToken) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.get(`${BASE_SHIPMENT_URL}/${shipmentId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      });
      const shipment = res.data.shipment;
      set({
        selectedShipment: shipment,
        trackingEvents: shipment.events ?? [],
        eta: shipment.eta,
        isLoading: false,
      });

      // Set last known location from events
      const lastLocationEvent = [...(shipment.events ?? [])]
        .reverse()
        .find((e) => e.lat && e.lng);
      if (lastLocationEvent) {
        set({
          liveLocation: {
            lat: lastLocationEvent.lat,
            lng: lastLocationEvent.lng,
            location: lastLocationEvent.location,
            updatedAt: lastLocationEvent.createdAt,
          },
        });
      }
    } catch (err) {
      set({
        error: err.response?.data?.message ?? "Failed to load shipment",
        isLoading: false,
      });
    }
  },

  /**
   * Open SSE stream for live tracking.
   * Pass accessToken — it's sent as ?token= since EventSource can't set headers.
   */
  startLiveTracking: (shipmentId, accessToken) => {
    // Close any existing connection
    get().stopLiveTracking();

    const url = `${BASE_SHIPMENT_URL}/tracking/${shipmentId}/stream?token=${accessToken}`;
    const es = new EventSource(url);

    es.onmessage = (e) => {
      const data = JSON.parse(e.data);

      if (data.type === "SNAPSHOT") {
        // Initial full state from server
        set({
          selectedShipment: data.shipment,
          trackingEvents: data.events ?? [],
          eta: data.shipment?.eta ?? null,
        });
        // Set initial location from last event
        const lastLoc = [...(data.events ?? [])]
          .reverse()
          .find((ev) => ev.lat && ev.lng);
        if (lastLoc) {
          set({
            liveLocation: {
              lat: lastLoc.lat,
              lng: lastLoc.lng,
              location: lastLoc.location,
              updatedAt: lastLoc.createdAt,
            },
          });
        }
        return;
      }

      // Append new event to timeline
      if (data.event) {
        set((state) => ({
          trackingEvents: [...state.trackingEvents, data.event],
        }));

        // Update live map dot if event has coordinates
        if (data.event.lat && data.event.lng) {
          set({
            liveLocation: {
              lat: data.event.lat,
              lng: data.event.lng,
              location: data.event.location,
              updatedAt: data.event.createdAt,
            },
          });
        }
      }

      // Update ETA if provided
      if (data.eta) set({ eta: data.eta });
    };

    es.onerror = () => {
      // Browser auto-reconnects on error — no manual action needed
      console.warn("[SSE] Connection lost, browser will retry...");
    };

    set({ sseConnection: es });
  },

  stopLiveTracking: () => {
    const { sseConnection } = get();
    if (sseConnection) {
      sseConnection.close();
      set({ sseConnection: null });
    }
  },

  selectShipment: (shipment) => {
    set({
      selectedShipment: shipment,
      trackingEvents: [],
      liveLocation: null,
      eta: null,
    });
  },

  clearError: () => set({ error: null }),
}));

export default useShipmentStore;
