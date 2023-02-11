import React from "react";
import { render, screen } from "@testing-library/react";
import { ChartLine } from "./index";
describe("ChartLine Component", () => {
  it("it should exist", () => {
    render(<ChartLine values={{ client: 1, clinician: 2 }} label={"hello"} />);
    expect(screen.getByTestId("ChartLine-wrapper")).toBeInTheDocument();
  });
});
