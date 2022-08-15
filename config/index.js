import dotenv from "dotenv";

dotenv.config();
export const {
  APP_PORT,
  APP_URL,
  REFRESH_SECRET,
  DEBUG_MODE,
  DB_URL,
  JWT_SECRET,
} = process.env;
