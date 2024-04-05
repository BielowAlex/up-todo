import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthSliceSchema = {
  isLogin: boolean;
};

const getToken = localStorage.getItem("token");

const initialState: AuthSliceSchema = {
  isLogin: !!getToken,
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

const {
  reducer: authReducer,
  actions: { setAuthStatus },
} = authSlice;

const authActions = {
  setAuthStatus,
};

export { authActions, authReducer };
