import WordModel from "../models/word.model.js";

export const createWordMongo = async (wordData) => {
  const doc = await WordModel.create(wordData);
  return doc.toObject();
};

export const getAllWordsMongo = async () => {
  const docs = await WordModel.find().lean();
  return docs;
};
