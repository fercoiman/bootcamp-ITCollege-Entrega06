import { createWord, getConcatenatedWords } from "../services/words.service.js";

export const createWordController = async (req, res) => {
  try {
    const { palabra } = req.body;
    const newWord = await createWord(palabra);
    return res.status(201).json(newWord);
  } catch (error) {
    console.error("Error en createWordController:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const getWordsController = async (req, res) => {
  try {
    const concatenated = await getConcatenatedWords();
    return res.status(200).send(concatenated);
  } catch (error) {
    console.error("Error en getWordsController:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
