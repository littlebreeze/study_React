import { useState, useEffect } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(
      `count: ${count} / input : ${input}`
    );
  }, [count, input]);

  const onClickHandler = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
        />
      </section>
      <section>
        <Viewer count={count} />
      {count % 2 == 0 ? <Even /> : null}
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
