import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer, userReducer } from "./Slices";

export const rootReducer = combineReducers({
  authReducer,
  userReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });
