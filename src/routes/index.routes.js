import { Router } from "express";
import wordsRoutes from "./words.routes.js";

const router = Router();

router.use("/words", wordsRoutes);

export default router;
