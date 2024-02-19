import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserService = async (data: TUser) => {
  const result = await User.create(data);
  return result;
};

export const userService = {
  createUserService,
};
