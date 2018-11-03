import React, { useState } from "react";
import { ChangeValueContext } from "./context";
import Panel from "./Panel";

const usePerson = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    person: value,
    growup: () => setValue({ ...value, age: value.age + 1 }),
    tiaocao: company => setValue({ ...value, company })
  };
};

export default () => {
  const { person, growup, tiaocao } = usePerson({
    name: "Jasen",
    age: 30,
    company: "ticketek"
  });

  return (
    <ChangeValueContext.Provider value={{ person, growup, tiaocao }}>
      <Panel />
    </ChangeValueContext.Provider>
  );
};
