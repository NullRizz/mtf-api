import { config } from "dotenv";

config();

// Update allowedOrigins to match your port 5500 (assuming you want to allow localhost:5500)
const allowedOrigins = process.env.ANIWATCH_API_CORS_ALLOWED_ORIGINS
  ? process.env.ANIWATCH_API_CORS_ALLOWED_ORIGINS.split(",")
  : ["http://localhost:5500", "*"]; // Updated port

// Removed CORS handling (as requested)
