import React from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import influencerDashboard from "./components/Dashboards/influencerDashboard/influencerDashboard";
import brandDashboard from "./components/Dashboards/brandDashboard/brandDashboard";
import App from "./App";

export default (
  <Switch>
    <Route path="/influencer-dashboard" component={influencerDashboard} />
    <Route path="/brand-dashboard" component={brandDashboard} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route exact path="/" component={Home} />
  </Switch>
);
