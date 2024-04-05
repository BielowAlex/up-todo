import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthSliceSchema = {
  isLogin: boolean;
};

const initialState: AuthSliceSchema = {
  isLogin: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuthStatus: (state: AuthSliceSchema, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
});

const { reducer: authReducer } = authSlice;

const authActions = {};

export { authActions, authReducer };
