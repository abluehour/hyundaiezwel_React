import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0); // count 상태 변수 선언, 초기값 0
  const onClickPlus = () => {
    setcount(count + 1); // 버튼 클릭시 count 값 증가
  };
  const onClickMinus = () => {
    setcount(count - 1); // 버튼 클릭시 count 값 감소
  };
  return (
    <div>
      <h3 style={{ margin: "10px" , border: "2px solid black" }}>{count}</h3>
      <button onClick={onClickPlus} style={{ margin: "10px" , border: "2px solid black" }}>
        +
      </button>
      <button onClick={onClickMinus} style={{ margin: "10px", border: "2px solid black" }}>
        -
      </button>
    </div>
  );
};

export default Counter;
