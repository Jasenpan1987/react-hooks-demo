import React from "react";
// import React, { useReducer } from "react";
// import { produce } from "immer";
import { useImmerReducer } from "use-immer";
import Form from "./Form";

// with use-immer (useImmerReducer)
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

// // with immer
// const todoReducer = (todos, action) => {
//   switch (action.type) {
//     case "ADD_TODO": {
//       return produce(todos, draftState => {
//         draftState.push({ text: action.text, complete: false });
//       });
//     }

//     case "TOGGLE_COMPLETE": {
//       const { index } = action;

//       return produce(todos, draftState => {
//         draftState[index].complete = !draftState[index].complete;
//       });
//     }

//     case "RESET_ALL_TODOS": {
//       return produce(todos, draftState => {
//         draftState.forEach(todo => (todo.complete = false));
//       });
//     }

//     case "CLEAR_ALL_TODOS": {
//       return [];
//     }

//     default: {
//       return todos;
//     }
//   }
// };

export default () => {
  const [todos, dispatch] = useImmerReducer(todoReducer, []);

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
