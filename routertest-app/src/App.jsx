import React from "react";
import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./component/Home.jsx";
import Topics from "./component/Topics.jsx";
import Contact from "./component/Contact.jsx";

let contents = [
  { id: 1, title: "Topic 1", content: "Content for Topic 1" },
  { id: 2, title: "Topic 2", content: "Content for Topic 2" },
  { id: 3, title: "Topic 3", content: "Content for Topic 3" },
];


function App() {
  return (
    <div className="App">
      <h1>Hello React Router Dom</h1>
      {/* 렌더링 진행될 때마다 페이지 새로고침이 방생함
      기존에 추가한ㄴ 컴포넌트들을 모두 사라지게 만들고 다시 처음부터 렌더링을 진행함
      페이지 단위 리로드 하지않으려면 동적으로 갖고오는 코드나 데이터는 비동기 기숭을 이용해서 페이지를 만들어야 함
      리액트가 제공하는 Link 컴포넌트 활용
      애플리케이션 유지한 상태에서 페이지 주소만 변경 가능한 환경을 구성할 수 있음 */}

      {/* <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/topics">Topics</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul> */}
      {/* <Home />
      <Topics />
      <Contact /> */}

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/*" element={<Topics contents={contents} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={'Note: Page not found!'} />
      </Routes>
    </div>
  );
}

export default App;
