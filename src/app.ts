import express from "express";
const app = express();
import cors from "cors";
import userHandler from "./user/user.router";
import clotheHandler from "./clothes/clothes.router";
import clothesDataHandler from "./newClothesData/newClotheData.router";

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome To Winter Clothes Donation System Management!");
});

app.use("/api/auth", userHandler);
app.use("/api/clothes", clotheHandler);
app.use("/api/clothes-data", clothesDataHandler);


export default app;
