import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

test("renders button with correct label", () => {
  render(<Button label="Click Me" content={1} />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
