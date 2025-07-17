import React, { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState("출력 메세지"); //message 값 변화 상태 관리, 값 변화시 다시 랜더링 진행
  const [color, setColor] = useState("black"); // color 상태 변수 선언
  
  const onClickEnter = () => {
    setMessage("안녕하세요!"); // 버튼 클릭시 message 값 변경
  };
  const onClickLeave = () => {
    setMessage("안녕히가세요!"); // 버튼 클릭시 message 값 변경
  };
  const onClickReset = () => {
    setMessage("출력 메세지"); // 버튼 클릭시 message 값 초기화
  };



  return (
    <div>
      <h3>{message}</h3>
      <button onClick={onClickEnter} style={{ margin: "10px" }}>
        입장
      </button>
      <button onClick={onClickLeave} style={{ margin: "10px" }}>
        퇴장
      </button>
      <br />
      <button onClick={onClickReset} style={{ margin: "10px" }}>
        초기화
      </button>
      <hr />
      <h3 style={{ color }}>{color}</h3>
      {/* 이벤트 콜백함수 화살표 함수로 만들어 직접연결 */}
      <button onClick={() => setColor("red")} style={{ margin: "10px" }}>
        빨강
      </button>
      <button onClick={() => setColor("blue")} style={{ margin: "10px" }}>
        파랑
      </button>
      <br />
      <button onClick={() => setColor("green")} style={{ margin: "10px" }}>
        초록
      </button>
      <hr />

    </div>
  );
};

export default Message;
