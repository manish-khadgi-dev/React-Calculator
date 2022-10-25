import { useState } from "react";
import "./App.css";
import { BtnArea } from "./components/BtnArea";
import { Display } from "./components/Display";
const operators = ["%", "/", "*", "-", "+"];
const App = () => {
  const [str, setStr] = useState("");
  const [lastOperator, setLastOperator] = useState("");
  const handleOnClick = (val) => {
    console.log(val);

    if (val === "AC") {
      setStr("");
      return;
    }
    if (val === "C") {
      const shortStr = str.slice(0, -1);
      return setStr(shortStr);
    }
    if (val === "=") {
      const lastChar = str[str.length - 1];
      let displayStr = str;
      if (operators.includes(lastChar)) {
        displayStr = str.slice(0, -1);
      }
      setStr(eval(displayStr).toString());

      return;
    }
    //prevent multiple operators showing at once, rather replace previous operator
    if (operators.includes(val)) {
      setLastOperator(val);
      if (!str) {
        return;
      }
      const lastChar = str[str.length - 1];
      let tempStr = str;
      if (operators.includes(lastChar)) {
        tempStr = str.slice(0, -1);
        setStr(tempStr + val);
        return;
      }
    }
    // make sure no more than 1 dot per number
    if (val === ".") {
      if (lastOperator) {
        const operatorIndex = str.lastIndexOf(lastOperator);
        const lastNumberSet = str.slice(operatorIndex + 1);

        if (lastNumberSet.includes(".")) {
          return;
        }
      }

      if (!lastOperator && str.includes(".")) {
        return;
      }
    }

    setStr(str + val);
  };

  return (
    <div className="wrapper">
      <div className="circle"></div>
      <div className="calculator">
        <Display str={str} />
        <BtnArea handleOnClick={handleOnClick} />
      </div>
    </div>
  );
};

export default App;
