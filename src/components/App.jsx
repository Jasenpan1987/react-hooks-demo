import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Todo from "./Todo/Todo";
import Fetch from "./Fetch/Fetch";
import TodoReducer from "./TodoReducer/Todo";
import TodoContext from "./TodoContext/Todo";
import ChangeValue from "./ContextAndState";

import "./App.css";

const Header = () => {
  return (
    <header>
      <h1>Welcome to React-Hooks Examples</h1>
      <nav>
        <ul>
          <li>
            <Link to="/todos">Todo example</Link>
          </li>
          <li>
            <Link to="/fetch">Fetch example</Link>
          </li>
          <li>
            <Link to="/todoreducer">Todo with reducer</Link>
          </li>
          <li>
            <Link to="/todocontext">Todo with context</Link>
          </li>
          <li>
            <Link to="/changevalue">Change Value</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Home = () => (
  <section>
    <h2>You can see the examples here</h2>
  </section>
);

export default () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/todos" exact component={Todo} />
            <Route path="/fetch" exact component={Fetch} />
            <Route path="/todoreducer" exact component={TodoReducer} />
            <Route path="/todocontext" exact component={TodoContext} />
            <Route path="/changevalue" exact component={ChangeValue} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};
