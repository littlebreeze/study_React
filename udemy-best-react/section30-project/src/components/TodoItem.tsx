import { FC } from "react";
import Todo from "../models/todo";

const TodoItem: FC<{ item: Todo }> = ({ item }) => {
  return (
    <li>
      {item.id} + {item.text}
    </li>
  );
};
export default TodoItem;
