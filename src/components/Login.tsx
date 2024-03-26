import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Input } from "./Input";
import { useUserContext } from "../hooks/useUserContext";

function Login() {
  const [user, setUser] = useState("");
  const { dispatch } = useUserContext();
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const handleClick = () => {
    dispatch({ type: "setUsername", username: user });
    navigate("/");
  };

  return (
    <div>
      <Input value={user} onChange={handleChange} />
      <div className="flex justify-center mt-2">
        <Button onClick={handleClick} variant="primary" width="full">
          Enter
        </Button>
      </div>
    </div>
  );
}

export { Login };
