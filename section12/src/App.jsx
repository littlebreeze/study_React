import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import New from "./pages/New";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";

/*
  1. / : 모든 일기를 조회하는 페이지 (HOME)
  2. /new : 새로운 일기를 작성하는 페이지 (NEW)
  3. /diary : 일기를 상세히 조회하는 페이지 (DIARY)
  */

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/diary" element={<Diary />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
