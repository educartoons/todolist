import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";

function ProtectedRoute() {
  const { state: user } = useUserContext();
  if (user.username === "") {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}

export { ProtectedRoute };
