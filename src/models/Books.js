import { Schema, model } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    categories: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Book", bookSchema);
