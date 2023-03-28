import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/Context";

const Options = ({ op, opKey }) => {
  const [state, setState] = useContext(UserContext);

  /* constant select */
  const handleEditOPS = (newValue) => {
    const updatedOPS = [...state.ops];

    let id = 0;
    for (let i = 0; i < updatedOPS.length; i++) {
      if (
        updatedOPS[i].value &&
        !updatedOPS[i].name &&
        updatedOPS[i].type === "constant"
      ) {
        id += i;
      }
    }

    updatedOPS[id].value = newValue;
    setState({ ...state, ops: updatedOPS });
    setState({ ...state, result: newValue });
  };

  /* constant ops */
  const handleCloseOPS = (index) => {
    const updatedOPS = [...state.ops];
    updatedOPS[index].type = "";
    updatedOPS[index].value = "";
    updatedOPS[index].viewSelectOPS = "true";
    updatedOPS[index].viewOPS = "false";
    setState({ ...state, ops: updatedOPS });
  };

  /* Argument select */

  const handleEditARGOPS = (newValue) => {
    const updatedARGS = [...state.args];

    let id = 0;
    for (let i = 0; i < updatedARGS.length; i++) {
      if (newValue === updatedARGS[i].name) {
        id += i;
      }
    }

    let result = updatedARGS[id].value;

    setState({ ...state, result: result });
  };

  /* Argument ops */
  const handleCloseArgument = (index) => {
    const updatedOPS = [...state.ops];
    updatedOPS[index].viewSelectOPS = "true";
    updatedOPS[index].viewOPS = "false";
    setState({ ...state, ops: updatedOPS });
  };

  /* AND select 1 */

  const handleEditANDSelect1 = (newValue) => {
    const updatedARGS = [...state.args];

    let id = 0;
    for (let i = 0; i < updatedARGS.length; i++) {
      if (newValue === updatedARGS[i].name) {
        id += i;
      }
    }

    let result = updatedARGS[id].value;

    //setState({ ...state.calc, arg1: result });
    const newState = { ...state };
    newState.calc = {
      ...newState.calc,
      arg1: result,
    };
    console.log("newState:", newState);
    console.log("arg1:", result);
    setState(newState);
  };

  /* AND select 2 */

  const handleEditANDSelect2 = (newValue) => {
    const updatedARGS = [...state.args];

    let id = 0;
    for (let i = 0; i < updatedARGS.length; i++) {
      if (newValue === updatedARGS[i].name) {
        id += i;
      }
    }

    let result = updatedARGS[id].value;

    //setState({ ...state.calc, arg2: result });
    const newState = { ...state };
    newState.calc = {
      ...newState.calc,
      arg2: result,
    };
    console.log("newState:", newState);
    console.log("arg2:", result);
    setState(newState);
  };

  /* AND ops */
  const handleCloseANDOPS = (index) => {
    const updatedOPS = [...state.ops];
    updatedOPS[index].viewSelectOPS = "true";
    updatedOPS[index].viewOPS = "false";
    setState({ ...state, ops: updatedOPS });
  };

  /* OR select 1 */
  const handleEditORSelect1 = (newValue) => {
    const updatedARGS = [...state.args];

    let id = 0;
    for (let i = 0; i < updatedARGS.length; i++) {
      if (newValue === updatedARGS[i].name) {
        id += i;
      }
    }

    let result = updatedARGS[id].value;

    //setState({ ...state, result: result });
    const newState = { ...state };
    newState.calc = {
      ...newState.calc,
      arg1: result,
    };
    console.log("newState:", newState);
    console.log("arg1:", result);
    setState(newState);
  };
  /* OR select 2 */
  const handleEditORSelect2 = (newValue) => {
    const updatedARGS = [...state.args];

    let id = 0;
    for (let i = 0; i < updatedARGS.length; i++) {
      if (newValue === updatedARGS[i].name) {
        id += i;
      }
    }

    let result = updatedARGS[id].value;

    //setState({ ...state, result: result });
    const newState = { ...state };
    newState.calc = {
      ...newState.calc,
      arg2: result,
    };
    console.log("newState:", newState);
    console.log("arg2:", result);
    setState(newState);
  };

  /* OR ops */
  const handleCloseOROPS = (index) => {
    const updatedOPS = [...state.ops];
    updatedOPS[index].viewSelectOPS = "true";
    updatedOPS[index].viewOPS = "false";
    setState({ ...state, ops: updatedOPS });
  };

  return (
    <div>
      {op.type === "constant" ? (
        <section>
          {/* constant */}
          <select
            className="border-black border-2 h-[35px] p-1 rounded-md"
            onChange={(e) => handleEditOPS(e.target.value)}
            defaultValue={op.type.value}
          >
            <option value="select">Select..</option>
            <option value="false">false</option>
            <option value="true">true</option>
          </select>
          <button
            onClick={() => handleCloseOPS(opKey)}
            className="border-2 rounded-md h-[34.5px] w-[35px] bg-slate-300 border-black"
          >
            X
          </button>
        </section>
      ) : op.type === "argument" ? (
        <section>
          {/* arguments */}
          <select
            className="border-black border-2 rounded-md h-[35px] p-1"
            onChange={(e) => handleEditARGOPS(e.target.value)}
          >
            {" "}
            <option value="select">Select..</option>
            {state?.args?.map((item, index) => (
              <option value={item.name} key={index}>
                {item.name}
              </option>
            ))}
          </select>
          <button
            onClick={() => handleCloseArgument(opKey)}
            className="border-2 rounded-md h-[34.5px] w-[35px] mt-3 bg-slate-300 border-black"
          >
            X
          </button>
        </section>
      ) : op.type === "and" ? (
        <section>
          {/* and */}
          <div>
            <select
              className="border-black border-2 rounded-md h-[35px] p-1"
              onChange={(e) => handleEditANDSelect1(e.target.value)}
            >
               <option value="select">Select..</option>
              {state?.args?.map((item, index) => (
                <option value={item.name} key={index}>
                  {item.name}
                </option>
              ))}
            </select>

            <button
              onClick={handleCloseANDOPS}
              className="border-2 rounded-md h-[34.5px] w-[35px] mt-3 p-1 bg-slate-300 border-black"
            >
              X
            </button>
          </div>
          <div>
            {" "}
            <select
              className="border-black border-2 rounded-md h-[35px] p-1"
              onChange={(e) => handleEditANDSelect2(e.target.value)}
            >
               <option value="select">Select..</option>
              {state?.args?.map((item, index) => (
                <option value={item.name} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
            <button
              onClick={handleCloseANDOPS}
              className="border-2 rounded-md h-[34.5px] w-[35px] mt-3 p-1 bg-slate-300 border-black"
            >
              X
            </button>{" "}
          </div>
        </section>
      ) : op.type === "or" ? (
        <section>
          {/* or */}
          <div>
            <select
              className="border-black border-2 rounded-md h-[35px] p-1"
              onChange={(e) => handleEditORSelect1(e.target.value)}
            >
               <option value="select">Select..</option>
              {state?.args?.map((item, index) => (
                <option value={item.name} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
            <button
              onClick={handleCloseOROPS}
              className="border-2 rounded-md h-[34.5px] w-[35px] mt-3 p-1 bg-slate-300 border-black"
            >
              X
            </button>
          </div>
          <div>
            {" "}
            <select
              onChange={(e) => handleEditORSelect2(e.target.value)}
              className="border-black border-2 rounded-md h-[35px] p-1"
            >
               <option value="select">Select..</option>
              {state?.args?.map((item, index) => (
                <option value={item.name} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
            <button
              onClick={handleCloseOROPS}
              className="border-2 rounded-md h-[34.5px] w-[35px] mt-3 p-1 bg-slate-300 border-black"
            >
              X
            </button>{" "}
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
};

export default Options;
