import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt";

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: [true, "Name is Requires"],
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
});



userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(process.env.SALT_ROUND)
  );
});

export const User = model<TUser>("User", userSchema);
