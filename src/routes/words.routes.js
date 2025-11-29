import { Router } from "express";
import {
  createWordController,
  getWordsController,
} from "../controllers/words.controller.js";
import { validateCreateWord } from "../validators/words.validator.js";

const router = Router();

router.post("/", validateCreateWord, createWordController);
router.get("/", getWordsController);

export default router;
