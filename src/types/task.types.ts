import { User } from "./user.types.ts";

export enum TaskStatusEnum {
  InProgress = "IN_PROGRESS",
  Completed = "COMPLETED",
  Archived = "ARCHIVED",
}

export type Task = {
  _id: string;
  title: string;
  description: string;
  date: string;
  createdAt: string;
  status: TaskStatusEnum;
  user?: User;
};
