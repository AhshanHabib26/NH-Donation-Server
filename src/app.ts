import express from "express";
const app = express();
import cors from "cors";

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome To Winter Clothes Donation System Management!");
});

export default app;
