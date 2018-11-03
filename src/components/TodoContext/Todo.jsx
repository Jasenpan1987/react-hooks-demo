import React from "react";
import { useImmerReducer } from "use-immer";
import { TodoContext } from "./todoContext";
import TodoPanel from "./TodoPanel";

const todoReducer = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      todos.push({ text: action.text, complete: false });
      return;
    }

    case "TOGGLE_COMPLETE": {
      const { index } = action;
      todos[index].complete = !todos[index].complete;
      return;
    }

    case "RESET_ALL_TODOS": {
      todos.forEach(todo => (todo.complete = false));
      return;
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
  const [todos, dispatch] = useImmerReducer(todoReducer, []);

  const addTodo = text => {
    return dispatch({ type: "ADD_TODO", text });
  };
  const toggleComplete = index => {
    return dispatch({
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

  return (
    <div className="App">
      <TodoContext.Provider
        value={{ todos, addTodo, clearAllTodos, resetAllTodos, toggleComplete }}
      >
        <TodoPanel />
      </TodoContext.Provider>
    </div>
  );
};
