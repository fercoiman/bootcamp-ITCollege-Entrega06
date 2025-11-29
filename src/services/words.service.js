import { v4 as uuid } from "uuid";
import { createWordDao, getAllWordsDao } from "../dao/words.dao.js";

export const createWord = async (palabra) => {
  const wordData = {
    id: uuid(),
    palabra,
    timestamp: Date.now(),
  };

  const newWord = await createWordDao(wordData);
  return newWord;
};

export const getConcatenatedWords = async () => {
  const words = await getAllWordsDao();
  const concatenated = words.map((w) => w.palabra).join(" ");
  return concatenated;
};
