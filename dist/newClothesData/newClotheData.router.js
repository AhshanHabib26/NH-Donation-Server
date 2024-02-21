"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const newClotheData_controller_1 = require("./newClotheData.controller");
const router = express_1.default.Router();
router.post("/", newClotheData_controller_1.createNewClothe);
router.get("/", newClotheData_controller_1.getNewClothe);
exports.default = router;
