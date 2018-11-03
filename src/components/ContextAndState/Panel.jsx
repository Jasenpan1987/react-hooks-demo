import React, { useContext } from "react";
import { ChangeValueContext } from "./context";

export default function Panel() {
  const { person, growup, tiaocao } = useContext(ChangeValueContext);
  return (
    <div>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <h3>Company: {person.company}</h3>
      <button onClick={growup}>长一岁</button>
      <button
        onClick={() => {
          tiaocao("Google");
        }}
      >
        跳槽
      </button>
    </div>
  );
}
