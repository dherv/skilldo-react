import React from "react";
import { render, screen } from "@testing-library/react";
import TodoTimerStart from "./TodoTimerStart";

const props = {
  startDate: new Date(2020, 5, 1),
};

test("should display the date", () => {
  render(<TodoTimerStart {...props} />);
  expect(screen.getByText("Jun 1")).toBeInTheDocument();
});
