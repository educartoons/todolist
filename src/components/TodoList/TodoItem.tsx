import { Task } from "./TodoList";

type TodoItemProps = {
  task: Task;
  handleRemoveTaskByIndex: (idx: number) => void;
  index: number;
};

function TodoItem({ task, handleRemoveTaskByIndex, index }: TodoItemProps) {
  return (
    <li key={task.id} className="mb-2">
      {task.name}
      <button
        className="bg-green-500 rounded px-1 py-1"
        onClick={() => handleRemoveTaskByIndex(index)}
      >
        Remover
      </button>
    </li>
  );
}

export { TodoItem };
