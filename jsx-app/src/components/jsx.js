import React from "react";

const Jsx = () => {
  //자바스크립트 코드
  const name = "홍길동"; // 변수 선언
  return (
    <div>
      <h1>JSX Component</h1>
      <h2>이름: name</h2>
      {/* 문자열 name */}
      <h2>이름: {name}</h2>
      {/* 스크립트영역{}이므로 상수 name */}
    </div>
  );
};

export default Jsx;
