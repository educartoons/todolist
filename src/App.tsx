import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound404 } from "./components/NotFound404";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <div className="bg-black min-h-lvh">
      <div className="w-[500px] mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
