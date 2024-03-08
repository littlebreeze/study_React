import { useState } from 'react';
import useInput from '../hooks/useInput';

// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출할 수 없다.
// 3. 나만의 훅을 직접 만들 수 있다.

const HookExam = () => {
  const [input, onChange] = useInput();
  // 커스텀 훅으로 만들어두면 이런식으로 재사용 가능!
  const [input2, onChange2] = useInput();

  return (
    <div className='HookExam'>
      <input value={input} onChange={onChange} />
    </div>
  );
};

export default HookExam;
