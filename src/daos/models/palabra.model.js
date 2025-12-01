import mongoose from "mongoose";

const { Schema, model } = mongoose;

const palabraSchema = new Schema(
  {
    palabra: {
      type: String,
      required: true,
      trim: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: (_, ret) => {
        ret.id = ret.id ?? ret._id?.toString();
        ret.timestamp =
          ret.timestamp instanceof Date
            ? ret.timestamp.getTime()
            : ret.timestamp;

        delete ret._id;
        return ret;
      },
    },
  }
);

palabraSchema.virtual("id").get(function () {
  return this._id.toString();
});

const PalabraModel = model("Palabra", palabraSchema);

export default PalabraModel;
