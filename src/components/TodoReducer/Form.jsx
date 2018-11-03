import React, { useState } from "react";

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value),
    reset: () => setValue("")
  };
};

export default React.memo(({ dispatch }) => {
  console.log("rerender form");
  const { reset, ...text } = useInputValue("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "ADD_TODO", text: text.value });
        reset();
      }}
    >
      <input placeholder="Add todo" type="text" {...text} />
    </form>
  );
});
