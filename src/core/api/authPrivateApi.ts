import { baseApi } from "../interceptor.ts";
import { LoginDate, RegisterDate, User } from "../../types";

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
    signOut: builder.mutation<any, void>({
      query: (body) => ({
        url: "/auth/sign-out",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useSignOutMutation } =
  authPrivateApi;
