import { useContext } from "react";
import { UserContext } from "../context/userContext";

function useUserContext() {
  const value = useContext(UserContext);
  if (value === undefined) {
    throw new Error(
      "useUserContext needs to be wrapped by UserContextProvider"
    );
  }
  return value;
}

export { useUserContext };
