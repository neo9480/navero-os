// src/services/sse.service.js
// Manages Server-Sent Events connections per shipment

const clients = new Map(); // shipmentId → Set of res objects

/**
 * Register a new SSE client for a shipment
 * @param {string} shipmentId
 * @param {object} res - Express response object
 */
function addClient(shipmentId, res) {
  if (!clients.has(shipmentId)) {
    clients.set(shipmentId, new Set());
  }
  clients.get(shipmentId).add(res);
}

/**
 * Remove a client (on disconnect)
 * @param {string} shipmentId
 * @param {object} res
 */
function removeClient(shipmentId, res) {
  const room = clients.get(shipmentId);
  if (room) {
    room.delete(res);
    if (room.size === 0) clients.delete(shipmentId);
  }
}

/**
 * Broadcast a tracking event to all listeners of a shipment
 * @param {string} shipmentId
 * @param {object} data - event payload
 */
function broadcast(shipmentId, data) {
  const room = clients.get(shipmentId);
  if (!room || room.size === 0) return;

  const payload = `data: ${JSON.stringify(data)}\n\n`;
  for (const res of room) {
    try {
      res.write(payload);
    } catch (_) {
      room.delete(res);
    }
  }
}

/**
 * Get active listener count for a shipment
 */
function getListenerCount(shipmentId) {
  return clients.get(shipmentId)?.size ?? 0;
}

export default { addClient, removeClient, broadcast, getListenerCount };