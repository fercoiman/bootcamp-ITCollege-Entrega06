import mongoose from "mongoose";
import { MONGO_URI, PERSISTENCE } from "./index.js";

export async function connectDB() {
  if (PERSISTENCE !== "mongo") {
    console.log("[DB] PERSISTENCE != mongo, no se realiza conexión a MongoDB");
    return;
  }

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("[DB] Conectado a MongoDB");
  } catch (error) {
    console.error("[DB] Error al conectar a MongoDB:", error.message);
    process.exit(1);
  }
}
