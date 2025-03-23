import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button.jsx";

test("renders button with correct label", () => {
    render(<Button label="Click Me"/>);
    const button = screen.getByRole("button");
});
