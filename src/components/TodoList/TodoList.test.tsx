import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { TodoList } from "./TodoList";

describe("TodoList", () => {
  it("should render without issues", () => {
    render(<TodoList tasks={[]} />);
  });

  it("should render an input to add tasks", () => {
    const input = screen.getAllByTestId("input");
    expect(input).toBeDefined();
  });

  it("should render a button with the text Add to add tasks", () => {
    const button = screen.getByRole("button", {
      name: "Add",
    });
    expect(button).toBeDefined();
  });

  it("should display a message: 'Empty List' if there is no tasks saved", () => {
    const message = screen.getByText("Empty List");
    expect(message).toBeDefined;
  });
});
