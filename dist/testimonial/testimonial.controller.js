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
exports.testimonialController = void 0;
const testimonial_model_1 = require("./testimonial.model");
const createTestimonial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonial_model_1.Testimonial.create(req.body);
    res.status(201).json({
        success: true,
        message: "Testimonial created successfully!",
        data: result,
    });
});
const getAllTestimonial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonial_model_1.Testimonial.find({ isDeleted: { $ne: true } }).sort({
        createdAt: -1,
    });
    res.status(201).json({
        success: true,
        message: "All Testimonial retrive successfully!",
        data: result,
    });
});
exports.testimonialController = {
    createTestimonial,
    getAllTestimonial,
};
