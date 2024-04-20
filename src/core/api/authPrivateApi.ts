import { baseApi } from "../interceptor.ts";
import { LoginDate, RegisterDate, User } from "../../types";

// const providesError = (error: ApiError) => [
//   { type: "ApiError", id: error.status },
// ];

export const authPrivateApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<User, LoginDate>({
      query: (body) => ({
        url: "/auth/sign-in",
        method: "POST",
        body,
      }),
    }),
    signUp: builder.mutation<User, RegisterDate>({
      query: (body) => ({
        url: "/auth/sign-up",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authPrivateApi;
