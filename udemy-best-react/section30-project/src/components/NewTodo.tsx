import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  const todoTextInfutRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInfutRef.current!.value;

    if (enteredText?.trim().length === 0) {
      // error
      return;
    }

    // App 컴포넌트에서 새로운 todo 추가하기
    todoCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInfutRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
