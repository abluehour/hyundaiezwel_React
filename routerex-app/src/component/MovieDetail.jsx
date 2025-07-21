import React from 'react';
import { useParams } from 'react-router-dom';


const MovieDetail = (props) => {
  const params = useParams(); //영화 정보의 id값이 반환됨
  const movie_ar = props.movie;
  //params에서 전달된 keyword가 data내에 존재하면 data 반환, 없으면 undefined로 반환 됨
  const movie = movie_ar[parseInt(params.keyword)-1];
  console.log(params);
  if(!movie) {
    return <div> <hr/>영화 정보를 찾을 수 없습니다.</div>;
  }
  return (
    <div>
      <h3>{params.keyword} : {movie.title}</h3>
      <p>감독: {movie.director}</p>
      <p>배우: {movie.actor}</p>
      <p>개봉일: {movie.date}</p>
      <p>장르: {movie.genre}</p>
    </div>
  );
};

export default MovieDetail;