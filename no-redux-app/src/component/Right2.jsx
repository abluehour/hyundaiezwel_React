import React from "react";
import Right3 from "./Right3.jsx";
const Right2 = (props) => {
  return (
    <div>
      <h3>Right2</h3>
      <Right3 count={props.count} handlePlus={props.handlePlus} handleMinus={props.handleMinus} ></Right3>
    </div>
  );
};

export default Right2;
