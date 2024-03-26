import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Todo } from "./components/Todo";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Profile } from "./components/Profile";

export default function App() {
  return (
    <div className="bg-black min-h-lvh">
      <div className="w-[500px] mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/" element={<Todo />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
