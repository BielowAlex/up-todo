import { User } from "./user.types.ts";

export enum TaskStatusEnum {
  InProgress = "IN_PROGRESS",
  Completed = "COMPLETED",
  Archived = "ARCHIVED",
}

export type Task = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  status: TaskStatusEnum;
  user?: User;
};
