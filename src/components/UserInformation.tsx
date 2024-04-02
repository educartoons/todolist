import { useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";
import { Button } from "./Button";

export default function UserInformation() {
  const { state: user } = useUserContext();
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-white text-base mb-3">{user.username}</h2>
      <p className="text-white text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, recusandae
        ipsum. Quidem, optio deleniti cum ipsam praesentium corporis laborum
        omnis est provident deserunt ex nesciunt illo voluptates ipsum illum
        quis!
      </p>
      <Button onClick={() => navigate("/")}>Back to Home</Button>
    </div>
  );
}
