import { Schema, model } from "mongoose";
import { TClothesType } from "./clothes.interface";

const clothesSchema = new Schema<TClothesType>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    image: {
      type: String,
      required: [true, "Image link is required"],
    },
    category: {
      type: String,
      required: [true, "Title is required"],
    },
    size: {
      type: [String],
      required: [true, "Size is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Clothe = model<TClothesType>("Clothe", clothesSchema);
