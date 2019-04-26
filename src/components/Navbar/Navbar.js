import React, { Component } from "react";
import "./Navbar.scss";

export default class Navbars extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <div className="nav-left-side">
          <p className="nav-brands">Brands</p>
          <p className="nav-influencer">I'm an influencer</p>
        </div>
        <div className="nav-right-side">
          <button className="nav-login">Login</button>
          <button className="nav-sign-up">Sign up for free</button>
        </div>
      </div>
    );
  }
}
