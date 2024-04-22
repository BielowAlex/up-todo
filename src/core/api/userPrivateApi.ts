import { reauthApi } from "../interceptor.ts";
import { UpdatePasswordBody, User } from "../../types";

export const userPrivateApi = reauthApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query<User, void>({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    updateMe: builder.mutation<
      User,
      Partial<Pick<User, "firstName" | "lastName" | "password">>
    >({
      query: (body) => ({
        url: "/user/me",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    updatePassword: builder.mutation<User, UpdatePasswordBody>({
      query: (body) => ({
        url: "/user/password",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetMeQuery, useUpdateMeMutation, useUpdatePasswordMutation } =
  userPrivateApi;
