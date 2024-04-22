import { reauthApi } from "../interceptor.ts";
import { ProgressResponse, Task, TaskStatusEnum } from "../../types";
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
      invalidatesTags: ["Task"],
    }),
    getProgress: builder.query<ProgressResponse, string>({
      query: (date) => ({
        url: "/task/progress",
        method: "GET",
        params: { date },
      }),
      providesTags: ["Task"],
    }),
    deleteTask: builder.mutation<any, string>({
      query: (id) => ({
        url: `/task/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useGetUserTaskQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
  useGetProgressQuery,
} = TaskPrivateApi;
