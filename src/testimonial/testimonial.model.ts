import { Schema, model } from "mongoose";
import { TTestimonialType } from "./testimonial.interface";

const testimonialSchema = new Schema<TTestimonialType>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    image: {
      type: String,
      required: [true, "Image link is required"],
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

export const Testimonial = model<TTestimonialType>(
  "Testimonial",
  testimonialSchema
);
