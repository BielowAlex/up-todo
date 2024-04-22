import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const BASE_URL: string = import.meta.env.VITE_BACK_URL;

export const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}`,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    headers.set("Access-Control-Allow-Credentials", "true");
    return headers;
  },
  credentials: "include", // Встановлення cookies для всіх запитів,
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  any,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error && result?.error?.status === 401) {
    try {
      const response = await fetch(`${BASE_URL}/auth/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        result = await baseQuery(args, api, extraOptions);
      } else {
        console.error("Failed to refresh token");
      }
    } catch (error) {
      console.error(error);
    }
  }
  return result;
};

export const reauthApi = createApi({
  reducerPath: "reauthApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Task"],
  endpoints: () => ({}),
});
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["Task"],

  endpoints: () => ({}),
});
