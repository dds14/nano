import React from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Profile/Profile";
// import influencerSignUp from "./components/___unused: signUpFlow/influencerSignUp/influencerSignUp";
// import brandSignUp from "./components/___unused: signUpFlow/brandSignUp/brandSignUp";
import influencerDashboard from "./components/Dashboards/influencerDashboard/influencerDashboard";

export default (
  <Switch>
    <Route path="/influencer-dashboard" component={influencerDashboard} />
    <Route path="/contact" component={Contact} />
    {/* <Route path="/influencer-signup" component={influencerSignUp} /> */}
    {/* <Route path="/brand-signup" component={brandSignUp} /> */}
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/profile/:id" component={Profile} />
    <Route exact path="/" component={Home} />
  </Switch>
);
