import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types";

export type UserSliceSchema = {
  user: User;
};

const clearUser: User = {
  email: "",
  firstName: "",
  id: "",
  avatar: "",
  lastName: "",
  username: "",
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
    },
    clearDate: (state: UserSliceSchema) => {
      state.user = clearUser;
    },
  },
});
const {
  reducer: userReducer,
  actions: { setUser, clearDate },
} = userSlice;

const userActions = {
  setUser,
  clearDate,
};

export { userActions, userReducer };
