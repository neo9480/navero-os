import marnetData from "../json/marnet_densified.json" with {type: "json"}

// Build adjacency graph from the GeoJSON network
let graph = null;

function buildGraph() {
  if (graph) return graph;
  graph = new Map();

  for (const feature of marnetData.features) {
    const coords = feature.geometry.coordinates;
    for (let i = 0; i < coords.length - 1; i++) {
      const a = coords[i].join(",");
      const b = coords[i + 1].join(",");
      const dist = haversine(coords[i], coords[i + 1]);

      if (!graph.has(a)) graph.set(a, []);
      if (!graph.has(b)) graph.set(b, []);
      graph.get(a).push({ node: b, dist, coord: coords[i + 1] });
      graph.get(b).push({ node: a, dist, coord: coords[i] });
    }
  }
  return graph;
}

function haversine([lon1, lat1], [lon2, lat2]) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Find nearest graph node to a [lon, lat] point
function nearestNode(lon, lat) {
  let best = null,
    bestDist = Infinity;
  for (const [key] of buildGraph()) {
    const [nLon, nLat] = key.split(",").map(Number);
    const d = haversine([lon, lat], [nLon, nLat]);
    if (d < bestDist) {
      bestDist = d;
      best = key;
    }
  }
  return best;
}

// Dijkstra's shortest path
function dijkstra(startKey, endKey) {
  const g = buildGraph();
  const dist = new Map([[startKey, 0]]);
  const prev = new Map();
  const queue = new Set(g.keys());

  while (queue.size) {
    // Pick unvisited node with smallest distance
    let u = null;
    for (const node of queue) {
      if (!dist.has(node)) continue;
      if (u === null || dist.get(node) < dist.get(u)) u = node;
    }
    if (!u || u === endKey) break;
    queue.delete(u);

    for (const { node: v, dist: d } of g.get(u) || []) {
      const alt = dist.get(u) + d;
      if (!dist.has(v) || alt < dist.get(v)) {
        dist.set(v, alt);
        prev.set(v, u);
      }
    }
  }

  // Reconstruct path
  const path = [];
  let curr = endKey;
  while (curr) {
    const [lon, lat] = curr.split(",").map(Number);
    path.unshift({ lat, lng: lon });
    curr = prev.get(curr);
  }
  return path;
}

const routeCache = new Map();

export function getSeaRoute(origin, destination) {
  const key = `${origin.lat},${origin.lng}|${destination.lat},${destination.lng}`;
  if (routeCache.has(key)) return routeCache.get(key);

  try {
    const startKey = nearestNode(origin.lng, origin.lat);
    const endKey = nearestNode(destination.lng, destination.lat);
    const route = dijkstra(startKey, endKey);
    const result = route.length > 1 ? route : [origin, destination];
    routeCache.set(key, result);
    return result;
  } catch {
    return [origin, destination];
  }
}
