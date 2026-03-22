const config = {
  BASE_AUTH_URL:
    import.meta.env.MODE === "development" ?
      "http://localhost:3000/api/auth"
    : "/api/auth",
  BASE_BANK_URL:
    import.meta.env.MODE === "development" ?
      "http://localhost:3000/api/bank"
    : "/api/bank",
  BASE_CUSTOMS_URL:
    import.meta.env.MODE === "development" ?
      "http://localhost:3000/api/customs"
    : "/api/customs",
  BASE_BROKER_URL:
    import.meta.env.MODE === "development" ?
      "http://localhost:3000/api/broker"
    : "/api/broker",
  BASE_IMPORTER_URL:
    import.meta.env.MODE === "development" ?
      "http://localhost:3000/api/importer"
    : "/api/importer",
  BASE_EXPORTER_URL:
    import.meta.env.MODE === "development" ?
      "http://localhost:3000/api/exporter"
    : "/api/exporter",
  BASE_SERVICES_URL:
    import.meta.env.MODE === "development" ?
      "http://localhost:3000/api/services"
    : "/api/services",
};

export default config;
