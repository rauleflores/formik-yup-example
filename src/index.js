import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LoginForm from "./Forms/LoginForm";
import SignUpForm from "./Forms/SignUpForm";
import NoMatch from "./util/NoMatch";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Redirect exact from="/" to="/login" />
      <Switch>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/signup">
          <SignUpForm />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
