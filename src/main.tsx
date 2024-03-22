import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TodoContextProvider } from "./context/todoContext.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>
);
