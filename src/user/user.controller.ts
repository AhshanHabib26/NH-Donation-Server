import { Request, Response } from "express";
import { User } from "./user.model";

const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const isUserExists = await User.findOne({ email });

  if (isUserExists) {
    return res.status(401).json({
      sucess: false,
      message: "User Already Exists",
    });
  }

  const user = await User.create({ name, email, password });

  res.status(201).json({
    success: true,
    message: "User Created Successfully",
    data: null,
  });
};

export const userController = {
  createUser,
};
