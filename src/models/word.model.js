import mongoose from "mongoose";

const wordSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    palabra: { type: String, required: true },
    timestamp: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const WordModel = mongoose.model("Word", wordSchema);

export default WordModel;
