import { useState } from 'react';
const Register = () => {
  const [input, setInput] = useState({
    name: '이름',
    birth: '',
    country: 'uk',
    bio: '자기소개',
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeName = (e) => {
    setInput({ ...input, name: e.target.value });
  };

  const onChangeBirth = (e) => {
    setInput({ ...input, birth: e.target.value });
  };

  const onChangeCountry = (e) => {
    setInput({
      ...input,
      country: e.target.value,
    });
  };

  const onChangeBio = (e) => {
    setInput({ ...input, bio: e.target.value });
  };

  return (
    <div className='Register'>
      <div>
        <input
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
    </div>
  );
};

export default Register;
