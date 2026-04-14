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
if (!process.env.REFRESH_TOKEN_TTL) {
  throw new Error(
    "REFRESH_TOKEN_TTL is not defined in enviornmental variables",
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
if (!process.env.GOOGLE_CLIENT_ID) {
  throw new Error("GOOGLE_CLIENT_ID is not defined in enviornmental variables");
}
if (!process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error(
    "GOOGLE_CLIENT_SECRET is not defined in enviornmental variables",
  );
}
if (!process.env.GOOGLE_REFRESH_TOKEN) {
  throw new Error(
    "GOOGLE_REFRESH_TOKEN is not defined in enviornmental variables",
  );
}
if (!process.env.GOOGLE_USER) {
  throw new Error("GOOGLE_USER is not defined in enviornmental variables");
}
if (!process.env.SUBSCRIPTION_TRIAL_DAYS) {
  throw new Error(
    "SUBSCRIPTION_TRIAL_DAYS is not defined in enviornmental variables",
  );
}
if (!process.env.IMAGEKIT_PUBLIC_KEY) {
  throw new Error(
    "IMAGEKIT_PUBLIC_KEY is not defined in enviornmental variables",
  );
}
if (!process.env.IMAGEKIT_PRIVATE_KEY) {
  throw new Error(
    "IMAGEKIT_PRIVATE_KEY is not defined in enviornmental variables",
  );
}
if (!process.env.IMAGEKIT_URL_ENDPOINT) {
  throw new Error(
    "IMAGEKIT_URL_ENDPOINT is not defined in enviornmental variables",
  );
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
  REFRESH_TOKEN_TTL: process.env.REFRESH_TOKEN_TTL,

  // ADMIN VARIABLES
  SUPER_ADMIN_SECRET: process.env.SUPER_ADMIN_SECRET,
  ADMIN_KEY: process.env.ADMIN_KEY,

  // GOOGLE VARIABLES
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN,
  GOOGLE_USER: process.env.GOOGLE_USER,

  // SUBSCRIPTION VARIABLES
  SUBSCRIPTION_TRIAL_DAYS: process.env.SUBSCRIPTION_TRIAL_DAYS,

  // IMAGEKIT VARIABLES
  IMAGEKIT_PUBLIC_KEY: process.env.IMAGEKIT_PUBLIC_KEY,
  IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY,
  IMAGEKIT_URL_ENDPOINT: process.env.IMAGEKIT_URL_ENDPOINT,
  
  NODE_ENV: process.env.NODE_ENV,
};

export default config;
