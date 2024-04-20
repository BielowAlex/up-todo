import { User } from "../types";
import { v4 } from "uuid";

export const hardcodeUser: User = {
  _id: v4(),
  email: "test@gmail.com",
  firstName: "John",
  avatar:
    "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png",
  lastName: "Dou",
  username: "Noname",
  __v: 0,
  createdAt: Date.now().toString(),
  updatedAt: Date.now().toString(),
  password: "",
};

export const noAvatarUrl: string =
  "https://lh6.googleusercontent.com/proxy/Y6SwCoxLrC_a3oceaR4g5gEh0fB3I1-FQz1NQiom9CDh39Dgo_ItnUKiK6Vahe8eZrY3dteV6ve44SOK1UpZDTZfk6ayM5qN4g5OCThC";
