declare module "searoute-js" {
  function searoute(
    origin: [number, number], // [lon, lat]
    destination: [number, number], // [lon, lat]
  ): GeoJSON.FeatureCollection<GeoJSON.LineString>;

  export default searoute;
}
