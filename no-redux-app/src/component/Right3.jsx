import React from "react";
import App from "../App.jsx";

const Right3 = (props) => {
  return (
    <div>
      <h3>Right3</h3>
      <button onClick={props.handleMinus}>-</button> &nbsp;
      <button onClick={props.handlePlus}>+</button>
    </div>
  );
};

export default Right3;
