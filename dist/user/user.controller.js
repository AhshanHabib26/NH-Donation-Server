"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_model_1 = require("./user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt = require("jsonwebtoken");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const isUserExists = yield user_model_1.User.findOne({ email });
    if (isUserExists) {
        return res.status(400).json({
            sucess: false,
            message: "User Already Exists",
        });
    }
    const user = yield user_model_1.User.create({ name, email, password });
    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: null,
    });
});
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield user_model_1.User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            message: "Invalid email or password",
        });
    }
    const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
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
});
exports.userController = {
    createUser,
    loginUser,
};
