/* eslint-disable react/prop-types */
import './App.css';
import { useState } from 'react';

const Bulb = ({ light }) => {
  return (
    <div>
      {light === 'ON' ? (
        <h1 style={{ backgroundColor: 'orange' }}>ON💡</h1>
      ) : (
        <h1 style={{ backgroundColor: 'gray' }}>OFF🕶️</h1>
      )}
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState('OFF');

  return (
    <>
      <div>
        <Bulb light={light} />
        <button onClick={() => setLight(light === 'OFF' ? 'ON' : 'OFF')}>
          전구 {light === 'ON' ? '끄기' : '켜기'}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  );
}

export default App;
