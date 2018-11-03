import React, { useContext } from "react";
import { TodoContext } from "../todoContext";

export default () => {
  const { todos, toggleComplete } = useContext(TodoContext);
  return (
    <div>
      <ul>
        {todos.map(({ text, complete }, idx) => (
          <li
            key={idx}
            onClick={() => toggleComplete(idx)}
            style={{
              textDecoration: complete ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};
