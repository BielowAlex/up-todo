import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TaskSliceSchema = {
  selectedTaskType: "tasks" | "archive" | "done";
  selectedDate: string;
};

const initialState: TaskSliceSchema = {
  selectedTaskType: "tasks",
  selectedDate: "",
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    setListType: (
      state: TaskSliceSchema,
      action: PayloadAction<"tasks" | "archive" | "done">,
    ) => {
      state.selectedTaskType = action.payload;
    },
  },
});

const {
  reducer: taskReducer,
  actions: { setListType },
} = taskSlice;

const TaskAction = {
  setListType,
};

export { TaskAction, taskReducer };
