import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

function NotFound404() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-white text-xl pt-5 mb-4">Page not found</h2>
      <Button onClick={() => navigate("/")}>Back to home</Button>
    </div>
  );
}

export { NotFound404 };
