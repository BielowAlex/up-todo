import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthSliceSchema = {
  isLogin: boolean;
  accessToken: string;
};

const getToken = localStorage.getItem("token");

const initialState: AuthSliceSchema = {
  isLogin: !!getToken,
  accessToken: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuthStatus: (state: AuthSliceSchema, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setToken: (state: AuthSliceSchema, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    logout: (state: AuthSliceSchema) => {
      state.accessToken = "";
      state.isLogin = false;
      localStorage.removeItem("token");
    },
  },
});

const {
  reducer: authReducer,
  actions: { setAuthStatus, logout, setToken },
} = authSlice;

const authActions = {
  setAuthStatus,
  setToken,
  logout,
};

export { authActions, authReducer };
