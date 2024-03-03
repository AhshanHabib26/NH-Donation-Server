import express from "express";
import { testimonialController } from "./testimonial.controller";
const router = express.Router();

router.post("/", testimonialController.createTestimonial);
router.get("/", testimonialController.getAllTestimonial);

export default router;
