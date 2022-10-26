import React from "react";
import { Buttons } from "./Buttons";

export const BtnArea = ({handleOnClick}) => {
  const btns = [
    { label: "AC", cls: "btn-ac" },
    { label: "C", cls: "btn-c" },
    { label: "%", cls: "btn-perc" },
    { label: "/", cls: "btn-divide" },
    { label: "7", cls: "btn-7" },
    { label: "8", cls: "btn-8" },
    { label: "9", cls: "btn-9" },
    { label: "*", cls: "btn-multi" },
    { label: "4", cls: "btn-4" },
    { label: "5", cls: "btn-5" },
    { label: "6", cls: "btn-6" },
    { label: "-", cls: "btn-sub" },
    { label: "1", cls: "btn-1" },
    { label: "2", cls: "btn-2" },
    { label: "3", cls: "btn-3" },
    { label: "+", cls: "btn-plus" },
    { label: "0", cls: "btn-0" },
    { label: ".", cls: "btn-dot" },
    { label: "=", cls: "btn-equal" },
 
  ];
  return (
    <>
    
           {
           btns.map((btn, i) => {
            return <Buttons key={i} label = {btn.label} cls = {btn.cls}
            handleOnClick = {handleOnClick}/>;
           })
           }

     
    </>
  );
};
