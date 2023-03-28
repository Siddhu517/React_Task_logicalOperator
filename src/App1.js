import Argument from "./Components/Argument";
import Options from "./Components/Options";
import { useState, useEffect, useContext } from "react";
import Select from "./Components/Select";
import { UserContext } from "./context/Context";

export const itemData = [];

function App() {
  const [state, setState] = useContext(UserContext);
  const items = [];
  //const [items, setItems] = useState([]);
  const [argument, setArgument] = useState([<Argument key={0} />]);
  const [select, setSelect] = useState([<Select key={0} />]);

  const [result, setResult] = useState("Result *");

  const [name, setName] = useState("My Arg");
  const [nameValue, setNameValue] = useState("false");

  useEffect(() => {
    let comp = JSON.parse(localStorage.getItem("component"));
    comp.component = items;
    localStorage.setItem("component", JSON.stringify(comp));
    setState({ ...state, component: items });
  }, []);

  console.log("state=> " + state);

  /* const handleAddArgument = (e) => {
    setArgument([
      ...argument,
      <Argument key={argument.length} name={name} nameValue={nameValue} />,
    ]);
  }; */

  /*   useEffect(() => {
    if (items.length === itemData.length) {
      itemData.push(items);
    }
  }, [items]); */

  const handleAddSelect = (e) => {
    setSelect([...select, <Select key={select.length} />]);
  };

  const [count, setCount] = useState(1);

  const handleDuplicateClick = async () => {
     setCount(count + 1);
    for (let i = 0; i < count; i++) {
      items.push(
        <div key={i} name={name} value={nameValue}>
          <Argument setName={setName} setNameValue={setNameValue} />
        </div>
      );
    }
    /* await items.push(
      <div name={name} value={nameValue}>
        <Argument setName={setName} setNameValue={setNameValue} />
      </div>
    ); */

    setState({ ...state, component: `${items?items:""}` });
  };

  useEffect(() => {
    itemData.push(items);
  }, []);

  console.log(items);

  //console.log(items[0].props.name);
  // console.log(items);

  return (
    <div className="h-screen p-10 ">
      <div>
        {items}
        {/*  {argument} */}
        <button
          /* onClick={handleAddArgument} */
          onClick={handleDuplicateClick}
          className="border-2 rounded-md cursor-pointer mt-5 mb-5 p-1 bg-slate-300 border-black"
        >
          + add arg
        </button>
      </div>

      <div>
        {select}

        {true ? (
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
