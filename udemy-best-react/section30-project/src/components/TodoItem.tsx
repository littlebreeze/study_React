import { FC } from 'react';
import Todo from '../models/todo';
import classes from './TodoItem.module.css';

const TodoItem: FC<{ item: Todo; onRemoveTodo: (id: string) => void }> = ({ item, onRemoveTodo }) => {
  const clickTodoItemHandler = () => {
    onRemoveTodo(item.id);
  };
  return (
    <li className={classes.item} onClick={clickTodoItemHandler}>
      {item.id} + {item.text}
    </li>
  );
};
export default TodoItem;
