import { dateAction, dateReducer, DateSliceSchema } from "./DateSlice.ts";

describe("dateSlice", () => {
  it("should return the initial state", () => {
    expect(dateReducer({ selectedDate: "", today: "" }, { type: "" })).toEqual({
      today: expect.any(String),
      selectedDate: "",
    });
  });

  it("should handle setSelectedDate", () => {
    const previousState: DateSliceSchema = {
      today: new Date().toISOString(),
      selectedDate: "",
    };

    const selectedDate: string = "2024-04-15T16:42:45.838Z";
    const nextState: DateSliceSchema = dateReducer(
      previousState,
      dateAction.setSelectedDate(selectedDate),
    );
    expect(nextState.selectedDate).toBe(selectedDate);
  });
});
