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
Object.defineProperty(exports, "__esModule", { value: true });
exports.clotheController = void 0;
const clothes_model_1 = require("./clothes.model");
const createClothe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield clothes_model_1.Clothe.create(req.body);
    res.status(201).json({
        success: true,
        message: "Clothe created successfully!",
        data: result,
    });
});
const getAllClothes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield clothes_model_1.Clothe.find({ isDeleted: { $ne: true } }).sort({ createdAt: -1 });
    res.status(201).json({
        success: true,
        message: "All Clothes retrive successfully!",
        data: result,
    });
});
const getSingleClothe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield clothes_model_1.Clothe.findOne({ _id: id, isDeleted: { $ne: true } });
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
});
const updateClothe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { id } = req.params;
    const result = yield clothes_model_1.Clothe.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
    });
    res.status(200).json({
        success: true,
        message: "Clothe updated successfully!",
        data: result,
    });
});
const deleteClothe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield clothes_model_1.Clothe.findByIdAndUpdate({ _id: id }, { isDeleted: true }, { new: true });
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
});
exports.clotheController = {
    createClothe,
    getAllClothes,
    getSingleClothe,
    updateClothe,
    deleteClothe,
};
