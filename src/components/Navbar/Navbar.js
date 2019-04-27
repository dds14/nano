import React, { Component } from "react";
import "./Navbar.scss";
import logo from "../../Images/logo.png";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <div className="nav-left-side">
          <img src={logo} className="nav-logo" alt="logo" />
          <p className="nav-brands">Brands</p>
          <p className="nav-influencer">I'm an influencer</p>
        </div>
        <div className="nav-right-side">
          <button className="nav-login">Login</button>
          <button className="nav-sign-up">
            <span className="sign-up-span">Sign up for free</span>
          </button>
        </div>
      </div>
    );
  }
}
