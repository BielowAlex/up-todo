import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types";

export type UserSliceSchema = {
  user: User;
};

const clearUser: User = {
  email: "",
  firstName: "",
  _id: "",
  avatar: "",
  lastName: "",
  username: "",
  password: "",
  __v: 0,
  createdAt: "",
  updatedAt: "",
};

const initialState: UserSliceSchema = {
  user: clearUser,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state: UserSliceSchema, action: PayloadAction<User>) => {
      state.user = action.payload;
      console.log(action.payload);
      console.log(state.user);
    },
    clearData: (state: UserSliceSchema) => {
      state.user = clearUser;
    },
  },
});
const {
  reducer: userReducer,
  actions: { setUser, clearData },
} = userSlice;

const userActions = {
  setUser,
  clearData,
};

export { userActions, userReducer };
