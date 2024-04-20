import { baseApi } from "../interceptor.ts";
import { User } from "../../types";

export const userPrivateApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query<User, void>({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMeQuery } = userPrivateApi;
