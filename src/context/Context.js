import { useState, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    args: [
      {
        name: "My Args",
        value: "true",
      },
    ],
    ops: [
      {
        type: "",
        value: { name: "", value: "" },
        viewSelectOPS: "true",
        viewOPS: "true",
      },
    ],
    calc: {
      type: "",
      arg1: "",
      arg2: "",
    },
    result: "",
  });

  console.log(state);

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
