import { useState, useRef } from 'react';
const Register = () => {
  const countRef = useRef(0);

  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });

  const onChange = (e) => {
    countRef.current++;
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const inputRef = useRef();

  const onSubmit = () => {
    if (input.name === '') {
      // 이름 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div className='Register'>
      <div>
        <input
          ref={inputRef}
          name='name'
          value={input.name}
          onChange={onChange}
          placeholder='이름'
        />
      </div>
      <div>
        <input
          type='date'
          name='birth'
          value={input.birth}
          onChange={onChange}
        />
      </div>
      <div>
        <select
          name='country'
          value={input.country}
          onChange={onChange}
        >
          <option></option>
          <option value='kr'>한국</option>
          <option value='us'>미국</option>
          <option value='uk'>영국</option>
        </select>
      </div>
      <div>
        <textarea
          name='bio'
          value={input.bio}
          onChange={onChange}
          placeholder='자기소개'
        />
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
