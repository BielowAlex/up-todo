import { baseApi } from "../interceptor.ts";
import { ApiError, User } from "../../types";

interface SignInCredentials {
  email: string;
  password: string;
}

export const authPrivateApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<User, SignInCredentials>({
      query: (body) => ({
        url: "/auth/sign-in",
        method: "POST",
        body,
      }),
      providesError: (error: ApiError) => [
        { type: "ApiError", id: error.status },
      ],
    }),
  }),
});

export const { useSignInMutation } = authPrivateApi;
