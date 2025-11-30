import { Router } from "express";
import PalabrasController from "../controllers/palabras.controller.js";

const router = Router();

// POST /api/palabras  -> { palabra: "hola" }
router.post("/", PalabrasController.postPalabra);

// GET /api/palabras   -> { frase: "hola que tal", palabras: [...] }
router.get("/", PalabrasController.getFrase);

export default router;
