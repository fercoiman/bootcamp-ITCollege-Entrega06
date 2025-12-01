import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const PERSISTENCE = process.env.PERSISTENCE || "mongo"; // OPCIONES: 'file' o 'mongo'
export const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/palabrasdb";

const config = {
  PORT,
  PERSISTENCE,
  MONGO_URI,
};

export default config;
