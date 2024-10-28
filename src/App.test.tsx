import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";
import "@testing-library/jest-dom";

describe("renders Electron Notes App title", () => {
  it("App rendered correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText("Electron Notes App")).toBeInTheDocument();
  });
});
