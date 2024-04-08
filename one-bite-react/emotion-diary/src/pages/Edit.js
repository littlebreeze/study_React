import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const mode = searchParams.get("mode");

  console.log(id);
  console.log(mode);

  return (
    <div className="Edit">
      <h1>Edit</h1>
      <p>여기는 일기 편집.</p>
      <button onClick={() => setSearchParams({ who: "littlebird" })}>QS change</button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        HOME으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
