"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const testimonial_controller_1 = require("./testimonial.controller");
const router = express_1.default.Router();
router.post("/", testimonial_controller_1.testimonialController.createTestimonial);
router.get("/", testimonial_controller_1.testimonialController.getAllTestimonial);
exports.default = router;
