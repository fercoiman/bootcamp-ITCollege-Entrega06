import express from "express";
import routes from "./src/routes/index.routes.js";

const app = express();

app.use(express.json());
app.use("/api", routes);

export default app;
