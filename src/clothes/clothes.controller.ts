import { Request, Response } from "express";
import { Clothe } from "./clothes.model";

const createClothe = async (req: Request, res: Response) => {
  const result = await Clothe.create(req.body);

  res.status(201).json({
    success: true,
    message: "Clothe created successfully!",
    data: result,
  });
};

export const clotheController = {
  createClothe,
};
