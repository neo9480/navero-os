const config = {
  BASE_AUTH_URL:
    import.meta.env.MODE === "development" ?
      "http://localhost:3000/api/auth"
    : "/api/auth",
  BASE_DOCUMENT_URL:
    import.meta.env.MODE === "development" ?
      "http://localhost:3000/api/docs"
    : "/api/docs",
  BASE_FINANCE_URL:
    import.meta.env.MODE === "development" ?
      "http://localhost:3000/api/finance"
    : "/api/finance",
  BASE_OPERATIONS_URL:
    import.meta.env.MODE === "development" ?
      "http://localhost:3000/api/operations"
    : "/api/operations",
  BASE_OPERATORS_URL:
    import.meta.env.MODE === "development" ?
      "http://localhost:3000/api/operators"
    : "/api/operators",
  BASE_USER_URL:
    import.meta.env.MODE === "development" ?
      "http://localhost:3000/api/user"
    : "/api/user",
  BASE_SHIPMENT_URL:
    import.meta.env.MODE === "development" ?
      "http://localhost:3000/api/shipment"
    : "/api/shipment",
  BASE_SERVICES_URL:
    import.meta.env.MODE === "development" ?
      "http://localhost:3000/api/services"
    : "/api/services",
};

export default config;
