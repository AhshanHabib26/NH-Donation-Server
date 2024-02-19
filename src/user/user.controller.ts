import { Request, Response } from "express";
import { User } from "./user.model";
import bcrypt from "bcrypt";
const jwt = require("jsonwebtoken");

const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const isUserExists = await User.findOne({ email });

  if (isUserExists) {
    return res.status(400).json({
      sucess: false,
      message: "User Already Exists",
    });
  }

  const user = await User.create({ name, email, password });

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: null,
  });
};

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  const jwtPayload = {
    name: user.name,
    email: user.email,
  };

  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.status(200).json({
    success: true,
    message: "User login successful",
    token,
  });
};

export const userController = {
  createUser,
  loginUser,
};
