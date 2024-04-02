import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TodoContextProvider } from "./context/todoContext.tsx";
import { UserContextProvider } from "./context/userContext.tsx";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoContextProvider>
      <UserContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </UserContextProvider>
    </TodoContextProvider>
  </React.StrictMode>
);
