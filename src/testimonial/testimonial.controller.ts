import { Request, Response } from "express";
import { Testimonial } from "./testimonial.model";

const createTestimonial = async (req: Request, res: Response) => {
  const result = await Testimonial.create(req.body);

  res.status(201).json({
    success: true,
    message: "Testimonial created successfully!",
    data: result,
  });
};

const getAllTestimonial = async (req: Request, res: Response) => {
  const result = await Testimonial.find({ isDeleted: { $ne: true } }).sort({
    createdAt: -1,
  });
  res.status(201).json({
    success: true,
    message: "All Testimonial retrive successfully!",
    data: result,
  });
};

export const testimonialController = {
  createTestimonial,
  getAllTestimonial,
};
