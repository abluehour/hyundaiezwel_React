import React from "react";
import {Link} from "react-router-dom";

const BookInfo = ({ books }) => {
  return (
    <div>
      <h2>책 정보</h2>
      <table className="book-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>제목</th>
            <th>저자</th>
            <th>출간일</th>
            <th>장르</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td><Link to={`/books/${book.id}`}>{book.title}</Link></td>
              <td>{book.Author}</td>
              <td>{book.year}</td>
              <td>{book.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookInfo;
