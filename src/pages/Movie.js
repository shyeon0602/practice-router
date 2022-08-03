import React from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import { getMovie } from "../movie_data";

const Movie = () => {
  //URL 파라미터 사용하기
  const params = useParams();
  //파라미터 값이 문자이기 때문에 반드시 숫자로 바꿔줘야함(parseInt())
  const movie = getMovie(parseInt(params.movieId));

  //쿼리스트링 사용하기
  //쿼리스트링은 라우터 컴포넌트를 따로 설정하지 않아도 됨
  const location = useLocation();
  //searchParams는 쿼리스트링을 파싱하기 위한 hooke이다.
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");

  const handleClick = () => {
    setSearchParams({ detail: detail === "true" ? false : true });
    //detail 안의 파라미터의 true값은 문자열이기 때문에 반드시 "" 안에 입력해야 함
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>감독: {movie.director}</p>
      <p>카테고리: {movie.category}</p>
      {/* <자세히> 버튼 클릭 이벤트 발생 시 "detail"쿼리 파라미터의 값이 변경되도록 만듦 */}
      <button type="button" onClick={handleClick}>
        자세히
      </button>
      {detail === "true" ? <p>{movie.detail}</p> : false}
    </div>
  );
};

export default Movie;
