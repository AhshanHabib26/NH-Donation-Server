"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const user_router_1 = __importDefault(require("./user/user.router"));
const clothes_router_1 = __importDefault(require("./clothes/clothes.router"));
const newClotheData_router_1 = __importDefault(require("./newClothesData/newClotheData.router"));
const testimonial_router_1 = __importDefault(require("./testimonial/testimonial.router"));
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Welcome To Winter Clothes Donation System Management!");
});
app.use("/api/auth", user_router_1.default);
app.use("/api/clothes", clothes_router_1.default);
app.use("/api/clothes-data", newClotheData_router_1.default);
app.use("/api/testimonial", testimonial_router_1.default);
exports.default = app;
