import { TodoTask } from "./TodoTask";
import { Task } from "./Todo";

type TodoListProps = {
  tasks: Task[];
};

function TodoList({ tasks }: TodoListProps) {
  console.count("Rendering");
  return (
    <ul className="mt-4">
      {tasks.map((task) => (
        <TodoTask key={task.id} value={task.value} id={task.id} />
      ))}
    </ul>
  );
}

export { TodoList };
