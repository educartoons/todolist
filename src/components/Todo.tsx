import { ChangeEvent, useEffect, useState } from "react";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type Task = {
  id: string;
  value: string;
};

function Todo() {
  const [tasks, setTasks] = useLocalStorage("todo", [] as Task[]);
  const [task, setTask] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleAdd = () => {
    const newTask = {
      id: crypto.randomUUID(),
      value: task,
    };
    setTasks([...(tasks as Task[]), newTask]);
  };

  return (
    <h2>
      <TodoForm task={task} handleAdd={handleAdd} handleChange={handleChange} />
      <TodoList tasks={tasks as Task[]} />
    </h2>
  );
}

export { Todo };
