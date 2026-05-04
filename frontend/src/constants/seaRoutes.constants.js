export const WAYPOINTS = {
  // Atlantic
  gibraltar: { lat: 36.0, lng: -5.4 },
  azores: { lat: 38.5, lng: -28.0 },
  canary: { lat: 28.1, lng: -15.4 },
  cape_verde: { lat: 16.0, lng: -24.0 },

  // Indian Ocean
  suez_n: { lat: 31.2, lng: 32.4 },
  suez_s: { lat: 29.9, lng: 32.6 },
  aden: { lat: 11.5, lng: 43.5 },
  hormuz: { lat: 26.6, lng: 56.3 },
  mumbai_off: { lat: 18.5, lng: 70.0 },
  colombo_off: { lat: 6.5, lng: 79.5 },
  good_hope: { lat: -34.4, lng: 18.5 },
  reunion: { lat: -21.0, lng: 55.5 },

  // SE Asia / Pacific
  malacca: { lat: 1.3, lng: 103.8 },
  singapore_off: { lat: 1.0, lng: 104.5 },
  south_china_sea: { lat: 14.0, lng: 114.0 },
  luzon_strait: { lat: 20.5, lng: 121.5 },
  taiwan_strait: { lat: 24.5, lng: 120.0 },

  // Pacific
  pacific_w: { lat: 25.0, lng: 140.0 },
  pacific_mid: { lat: 20.0, lng: 170.0 },
  pacific_e: { lat: 20.0, lng: -140.0 },
  hawaii: { lat: 21.3, lng: -157.8 },

  // Americas
  panama_p: { lat: 8.9, lng: -79.5 },
  panama_a: { lat: 9.3, lng: -79.9 },
  horn: { lat: -55.9, lng: -67.3 },
  la_off: { lat: 33.5, lng: -119.0 },
  sf_off: { lat: 37.5, lng: -123.0 },
  seattle_off: { lat: 47.5, lng: -124.5 },
  gulf_mexico: { lat: 25.0, lng: -90.0 },
  florida_strait: { lat: 24.5, lng: -81.0 },
  ny_off: { lat: 40.0, lng: -72.0 },

  // Europe / Med
  dover: { lat: 51.1, lng: 1.4 },
  biscay: { lat: 46.0, lng: -8.0 },
  med_w: { lat: 38.0, lng: 5.0 },
  med_e: { lat: 33.5, lng: 28.0 },
};

export const RAW_EDGES = [
  // Europe ↔ Atlantic
  ["dover", "biscay", 450],
  ["biscay", "gibraltar", 500],
  ["gibraltar", "canary", 600],
  ["gibraltar", "med_w", 400],
  ["med_w", "med_e", 1200],
  ["med_e", "suez_n", 500],
  ["suez_n", "suez_s", 100],

  // Red Sea / Indian Ocean
  ["suez_s", "aden", 1100],
  ["aden", "hormuz", 900],
  ["aden", "mumbai_off", 1200],
  ["aden", "colombo_off", 1800],
  ["hormuz", "mumbai_off", 700],
  ["mumbai_off", "colombo_off", 600],
  ["colombo_off", "malacca", 1500],
  ["colombo_off", "good_hope", 4500],

  // Africa roundabout
  ["canary", "cape_verde", 900],
  ["cape_verde", "good_hope", 4000],
  ["good_hope", "reunion", 2000],
  ["reunion", "mumbai_off", 2500],
  ["reunion", "colombo_off", 2200],
  ["good_hope", "ny_off", 7000],
  ["good_hope", "florida_strait", 6800],

  // SE Asia
  ["malacca", "singapore_off", 200],
  ["singapore_off", "south_china_sea", 800],
  ["south_china_sea", "luzon_strait", 700],
  ["south_china_sea", "taiwan_strait", 600],
  ["taiwan_strait", "luzon_strait", 400],
  ["luzon_strait", "pacific_w", 1000],
  ["pacific_w", "pacific_mid", 2000],
  ["pacific_mid", "pacific_e", 2000],
  ["pacific_mid", "hawaii", 2000],
  ["hawaii", "pacific_e", 2000],
  ["hawaii", "la_off", 2500],
  ["pacific_e", "la_off", 1500],
  ["la_off", "sf_off", 400],
  ["sf_off", "seattle_off", 800],

  // Panama Canal
  ["panama_p", "la_off", 2600],
  ["panama_p", "panama_a", 50],
  ["panama_a", "gulf_mexico", 1200],
  ["panama_a", "florida_strait", 1100],
  ["gulf_mexico", "florida_strait", 800],
  ["florida_strait", "ny_off", 1200],
  ["ny_off", "dover", 3200],
  ["ny_off", "azores", 2700],
  ["azores", "dover", 1400],
  ["azores", "gibraltar", 900],
  ["azores", "biscay", 1100],

  // Cape Horn
  ["horn", "good_hope", 4000],
  ["horn", "la_off", 5000],
  ["horn", "ny_off", 5800],
  ["horn", "panama_p", 3800],
];
