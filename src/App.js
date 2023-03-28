import Argument from "./Components/Argument";
import { useState, useContext, useEffect } from "react";
import Select from "./Components/Select";
import { UserContext } from "./context/Context";

function App() {
  const [state, setState] = useContext(UserContext);
  const [view, setView] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    console.log("state.calc changed:", state.calc);
    let result;
    if (state.calc.type === "and") {
      result = Boolean(state.calc.arg1) && Boolean(state.calc.arg2);
    } else if (state.calc.type === "or") {
      result = Boolean(state.calc.arg1) || Boolean(state.calc.arg2);
    }
    setState({ ...state, result: String(result) });
  }, [state.calc.type, state.calc.arg1, state.calc.arg2]);

  useEffect(() => {
    setResult(state.result);
  }, [state]);

  const handleAddArguments = () => {
    const newArgs = [...state.args, { name: "My Arg", value: "true" }];
    setState({ ...state, args: newArgs });
  };

  const handleSelect = async (e, index) => {
  
    let selectOP = e.target.value;
    let type = "";
    let value = {};
    const updatedOPS = [...state.ops];
    /*  */

   /*  if(state.ops[index].type === selectOP){
      updatedOPS[index].viewSelectOPS = "false";
      updatedOPS[index].viewOPS = "false";
        setState({ ...state, ops: updatedOPS });
    } */

    

    if (selectOP === "constant") {
      type = "constant";
      value = "true";
      updatedOPS[index].viewSelectOPS = "false";
      updatedOPS[index].viewOPS = "true";
    } else if (selectOP === "argument") {
      type = "argument";
      value = { name: "My Arg", value: "true" };
      updatedOPS[index].viewSelectOPS = "false";
      updatedOPS[index].viewOPS = "true";
    } else if (selectOP === "and") {
      setView(true);
      /* store sate to calc  */
      //Function to update the state
      if (state.calc.type === "and") return;
      const newOps = [
        ...state.ops,
        { type: "and", value: "" },
        { viewSelectOPS: "true" },
        { viewOPS: "false" },
        { type: "and", value: "" },
        { viewSelectOPS: "true" },
        { viewOPS: "false" },
      ];

      setState({ ...state, ops: newOps });
      return;
    } else if (selectOP === "or") {
      setView(true);
      if (state.calc.type === "and") return;
      setState({ ...state.calc, type: "or" });
      console.log(state.calc.type)
      const newOps = [
        ...state.ops,
        { type: "or", value: "" },
        { viewSelectOPS: "true" },
        { viewOPS: "false" },
        { type: "or", value: "" },
        { viewSelectOPS: "true" },
        { viewOPS: "false" },
      ];
      setState({ ...state, ops: newOps });
      return;
    }

    updatedOPS[index].type = type;
    updatedOPS[index].value = value;
    setState({ ...state, ops: updatedOPS });
  };

  const handleAddSelect = () => {
    const newOps = [
      ...state.ops,
      { type: "", value: "" },
      { viewSelectOPS: "true" },
      { viewOPS: "true" },
    ];
    setState({ ...state, ops: newOps });
  };

  return (
    <div className="h-screen p-10 ">
      <div>
        {state &&
          state?.args?.map((arg, index) => (
            <Argument arg={arg} key={index} argKey={index} />
          ))}
        <button
          onClick={handleAddArguments}
          className="border-2 rounded-md cursor-pointer mt-5 mb-5 p-1 bg-slate-300 border-black"
        >
          + add arg
        </button>
      </div>
      <div>
        {state &&
          state?.ops?.map((op, index) => (
            <Select
              op={op}
              key={index}
              opKey={index}
              handleSelect={handleSelect}
            />
          ))}

        {view ? (
          <button
            onClick={handleAddSelect}
            className="border-2 rounded-md cursor-pointer mt-5 mb-5 p-1 bg-slate-300 border-black"
          >
            + add arg
          </button>
        ) : (
          ""
        )}
      </div>

      <div className="mt-5">
        <span className="text-xl font-bold">
          result: {result ? result : "undefined"}
        </span>
      </div>
    </div>
  );
}

export default App;
