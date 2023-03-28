import { useContext, useEffect } from "react";
import Options from "./Options";
import { UserContext } from "../context/Context";

const Select = ({ op, opKey, handleSelect }) => {
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    let result;
    if (state.calc.type === "and") {
      result = Boolean(state.calc.arg1) && Boolean(state.calc.arg2);
    } else if (state.calc.type === "or") {
      result = Boolean(state.calc.arg1) || Boolean(state.calc.arg2);
    }
    setState({ ...state, result: String(result) });
    //console.log(result);
  }, []);

  const handleCloseSelect = (index) => {
    const updatedOPS = [...state.ops];
    updatedOPS[index].viewSelectOPS = "false";
    setState({ ...state, ops: updatedOPS });
  };

  return (
    <div>
      {op.viewSelectOPS === "true" ? (
        <>
          <select
            onChange={(e) => handleSelect(e, opKey)}
            className="border-black rounded-md border-2 h-[35px] p-1 mt-5"
          >
            <option value={"select"}>select...</option>
            <option value={"constant"}>constant</option>
            <option value={"argument"}>argument</option>
            <option value={"and"}>and</option>
            <option value={"or"}>or</option>
          </select>
          <button
            onClick={() => handleCloseSelect(opKey)}
            className="border-2 rounded-md h-[34.5px] w-[35px] bg-slate-300 border-black"
          >
            X
          </button>
        </>
      ) : (
        ""
      )}

      {/* option */}
      {op.viewOPS === "true" ? <Options op={op} opKey={opKey} /> : ""}
    </div>
  );
};

export default Select;
