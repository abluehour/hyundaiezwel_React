import "./App.css";
import About from "./component/About.jsx"; // Importing the Book component
import BookInfo from "./component/BookInfo.jsx"; // Importing the BookList component
import BookDetail from "./component/BookDetail.jsx"; // Importing the BookDetail component
import Home from "./component/Home.jsx"; // Importing the home component
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  const books = [
    {
      id: 1,
      title: "바다가 들리는 편의점",
      Author: "마치다 소노코",
      year: "2023-03-24",
      genre: "힐링",
    },
    {
      id: 2,
      title: "코스모스",
      Author: "칼 세이건",
      year: "1980",
      genre: "우주",
    },
  ];

  return (
    <div className="App">
      <h1>원광대학교 도서관</h1>
      <nav>
        <ul className="menu">
          <li>
            <Link to="/">홈 화면 보기</Link>
          </li>
          <li>
            <Link to="/about">About 화면 보기</Link>
          </li>
          <li>
            <Link to="/bookInfo">책 정보 보기</Link>
          </li>

        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookInfo" element={<BookInfo books={books} />} />
        <Route path="/books/:id" element={<BookDetail books={books} />} />
        {/* :id는 동적 라우팅을 위한 파라미터 */}
        <Route path="*" element={<div>잘못된 경로입니다.</div>} />
      </Routes>
    </div>
  );
}

export default App;
