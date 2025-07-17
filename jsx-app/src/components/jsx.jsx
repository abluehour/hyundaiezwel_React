import React from "react";

const Jsx = () => {
  //자바스크립트 코드
  const name = "홍길동"; // 변수 선언
  const number = 10; // 숫자 변수 선언
  const num = 2; // 숫자 변수 선언

  //내부함수 사용자정의 객체 선언 가능
  //객체 선언
  const person = {
    name: "성춘향",
    age: 20,
  };

  //내부 함수 정의
  function getPerson() {
    return `${person.name}, ${person.age}`; // 객체의 속성 접근
  }

  return (
    <div>
      <h1>JSX Component</h1>
      <h2>이름: {getPerson()}</h2>
      {/* 문자열 name */}
      <h2>이름: {name}</h2>
      {number || "오리"}
      {number && "오리"}
      {/* 스크립트영역{}이므로 상수 name */}
      {
        //조건 연산자 사용 조건애 따라 실행할 문장이 두문장 이상이면 반드시 소괄호로 묶어야함
        name === "홍길동" ? <h3>홍길동입니다.</h3> : <h3>홍길동이 아닙니다.</h3>
      }
      <div
        style={{
          margin: "0 auto",
          width: "50%",
          backgroundColor: "red",
          color: "white",
          fontSize: "36px",
          fontWeight: "bold",
          padding: 10,
          marginTop: "20px",
        }}
      >
        인라인 스타일링 적용
      </div>
      <div className="react">className 속성 사용</div>
      주소 : 서울 <br />
      /* 주석처리 안됨 문자열 처리됨 */ <br />
      {
        //자바스크립트 영역 - 자바스크립트 코드 실행
        (function () {
          if (num == 1) return <div>value=1</div>;
          if (num == 2) return <div>value=2</div>;
          if (num == 3) return <div>value=3</div>;
        })()
      }
      {/* 사용자 정의 객체값 반환하는 함수 호출 함수명() */}
      {/* 문자열 getPerson() 출력 */}
      <div>getPerson()</div>
      <div>{getPerson()}</div>
    </div>
  );
};

export default Jsx;
