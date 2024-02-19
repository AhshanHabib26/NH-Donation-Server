import express from "express";
import { clotheController } from "./clothes.controller";
const router = express.Router();

router.post("/", clotheController.createClothe);
router.get("/", clotheController.getAllClothes);
router.get("/:id", clotheController.getSingleClothe);

export default router;
