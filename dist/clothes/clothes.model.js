"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clothe = void 0;
const mongoose_1 = require("mongoose");
const clothesSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    image: {
        type: String,
        required: [true, "Image link is required"],
    },
    category: {
        type: String,
        required: [true, "Title is required"],
    },
    size: {
        type: [String],
        required: [true, "Size is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
exports.Clothe = (0, mongoose_1.model)("Clothe", clothesSchema);
