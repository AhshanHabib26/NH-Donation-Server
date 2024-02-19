import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  try {
    await mongoose.connect(process.env.DB_URL as string);
    app.listen(process.env.PORT, () => {
      console.log(
        `Winter Clothes Donation System is listening port ${process.env.PORT}`
      );
    });
  } catch (error) {
    console.log(error);
  }
}

main();
