import React, { useReducer } from "react";
import Form from "./Form";

const todoReducer = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [...todos, { text: action.text, complete: false }];
    }

    case "TOGGLE_COMPLETE": {
      const { index } = action;
      const targetTodo = todos[index];
      return [
        ...todos.slice(0, index),
        { ...targetTodo, complete: !targetTodo.complete },
        ...todos.slice(index + 1, todos.length)
      ];
    }

    case "RESET_ALL_TODOS": {
      return todos.map(todo => ({ ...todo, complete: false }));
    }

    case "CLEAR_ALL_TODOS": {
      return [];
    }

    default: {
      return todos;
    }
  }
};

export default () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const toggleComplete = index => {
    dispatch({
      type: "TOGGLE_COMPLETE",
      index
    });
  };

  const resetAllTodos = () => {
    return dispatch({ type: "RESET_ALL_TODOS" });
  };

  const clearAllTodos = () => {
    return dispatch({ type: "CLEAR_ALL_TODOS" });
  };

  // const onSubmit = text => {
  //   return dispatch({ type: "ADD_TODO", text})
  // }

  return (
    <div className="App">
      <Form dispatch={dispatch} />
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
