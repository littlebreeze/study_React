import { FC } from 'react';
import Todo from '../models/todo';
import classes from './TodoItem.module.css';

const TodoItem: FC<{ item: Todo }> = ({ item }) => {
  return (
    <li className={classes.item}>
      {item.id} + {item.text}
    </li>
  );
};
export default TodoItem;
