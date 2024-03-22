import { ChangeEvent, useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { useTodoContext } from "../context/todoContext";

function TodoForm() {
  const [task, setTask] = useState("");
  const { handleAddTask } = useTodoContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  return (
    <div className="relative">
      <Input onChange={handleChange} value={task} type="text" />
      <div className="absolute top-0 right-0 pt-3 pr-3">
        <Button variant="primary" onClick={() => handleAddTask(task)}>
          Add
        </Button>
      </div>
    </div>
  );
}

export { TodoForm };
