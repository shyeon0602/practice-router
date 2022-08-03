import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { getMovie } from "../movie_data";

const Movie = () => {
  //URL 파라미터 사용하기
  const params = useParams();

  //파라미터 값이 문자이기 때문에 반드시 숫자로 바꿔줘야함
  const movie = getMovie(parseInt(params.movieId));

  //쿼리스트링 사용하기
  //쿼리스트링은 라우터 컴포넌트를 따로 설정하지 않아도 됨
  const location = useLocation();
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>감독: {movie.director}</p>
      <p>카테고리: {movie.category}</p>
      {/* <p>내용: {movie.detail}</p> */}
    </div>
  );
};

export default Movie;
