import { useTodoContext } from "../context/todoContext";
import { Button } from "./Button";

type TodoTaskProps = {
  value: string;
  id: string;
};

function TodoTask({ id, value }: TodoTaskProps) {
  const { handleRemoveTask } = useTodoContext();
  return (
    <li className="bg-purple-800 text-white text-xl rounded mb-2 px-4 py-2 flex justify-between items-center">
      {value}
      {/* <Button onClick={() => handleRemoveTask(id)}>Delete</Button> */}
    </li>
  );
}

export { TodoTask };
