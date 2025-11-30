import mongoose from "mongoose";

const { Schema, model } = mongoose;

const palabraSchema = new Schema({
  palabra: {
    type: String,
    required: true,
    trim: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

palabraSchema.virtual("id").get(function () {
  return this._id.toString();
});

palabraSchema.set("toJSON", {
  virtuals: true,
  transform: (_, ret) => {
    ret.id = ret.id;
    ret.timestamp =
      ret.timestamp instanceof Date ? ret.timestamp.getTime() : ret.timestamp;
    delete ret._id;
    delete ret.__v;
  },
});

const PalabraModel = model("Palabra", palabraSchema);

export default PalabraModel;
