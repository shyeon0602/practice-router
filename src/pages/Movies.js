import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { getMovies } from "../movie_data";
{
  /* ../는 상위 디렉토리로 이동을 의미
     ./는 파일이 현재 디렉토리에 위치함을 의미
  */
}

const movies = () => {
  const movies = getMovies();

  return (
    <div>
      <h1>넷플릭스 영화 추천 목록</h1>
      <div>
        {movies.map((movie) => (
          <NavLink
            to={`/movies/${movie.id}`}
            key={movie.id}
            style={({ isActive }) => {
              return {
                //NavLink 사용하여 링크에서 사용하는 경로가 현재 라우트의 경로와 일치하는 경우 특정 CSS를 적용할 수 있음
                //isActive가 적용될 때 글씨가 주황색으로 바뀜
                color: isActive ? "#FF9E1B" : "",
              };
            }}
          >
            <p>{movie.title}</p>
          </NavLink>
        ))}
      </div>
      <hr />
      <Outlet /> {/*하단에 상세페이지 띄우기*/}
    </div>
  );
};

export default movies;
