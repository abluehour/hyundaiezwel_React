import "./App.css";
import React from "react";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import MovieInfo from "./component/MovieInfo.jsx";
import MovieDetail from "./component/MovieDetail.jsx";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const movie =[
  {id:1, title:'스파이더맨 노 웨이 홈', director:'존 왓츠',actor: '톰 홀랜드', year:'2021-12-15', genre:'액션' },
  {id:2, title:'킹스맨 : 퍼스트 에이전트', director:'매튜 본',actor: '팔프 파인즈', year:'2021-12-22', genre:'액션' }
]
  return (
    <div className="wrap">
      <nav>
        <ul className="menu">
          <li>
            <Link to="/">홈 화면 보기</Link>
          </li>
          <li>
            <Link to="/about">About 화면 보기</Link>
          </li>
          <li>
            <Link to="/movieInfo">영화 정보 보기</Link>
          </li>
          <li>
            <Link to="/movieDetail/1">스파이더맨 노 웨이 홈</Link>
          </li>
          <li>
            <Link to="/movieDetail/2">킹스맨 : 퍼스트 에이전트</Link>
          </li>
          <li>
            <Link to="/movieDetail/squid">오징어게임</Link>
          </li>
          <li>
            <a
              href="https://movie.naver.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              네이버 영화
            </a>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movieInfo" element={<MovieInfo movie={movie} />} />
        <Route path="/movieDetail/:keyword" element={<MovieDetail movie={movie} />} />
      </Routes>
    </div>
  );
}

export default App;
