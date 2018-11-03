import React, { useState } from "react";
import { ChangeValueContext } from "./context";
import Panel from "./Panel";

export default () => {
  const [value, setValue] = useState("buy");

  return (
    <ChangeValueContext.Provider value={{ value, setValue }}>
      <Panel />
    </ChangeValueContext.Provider>
  );
};
