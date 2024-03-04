import { useContext, useEffect, useState } from "react";
import MyHeader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";
import { DiaryStateContext } from "../App";
import DiaryList from "../components/DiaryList";

const Home = () => {
  // App에 선언해둔 데이터 사용하기
  const diaryList = useContext(DiaryStateContext);

  // 가공된 일기 데이터
  const [data, setData] = useState([]);

  // 헤더 가운데에 날짜를 표시하기 위한 state 변수
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  // 날짜 데이터가 update 되었을 때, 일기 데이터 가공
  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();
      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();

      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [diaryList, curDate]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  // 헤더 좌우 월 변경 버튼
  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div className="Home">
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
