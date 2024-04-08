import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  return (
    <div className="Diary">
      <h1>Diary</h1>
      <p>여기는 일기 상세.</p>
    </div>
  );
};

export default Diary;
