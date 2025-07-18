import React, { useState } from "react";
import "../App.css";

const Contents = () => {
  //let title = "지금 우리 학교는";
  let [titles, setTitle] = useState(["지금 우리 학교는", "오징어 게임"]);
  let [item, setItem] = useState(""); // 새로운 제목을 입력받기 위한 상태 변수

  const onItemAdd = () => {
    if(item === "") {
      alert("제목을 입력하세요.");
    }else if(titles.includes(item)) {// includes 메서드를 사용하여 배열에 item이 존재하는지 확인 
      alert("이미 존재하는 제목입니다.");
      setItem(""); // 입력창 초기화
      document.getElementById("titleInput").focus(); // 입력창에 포커스 설정
      return; // 중복된 제목은 추가하지 않음
    }
    else{
    //setTitle(titles.concat(item)); // 새로운 제목을 추가하는 함수
    //setTitle(titles.push(item)); // 새로운 제목을 추가하는 함수
    setTitle([...titles, item]); // 새로운 제목을 추가하는 함수
    setItem(""); // 입력창 초기화
    //push와 concat의 차이점
    //push는 기존 배열을 변경하고, concat은 새로운 배열을 반환합니다.
    }
  };
  const onItemChange = (e) => {
    setItem(e.target.value);
  };

  const onItemRemove = (title, index) => {
    // 제목 삭제 함수
    setTitle(titles.filter((title) => titles[index] !== title)); // filter 메서드를 사용하여 해당 제목을 제외한 새로운 배열 생성
  };

  return (
    <div>
      <div className="header">
        <h3>인기컨텐츠</h3>
      </div>
      <div className="contents">
        {titles.map((title, index) => {
          return (
            <div key={index}>
              <p>
                {index} : {title}
                &nbsp;
                <button onClick={() => onItemRemove(title, index)}>삭제</button>
                {/* 삭제 버튼 클릭시 해당 제목 삭제 */}
              </p>
              <hr />
            </div>
          );
        })}
        <input type="text" value={item} onChange={onItemChange} />
        <button onClick={onItemAdd}>제목 추가</button>
      </div>

      {/* <div> //정적 할당
        <p>{titles[0]}</p>
        <hr />
      </div>
      <div >
          <p>{titles[1]}</p>
          <hr />
      </div> */}
    </div>
  );
};

export default Contents;
