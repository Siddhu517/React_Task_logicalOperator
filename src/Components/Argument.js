import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/Context";

const Argument = ({ arg, argKey }) => {
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    let result;
    if (state.calc.type === "and") {
      result = Boolean(state.calc.arg1) && Boolean(state.calc.arg2);
    } else if (state.calc.type === "or") {
      result = Boolean(state.calc.arg1) || Boolean(state.calc.arg2);
    }
    setState({ ...state, result: String(result) });
    console.log(result);
  }, []);

  const handleEditArgument = (index, newName, newValue) => {
    const updatedArgs = [...state.args];
    updatedArgs[index].name = newName;
    updatedArgs[index].value = newValue;
    setState({ ...state, args: updatedArgs });
  };

  return (
    <div>
      <input
        type="text"
        className="h-[35px] mt-3 p-2 rounded-md border-2 border-black"
        value={arg.name}
        onChange={(e) => {
          handleEditArgument(argKey, e.target.value, arg.value);
        }}
      />
      <select
        value={arg.value}
        onChange={(e) => handleEditArgument(argKey, arg.name, e.target.value)}
        className="border-black rounded-md border-2 h-[35px] ml-2 p-1"
      >
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
    </div>
  );
};

export default Argument;
