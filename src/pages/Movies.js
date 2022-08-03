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
