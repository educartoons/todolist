import { ChangeEvent, Children, useState } from "react";
import { TodoItem } from "./TodoItem";

export type Task = {
  id: string;
  name: string;
};

type TodoListProps = {
  tasks: Task[];
  handleAddTask: (str: string) => void;
  handleRemoveTaskByIndex: (idx: number) => void;
};

function TodoList({
  tasks,
  handleAddTask,
  handleRemoveTaskByIndex,
}: TodoListProps) {
  const [newTask, setNewTask] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };
  return (
    <div className="px-4 py-4">
      <h2>Todo:</h2>
      <div>
        <input
          className="border border-zinc-500 inline-block mr-2"
          data-testid="input"
          type="text"
          onChange={handleChange}
          value={newTask}
        />
        <button
          onClick={() => handleAddTask(newTask)}
          className="bg-slate-800 text-white py-2 px-4 rounded"
        >
          Add
        </button>
      </div>

      <ul>
        {Children.toArray(
          tasks.map((task, index) => (
            <TodoItem
              index={index}
              task={task}
              handleRemoveTaskByIndex={handleRemoveTaskByIndex}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export { TodoList };
