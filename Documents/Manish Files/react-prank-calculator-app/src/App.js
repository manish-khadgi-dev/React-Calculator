import { useState } from "react";
import "./App.css";
import { BtnArea } from "./components/BtnArea";
import { Display } from "./components/Display";
import aa from "./aa.wav";

const operators = ["-", "+", "/", "*", "."];

const App = () => {
  const [str, setStr] = useState("");
  const [lastOp, setLastOp] = useState("");
  const [isPrank, setIsPrank] = useState(false);

  const audio = new Audio(aa);

  const handleOnClick = (val) => {
    console.log(val);
    isPrank && setIsPrank(false);

    if (val === "AC") {
      setStr("");
      return;
    }

    if (val === "C") {
      setStr(str.slice(0, -1));
      return;
    }

    if (val === "=") {
      const lastItem = str[str.length - 1];
      let strDisplay = str;

      if (operators.includes(lastItem)) {
        strDisplay = str.slice(0, -1);
      }
      const extra = extraValue();

      extra && setIsPrank(true);
      extra && audio.play();

      const ttl = eval(strDisplay) + extra;
      console.log(ttl, extra);

      setStr(ttl.toString());
      return;
    }

    // Prevent multiple operators
    if (operators.includes(val)) {
      setLastOp(val);
      if (!str) {
        return;
      }
      const lastItem = str[str.length - 1];
      let tempStr = str;
      if (operators.includes(lastItem)) {
        tempStr = str.slice(0, -1);
      }
      setStr(tempStr + val);
      return;
    }
    // make no more than 1 dot
    if (val === ".") {
      if (lastOp) {
        const opIndex = str.lastIndexOf(lastOp);
        const LastNum = str.slice(opIndex + 1);
        if (LastNum.includes(".")) {
          return;
        }

        if (!LastNum && str.includes(".")) {
          return;
        }
      }
    }

    setStr(str + val);
  };

  const extraValue = () => {
    const num = Math.round(Math.random() * 10);
    return num > 3 ? 0 : num;
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="circle"></div>
        <div className="calculator">
          <Display str={str} isPrank={isPrank} />
          <BtnArea handleOnClick={handleOnClick} />
        </div>
      </div>
    </div>
  );
};

export default App;
