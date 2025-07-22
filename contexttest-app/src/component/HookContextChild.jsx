import React from "react";
import { useContext } from "react";
import { MyAppContext } from "../context/MyContext.jsx";

export const HookContextChild = () => {
  return (
    <div id="c_child">
      <HookContextGrand />
    </div>
  );
};

export const HookContextGrand = () => {
  const { title, lang } = useContext(MyAppContext);
  return (
    <div id="c_Child-grand">
      <h2>{title}</h2>
      <p>({lang})</p>
    </div>
  );
};
