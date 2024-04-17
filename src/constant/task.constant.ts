import { v4 } from "uuid";
import { TaskStatusEnum } from "../types";

export const taskConstant = [
  {
    id: v4(),
    title: "Task Title",
    description: "Create a responsive homepage design with a new color scheme",
    status: TaskStatusEnum.NotStarted,
  },
  {
    id: v4(),
    title: "Design Homepage Layout",
    description: "Create a responsive homepage design with a new color scheme",
    status: TaskStatusEnum.NotStarted,
  },
  {
    id: v4(),
    title: "Implement Login System",
    description: "Develop a secure login system with email and password",
    status: TaskStatusEnum.InProgress,
  },
  {
    id: v4(),
    title: "Database Migration",
    description: "Migrate the old user data to the new schema",
    status: TaskStatusEnum.Completed,
  },
];
