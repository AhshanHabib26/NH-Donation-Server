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

const getAllClothes = async (req: Request, res: Response) => {
  const result = await Clothe.find({ isDeleted: { $ne: true } });
  res.status(201).json({
    success: true,
    message: "All Clothes retrive successfully!",
    data: result,
  });
};

const getSingleClothe = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await Clothe.findOne({ _id: id, isDeleted: { $ne: true } });

  if (!result) {
    return res.status(404).json({
      success: false,
      message: "Clothe not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Single Clothe retrive successfully!",
    data: result,
  });
};

export const clotheController = {
  createClothe,
  getAllClothes,
  getSingleClothe,
};
