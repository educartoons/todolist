import { createContext, useReducer } from "react";

type State = {
  username: string;
  fullname: string;
};

type Action =
  | {
      type: "setUsername";
      username: string;
    }
  | {
      type: "setFullname";
      fullname: string;
    };

type Dispatch = (action: Action) => void;

type UserContextProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  username: "",
  fullname: "",
};

const UserContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function userReducer(state: State, action: Action) {
  switch (action.type) {
    case "setUsername": {
      return {
        ...state,
        username: action.username,
      };
    }
    case "setFullname": {
      return {
        ...state,
        fullname: action.fullname,
      };
    }
    default:
      return state;
  }
}

function UserContextProvider({ children }: UserContextProviderProps) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContextProvider, UserContext };
