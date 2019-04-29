import React from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import influencerSignUp from "./components/signUpFlow/influencerSignUp/influencerSignUp";
import brandSignUp from "./components/signUpFlow/brandSignUp/brandSignUp";

export default (
  <Switch>
    <Route path="/influencer-signup" component={influencerSignUp} />
    <Route path="/brand-signup" component={brandSignUp} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route exact path="/" component={Home} />
  </Switch>
);
