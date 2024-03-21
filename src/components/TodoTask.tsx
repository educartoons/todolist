type TodoTaskProps = {
  value: string;
};

function TodoTask({ value }: TodoTaskProps) {
  return <li>{value}</li>;
}

export { TodoTask };
