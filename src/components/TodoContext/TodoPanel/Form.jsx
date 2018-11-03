import React, { useState, useContext } from "react";
import { TodoContext } from "../todoContext";

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value),
    reset: () => setValue("")
  };
};

export default () => {
  const { addTodo } = useContext(TodoContext);

  const { reset, ...text } = useInputValue("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addTodo(text.value);
        reset();
      }}
    >
      <input placeholder="Add todo" type="text" {...text} />
    </form>
  );
};
