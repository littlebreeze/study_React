import { useRef } from 'react';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInfutRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInfutRef.current!.value;

    if (enteredText?.trim().length === 0) {
      // error
      return;
    }

    // App 컴포넌트에서 새로운 todo 추가하기
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInfutRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
