import express from "express";
const app = express();
import cors from "cors";
import userHandler from "./user/user.router";

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome To Winter Clothes Donation System Management!");
});

app.use("/api/auth", userHandler);

export default app;
