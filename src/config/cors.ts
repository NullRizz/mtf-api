import { config } from "dotenv";
import { cors } from "hono/cors";

config();

const allowedOrigins = ["http://127.0.0.1:5500", "https://kiraanime.uk"];

const corsConfig = cors({
  allowMethods: ["GET"],
  maxAge: 600,
  credentials: true,
  origin: allowedOrigins,  // Only allow these specific origins
});

export default corsConfig;
