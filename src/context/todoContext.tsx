import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext();

type TodoContextProviderProps = {
  children: React.ReactNode;
};

function TodoContextProvider({ children }: TodoContextProviderProps) {
  const [tasks, setTasks] = useLocalStorage("todo", []);

  const handleAddTask = (value: string) => {
    const newTask = {
      id: crypto.randomUUID(),
      value: value,
    };
    setTasks([...(tasks as Task[]), newTask]);
  };

  const handleRemoveTask = (id: string) => {
    const newTasks = tasks.filter((item: Task) => item.id !== id);
    setTasks([...newTasks]);
  };

  return (
    <TodoContext.Provider
      value={{
        tasks: tasks,
        setTasks: setTasks,
        handleRemoveTask: handleRemoveTask,
        handleAddTask: handleAddTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

function useTodoContext() {
  const value = useContext(TodoContext);
  return value;
}

export { TodoContextProvider, useTodoContext };
