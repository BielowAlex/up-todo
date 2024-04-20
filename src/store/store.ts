import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer, dateReducer, taskReducer, userReducer } from "./Slices";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist/es/constants";
import { baseApi, reauthApi } from "../core";

export const rootReducer = combineReducers({
  authReducer,
  userReducer,
  dateReducer,
  taskReducer,
  [reauthApi.reducerPath]: reauthApi.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(reauthApi.middleware, baseApi.middleware),
});

export const persistor = persistStore(store);
