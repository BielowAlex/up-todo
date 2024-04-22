import { reauthApi } from "../interceptor.ts";
import { Task, TaskStatusEnum } from "../../types";
import { CreateTaskDate } from "../../components/CreateTaskForm";

export const TaskPrivateApi = reauthApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserTask: builder.query<
      Task[],
      { status: TaskStatusEnum; date: string }
    >({
      query: (params) => ({
        url: "/task/me",
        method: "GET",
        params,
      }),
      keepUnusedDataFor: 0,
      providesTags: ["Task"],
    }),
    createTask: builder.mutation<Task, CreateTaskDate>({
      query: (body) => ({
        url: "/task",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Task"],
    }),
    updateTask: builder.mutation<
      Task,
      Pick<Task, "_id" | "title" | "status" | "description" | "date">
    >({
      query: ({ _id, ...rest }) => ({
        url: `/task/${_id}`,
        method: "PATCH",
        body: rest,
      }),
      // invalidatesTags: ["Task"],
    }),
    deleteTask: builder.mutation<any, string>({
      query: (id) => ({
        url: `/task/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUserTaskQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = TaskPrivateApi;
