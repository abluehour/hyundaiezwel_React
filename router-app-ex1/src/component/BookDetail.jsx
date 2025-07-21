import React from 'react';
import { useParams } from 'react-router-dom';


const BookDetail = ({ books }) => {
  const id = useParams().id; // URL에서 id 파라미터를 가져옴
  const book = books.find((b) => b.id === parseInt(id)); // books 배열에서 해당 id를 가진 책을 찾음
  return (
    <div>
      <h2>책 상세 정보</h2>
      {book ? (
        <div>
          <h3>{book.title}</h3>
          <p>저자: {book.Author}</p>
          <p>출간일: {book.year}</p>
          <p>장르: {book.genre}</p>
        </div>
      ) : (
        <p>책을 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default BookDetail;