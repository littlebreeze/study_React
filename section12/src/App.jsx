import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import New from "./pages/New";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";

import Button from "./components/Button";
import Header from "./components/Header";

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
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />
      <Button
        text={"123"}
        // type={"DEFAULT"}
        onClick={() => {
          console.log("123번 버튼 클릭!");
        }}
      />

      <Button
        text={"123"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭!");
        }}
      />

      <Button
        text={"123"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭!");
        }}
      />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/diary/:id" element={<Diary />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
