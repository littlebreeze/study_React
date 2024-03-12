import './App.css';
import { useReducer } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import New from './pages/New';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: '1번 일기 내용',
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 3,
    content: '3번인 일기의 내용입니다',
  },
];

function reducer(state, action) {
  return state;
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/new' element={<New />}></Route>
        <Route path='/diary/:id' element={<Diary />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
