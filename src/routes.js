import React from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Profile/Profile";
import Learn from "./components/Learn/Learn";
import influencerDashboard from "./components/Dashboards/influencerDashboard/influencerDashboard";

export default (
  <Switch>
    {/* <Route path="/influencer-dashboard" component={influencerDashboard} /> */}
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/contact" component={Contact} />
    <Route path="/profile/:id" component={Profile} />
    <Route path="/learn" component={Learn} />
    <Route exact path="/" component={Home} />
  </Switch>
);
