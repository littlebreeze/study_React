import { useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);

  // Controller에게 count, setCount를 둘 다 넘겨줄 수도 있지만
  // 여기서 이벤트 핸들러 만들어 넘기기!
  const onClickHandler = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller
          onClickHandler={onClickHandler}
        />
      </section>
    </div>
  );
}

export default App;
