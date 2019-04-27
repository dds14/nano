import React from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import App from "./App";

export default (
  <Switch>
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route exact path="/" component={Home} />
  </Switch>
);
