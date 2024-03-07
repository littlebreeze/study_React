import { useState } from 'react';
const Register = () => {
  const [name, setName] = useState('이름');
  const [birth, setBirth] = useState('');
  const [country, setCountry] = useState('uk');
  const [bio, setBio] = useState('자기소개');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div className='Register'>
      <div>
        <input
          value={name}
          onChange={onChangeName}
          placeholder='이름'
        />
      </div>
      <div>
        <input
          type='date'
          value={birth}
          onChange={onChangeBirth}
        />
      </div>
      <div>
        <select
          value={country}
          onChange={onChangeCountry}
        >
          <option value='kr'>한국</option>
          <option value='us'>미국</option>
          <option value='uk'>영국</option>
        </select>
      </div>
      <div>
        <textarea
          value={bio}
          onChange={onChangeBio}
          placeholder='자기소개'
        />
      </div>
    </div>
  );
};

export default Register;
