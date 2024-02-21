import { Request, Response } from "express";
import { NewClothesData } from "./newClotheData.model";

export const createNewClothe = async (req: Request, res: Response) => {
  const result = await NewClothesData.create(req.body);


  res.status(200).json({
    success: true,
    message: "Thanks For Donation",
    result,
  });
};

export const getNewClothe = async (req: Request, res: Response) => {
  const result = await NewClothesData.find();
  res.status(200).json({
    success: true,
    message: "Clothe Data Retrived",
    result,
  });
};
