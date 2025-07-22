import React from "react";
// 일반 객체 버튼
const ReactButton = (props) => {
  console.log("props", props);
  const style = {
    //사용자 정의 객체로 css 속성 값 구성
    color: "white",
    backgroundColor: "purple",
  };
  return (
    <div>
      {/* 객체 생성시 calssName은 자동 구성됨 필요하면 props를 이용해서 사용할 수 있음 */}
      <button style={style} className={props.className}>
        {props.children}
      </button>
    </div>
  );
};

export default ReactButton;
