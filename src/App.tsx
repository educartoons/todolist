import { useState } from "react";
import { Task, TodoList } from "./components/TodoList/TodoList";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (newTask: string) => {
    setTasks([...tasks, { name: newTask, id: crypto.randomUUID() }]);
  };

  const handleRemoveTaskByIndex = (idx: number) => {
    setTasks(tasks.filter((_, index) => index !== idx));
  };

  return (
    <div>
      <TodoList
        tasks={tasks}
        handleAddTask={handleAddTask}
        handleRemoveTaskByIndex={handleRemoveTaskByIndex}
      />
    </div>
  );
}

export default App;
