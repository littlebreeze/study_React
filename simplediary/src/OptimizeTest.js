import React, { useState, useEffect } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`counter A update : ${count}`);
  });

  return <div className="CounterA">{count}</div>;
});
const CounterB = React.memo(({ obj }) => {
  useEffect(() => {
    console.log(`counter B update : ${obj.count}`);
  });
  return <div className="CounterB">{obj.count}</div>;
});

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div className="OptimizeTest" style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <CounterB obj={obj} />
        <button onClick={() => setObj({ count: obj.count })}>B button</button>
      </div>
    </div>
  );
};
export default OptimizeTest;
