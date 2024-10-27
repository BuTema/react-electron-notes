import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

describe("renders Electron Notes App title", () => {
  it("App rendered correctly", () => {
    expect(screen.getByText("Electron Notes App")).toBeInTheDocument();
  });
});
