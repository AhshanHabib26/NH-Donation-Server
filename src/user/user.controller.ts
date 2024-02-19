import { Request, Response } from "express";
import { userService } from "./user.services";

const createUser = async (req: Request, res: Response) => {
  const user = await userService.createUserService(req.body);

  res.status(201).json({
    success: true,
    message: "User Cretaed Successfully",
    data: user,
  });
};

export const userController = {
  createUser,
};
