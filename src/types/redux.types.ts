import { rootReducer, store } from "../store";

const setupStore = () => store;

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore["dispatch"];

export type { RootState, AppStore, AppDispatch };

export type ApiError = {
  status: number;
  data: {
    error: ApiErrorData;
  };
};

export type ApiErrorDetails = {
  message: string;
  error: string;
  statusCode: number;
};

export type ApiErrorData = {
  statusCode: number;
  message: string;
  errorName: string;
  details: ApiErrorDetails;
  path: string;
  requestId: string;
  timestamp: string;
};
