import React from "react";
import { render, screen } from "@testing-library/react";
import { Nav } from "./index";
describe("Nav Component", () => {
  it("it should exist", () => {
    render(<Nav />);
    expect(screen.getByTestId("Nav-wrapper")).toBeInTheDocument();
  });
  it("fetches data and displays values in a table", () => {
    render(<Nav />);
    expect(screen.getByTestId("data-table")).toBeInTheDocument();
  });
});
