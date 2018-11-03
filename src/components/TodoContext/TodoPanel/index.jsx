import React from "react";
import ActionButtons from "./ActionButtons";
import Form from "./Form";
import TodoList from "./TodoList";

export default () => (
  <React.Fragment>
    <ActionButtons />
    <Form />
    <TodoList />
  </React.Fragment>
);
