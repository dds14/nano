import React from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import App from "./App";

export default (
  <Switch>
    <Route path="/signup" component={Signup} />
    <Route exact path="/" component={Home} />
  </Switch>
);
