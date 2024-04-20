import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DateSliceSchema = {
  today: string;
  selectedDate: string;
};

const initialState: DateSliceSchema = {
  today: new Date().toISOString(),
  selectedDate: "",
};

const dateSlice = createSlice({
  name: "dateSlice",
  initialState,
  reducers: {
    setSelectedDate: (
      state: DateSliceSchema,
      action: PayloadAction<string>,
    ) => {
      state.selectedDate = action.payload;
    },
  },
});

const {
  reducer: dateReducer,
  actions: { setSelectedDate },
} = dateSlice;

const dateAction = {
  setSelectedDate,
};

export { dateAction, dateReducer };
