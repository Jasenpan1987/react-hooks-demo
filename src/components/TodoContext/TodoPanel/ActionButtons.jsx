import React, { useContext } from "react";
import { TodoContext } from "../todoContext";

export default () => {
  const { resetAllTodos, clearAllTodos } = useContext(TodoContext);
  return (
    <div>
      <button onClick={resetAllTodos}>Reset All Todos</button>
      <button onClick={clearAllTodos}>Clear All Todos</button>
    </div>
  );
};
