import app from "./app.js";
import { PORT } from "./config/index.js";
import { connectDB } from "./config/db.js";

async function start() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
}

start().catch((err) => {
  console.error("Error al iniciar el servidor:", err);
  process.exit(1);
});
