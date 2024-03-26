import { useNavigate } from "react-router-dom";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { useTodoContext } from "../context/todoContext";
import { useUserContext } from "../hooks/useUserContext";

export type Task = {
  id: string;
  value: string;
};

function Todo() {
  const { tasks } = useTodoContext();
  const { state: user } = useUserContext();
  const navigate = useNavigate();

  return (
    <div className="pt-10">
      <h2 className="text-white" onClick={() => navigate("/profile")}>
        {user.username}
      </h2>
      <TodoForm />
      <TodoList tasks={tasks as Task[]} />
    </div>
  );
}

export { Todo };
