import express from "express";
import { clotheController } from "./clothes.controller";
const router = express.Router();

router.post("/", clotheController.createClothe);

export default router;
