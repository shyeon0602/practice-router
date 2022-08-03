import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Menubar from "./pages/Menubar";
import Movie from "./pages/Movie";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}>
          <Route path=":movieId" element={<Movie />} />
        </Route>
        {/*Route로 지정해 주지 않은 경로로 들어갔을 때 찾을 수 없는 페이지임을 사용자에게 알려주는 처리*/}
        <Route path="*" element={<div>There's nothing here!</div>} />
      </Route>
    </Routes>
  );
};

export default App;
