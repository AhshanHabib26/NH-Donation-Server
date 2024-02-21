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
  const result = await Clothe.find({ isDeleted: { $ne: true } }).sort({createdAt: -1});
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
    message: "Single Clothe retrived successfully!",
    data: result,
  });
};
const updateClothe = async (req: Request, res: Response) => {
  const data = req.body;
  const { id } = req.params;
  const result = await Clothe.findByIdAndUpdate(id, data, {
    runValidators: true,
    new: true,
  });

  res.status(200).json({
    success: true,
    message: "Clothe updated successfully!",
    data: result,
  });
};

const deleteClothe = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await Clothe.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true }
  );

  if (!result) {
    return res.status(404).json({
      success: false,
      message: "Clothe not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Clothe deleted successfully!",
    data: null,
  });
};

export const clotheController = {
  createClothe,
  getAllClothes,
  getSingleClothe,
  updateClothe,
  deleteClothe,
};
