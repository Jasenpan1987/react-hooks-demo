import React, { useState } from "react";
import Form from "./Form";

export default () => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = i => {
    const targetTodo = todos[i];
    return setTodos([
      ...todos.slice(0, i),
      { ...targetTodo, complete: !targetTodo.complete },
      ...todos.slice(i + 1, todos.length)
    ]);
  };

  const resetAllTodos = () => {
    return setTodos(todos.map(todo => ({ ...todo, complete: false })));
  };

  const clearAllTodos = () => {
    return setTodos([]);
  };

  return (
    <div className="App">
      <Form
        handleSubmit={text => setTodos([{ text, complete: false }, ...todos])}
      />
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
      <button onClick={resetAllTodos}>Reset All Todos</button>
      <button onClick={clearAllTodos}>Clear All Todos</button>
    </div>
  );
};
