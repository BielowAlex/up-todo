import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Slices";

export const rootReducer = combineReducers({
  authReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });
