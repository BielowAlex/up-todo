import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskStatusEnum } from "../../../types";

export type TaskSliceSchema = {
  selectedTaskType: TaskStatusEnum;
  selectedDate: string;
  isCreateTaskModalOpen: boolean;
};

const initialState: TaskSliceSchema = {
  selectedTaskType: TaskStatusEnum.InProgress,
  selectedDate: "",
  isCreateTaskModalOpen: false,
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    setIsCreateTaskModalOpen: (
      state: TaskSliceSchema,
      action: PayloadAction<boolean>,
    ) => {
      state.isCreateTaskModalOpen = action.payload;
    },

    setListType: (
      state: TaskSliceSchema,
      action: PayloadAction<TaskStatusEnum>,
    ) => {
      state.selectedTaskType = action.payload;
    },
  },
});

const {
  reducer: taskReducer,
  actions: { setListType, setIsCreateTaskModalOpen },
} = taskSlice;

const TaskAction = {
  setListType,
  setIsCreateTaskModalOpen,
};

export { TaskAction, taskReducer };
