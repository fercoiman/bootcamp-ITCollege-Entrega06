import { PERSISTENCE } from "../config/config.js";

import { createWordMongo, getAllWordsMongo } from "./words.mongo.dao.js";
import { saveWordFs, getAllWordsFs } from "./words.fs.dao.js";

export const createWordDao = async (wordData) => {
  if (PERSISTENCE === "MONGO") {
    return await createWordMongo(wordData);
  }

  // FS por defecto
  await saveWordFs(wordData);
  return wordData;
};

export const getAllWordsDao = async () => {
  if (PERSISTENCE === "MONGO") {
    return await getAllWordsMongo();
  }

  return await getAllWordsFs();
};
