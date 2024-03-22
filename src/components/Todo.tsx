import { ChangeEvent, useState } from "react";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { useTodoContext } from "../context/todoContext";

export type Task = {
  id: string;
  value: string;
};

function Todo() {
  const { tasks } = useTodoContext();

  return (
    <div className="pt-10">
      <TodoForm />
      <TodoList tasks={tasks as Task[]} />
    </div>
  );
}

export { Todo };
