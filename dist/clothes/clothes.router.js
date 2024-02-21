"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clothes_controller_1 = require("./clothes.controller");
const router = express_1.default.Router();
router.post("/", clothes_controller_1.clotheController.createClothe);
router.get("/", clothes_controller_1.clotheController.getAllClothes);
router.get("/:id", clothes_controller_1.clotheController.getSingleClothe);
router.put("/:id", clothes_controller_1.clotheController.updateClothe);
router.delete("/:id", clothes_controller_1.clotheController.deleteClothe);
exports.default = router;
