"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewClothesData = void 0;
const mongoose_1 = require("mongoose");
const newClotheDataSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    title: String,
    image: String,
    description: String,
    category: String,
    size: [String],
}, {
    timestamps: true,
});
exports.NewClothesData = (0, mongoose_1.model)("NewClothe", newClotheDataSchema);
