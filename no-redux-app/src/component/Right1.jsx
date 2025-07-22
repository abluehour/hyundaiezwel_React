import React from "react";
import Right2 from "./Right2.jsx";

const Right1 = (props) => {
  return (
    <div>
      <h3>Right1</h3>
      <Right2 count={props.count} handlePlus={props.handlePlus} handleMinus={props.handleMinus} />
    </div>
  );
};

export default Right1;
