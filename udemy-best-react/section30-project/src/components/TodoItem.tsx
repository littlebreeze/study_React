import { FC } from 'react';
import Todo from '../models/todo';
import classes from './TodoItem.module.css';

// onRemoveTodo에 event: React.MouseEvent를 인수로 적어줘도 되지만 여기서 안쓰니까 생략!
const TodoItem: FC<{ item: Todo; onRemoveTodo: () => void }> = ({ item, onRemoveTodo }) => {
  return (
    <li className={classes.item} onClick={onRemoveTodo}>
      {item.id} + {item.text}
    </li>
  );
};
export default TodoItem;
