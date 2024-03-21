import { ChangeEvent } from "react";

type TodoFormProps = {
  task: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleAdd: () => void;
};

function TodoForm({ task, handleAdd, handleChange }: TodoFormProps) {
  return (
    <div>
      <input onChange={handleChange} value={task} type="text" />
      <button onClick={handleAdd}>add</button>
    </div>
  );
}

export { TodoForm };
