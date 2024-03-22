import { ChangeEvent } from "react";
import { Button } from "./Button";

type TodoFormProps = {
  task: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleAdd: () => void;
};

function TodoForm({ task, handleAdd, handleChange }: TodoFormProps) {
  return (
    <div className="relative">
      <input
        className="w-full bg-zinc-800 rounded py-5 px-4 text-white text-xl"
        onChange={handleChange}
        value={task}
        type="text"
      />
      <div className="absolute top-0 right-0 pt-3 pr-3">
        <Button variant="primary" onClick={handleAdd}>
          Add
        </Button>
      </div>
    </div>
  );
}

export { TodoForm };
