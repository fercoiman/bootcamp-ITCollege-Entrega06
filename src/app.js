import express from "express";
import palabrasRouter from "./routes/palabras.routes.js";

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use("/api/palabras", palabrasRouter);

// Manejo básico de errores
app.use((err, req, res, next) => {
  console.error("[ERROR]", err);
  res.status(500).json({ message: "Error interno del servidor" });
});

export default app;
