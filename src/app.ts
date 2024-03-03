import express from "express";
const app = express();
import cors from "cors";
import userHandler from "./user/user.router";
import clotheHandler from "./clothes/clothes.router";
import clothesDataHandler from "./newClothesData/newClotheData.router";
import testimonialHandler from "./testimonial/testimonial.router";

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome To Winter Clothes Donation System Management!");
});

app.use("/api/auth", userHandler);
app.use("/api/clothes", clotheHandler);
app.use("/api/clothes-data", clothesDataHandler);
app.use("/api/testimonial", testimonialHandler);

export default app;
