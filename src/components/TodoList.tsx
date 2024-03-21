import { TodoTask } from "./TodoTask";
import { Task } from "./Todo";

type TodoListProps = {
  tasks: Task[];
};

function TodoList({ tasks }: TodoListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoTask key={task.id} value={task.value} />
      ))}
    </ul>
  );
}

export { TodoList };
