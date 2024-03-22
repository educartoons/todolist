type TodoTaskProps = {
  value: string;
};

function TodoTask({ value }: TodoTaskProps) {
  return <li className="text-white text-xl">{value}</li>;
}

export { TodoTask };
