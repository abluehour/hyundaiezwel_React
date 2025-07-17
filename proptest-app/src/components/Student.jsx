import React from "react";

const Student = (props) => {
  return (
    <div>
      <h2>name = {props.name}</h2>
      <h2>age= {props.age}</h2>
      <h2>address = {props.address}</h2>
      <h2>year = {props.year}</h2>
    </div>
  );
};

export default Student;
