import { Schema, model } from "mongoose";
import { TNewClotheType } from "./newClotheData.interface";

const newClotheDataSchema = new Schema<TNewClotheType>(
  {
    name: String,
    email: String,
    title: String,
    image: String,
    description: String,
    category: String,
    size: [String],
  },
  {
    timestamps: true,
  }
);

export const NewClothesData = model<TNewClotheType>(
  "NewClothe",
  newClotheDataSchema
);
