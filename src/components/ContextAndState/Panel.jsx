import React, { useContext } from "react";
import { ChangeValueContext } from "./context";

export default function Panel() {
  const { value, setValue } = useContext(ChangeValueContext);
  return (
    <div>
      <h3>value: {value}</h3>
      <button
        onClick={() => {
          setValue("hello world");
        }}
      >
        Set value
      </button>
    </div>
  );
}
