import { vi } from "vitest";
import { appRender } from "../../test/customRender.tsx";
import React from "react";
import { DateSection } from "./DateSection.tsx";
import { screen } from "@testing-library/react";

vi.mock("../../utils/date/convert-title-date.util", () => ({
  formatDate: (date: Date) => date.toISOString().split("T")[0], // Mock implementation
}));

vi.mock("../WeekCalendar", () => ({
  WeekCalendar: () => <div>WeekCalendar Mock</div>, // Mock component
}));

describe("DateSection", () => {
  it("renders without crashing", () => {
    appRender(<DateSection />);
    expect(screen.getByText(/WeekCalendar Mock/)).toBeInTheDocument();
  });
});
