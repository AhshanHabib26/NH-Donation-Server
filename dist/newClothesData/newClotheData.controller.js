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
exports.getNewClothe = exports.createNewClothe = void 0;
const newClotheData_model_1 = require("./newClotheData.model");
const createNewClothe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield newClotheData_model_1.NewClothesData.create(req.body);
    res.status(200).json({
        success: true,
        message: "Thanks For Donation",
        result,
    });
});
exports.createNewClothe = createNewClothe;
const getNewClothe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield newClotheData_model_1.NewClothesData.find();
    res.status(200).json({
        success: true,
        message: "Clothe Data Retrived",
        result,
    });
});
exports.getNewClothe = getNewClothe;
