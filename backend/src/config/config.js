import dotenv from "dotenv";

dotenv.config();
if ( !process.env.PORT ) {
  throw new Error("PORT is not defined in enviornmental variables")
}
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in enviornmental variables");
}
if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in enviornmental variables");
}
if (!process.env.JWT_EXPIRATION) {
  throw new Error("JWT_EXPIRATION is not defined in enviornmental variables");
}
if (!process.env.ACCESS_TOKEN_TTL) {
  throw new Error("ACCESS_TOKEN_TTL is not defined in enviornmental variables");
}
if (!process.env.REFRESH_TOKEN_DAYS) {
  throw new Error(
    "REFRESH_TOKEN_DAYS is not defined in enviornmental variables",
  );
}
if (!process.env.REFRESH_TOKEN_EXPIRATION) {
  throw new Error(
    "REFRESH_TOKEN_EXPIRATION is not defined in enviornmental variables",
  );
}
if (!process.env.SUPER_ADMIN_SECRET) {
  throw new Error(
    "SUPER_ADMIN_SECRET is not defined in enviornmental variables",
  );
}
if (!process.env.ADMIN_KEY) {
  throw new Error("ADMIN_KEY is not defined in enviornmental variables");
}
if (!process.env.NODE_ENV) {
  throw new Error("NODE_ENV is not defined in enviornmental variables");
}

const config = {
  // PORT VARIABLES
  PORT: process.env.PORT,

  // DATABASE VARIABLES
  DATABASE_URL: process.env.DATABASE_URL,

  // JWT SECRETS
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRATION: process.env.JWT_EXPIRATION,

  // TOKEN VARIABLES
  ACCESS_TOKEN_TTL: process.env.ACCESS_TOKEN_TTL,
  REFRESH_TOKEN_DAYS: process.env.REFRESH_TOKEN_DAYS,
  REFRESH_TOKEN_EXPIRATION: process.env.REFRESH_TOKEN_EXPIRATION,

  // ADMIN VARIABLES
  SUPER_ADMIN_SECRET: process.env.SUPER_ADMIN_SECRET,
  ADMIN_KEY: process.env.ADMIN_KEY,

  NODE_ENV: process.env.NODE_ENV,
};

export default config;
