import { useState } from "react";
import "./App.css";
import { BtnArea } from "./components/BtnArea";
import { Display } from "./components/Display";

const operators = ["-", "+", "/", "*" ,"."];

const App = () => {
  const [str, setStr] = useState("");
  const [lastOp, setLastOp] = useState("");
  const handleOnClick = (val) => {
    console.log(val);

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
      const strDisplay = str;

      if (operators.includes(lastItem)) {
        strDisplay = str.slice(0, -1);
      }
      setStr(eval(strDisplay).toString());
      return;
    }


    // Prevent multiple operators
    if(operators.includes(val)){
     setLastOp(val);
     if(!str){
      return;
     }
     const lastItem = str[str.length - 1];
     let tempStr = str;
     if(operators.includes(lastItem)){
      tempStr = str.slice( 0, -1);
     }
     setStr(tempStr + val)
     return;
    }
    // make no more than 1 dot
    if(val === "."){
      if(lastOp){
        const opIndex = str.lastIndexOf(lastOp);
        const LastNum = str.slice(opIndex + 1);
         if (LastNum.includes(".")){
          return;
         }
        
         if (!LastNum && str.includes(".")){
          return;
         }
        
      }
      }
  

    setStr(str + val);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="circle"></div>
        <div className="calculator">
          <Display str={str} />
          <BtnArea handleOnClick={handleOnClick} />
        </div>
      </div>
    </div>
  );
};

export default App;
