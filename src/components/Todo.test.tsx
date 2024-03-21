import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Todo } from "./Todo";

describe("<TodoList />", () => {
  test("should render", () => {
    render(<Todo />);
  });

  test("should render an input", () => {
    const input = screen.queryByRole("textbox");
    expect(input).not.toBe(null);
  });

  test("should render a button with the text 'add'", () => {
    const button = screen.queryByRole("button", { name: "add" });
    expect(button).not.toBe(null);
  });

  test("should render 0 tasks if we dont have tasks added", () => {
    const list = screen.queryByRole("listitem");
    expect(list).toBe(null);
  });

  test("should display a task when the user adds a new task", async () => {
    const input = screen.queryByRole("textbox")!;
    const button = screen.queryByRole("button", { name: "add" })!;

    await userEvent.type(input, "Buy Onions");
    await userEvent.click(button);

    const listItem = screen.queryByText("Buy Onions")!;

    expect(listItem).toBeDefined();
    expect(listItem.tagName).toBe("LI");
  });
});
