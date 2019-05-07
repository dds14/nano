import React, { Component } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      // LOGGED OUT NAVBAR
      <div className="navbar">
        <div className="nav-left-side">
          <img src={logo} className="nav-logo" alt="logo" />
          <p className="nav-brands">Brands</p>
          <Link to="/contact" className="nav-influencer">
            Contact Us
          </Link>
        </div>
        <div className="nav-right-side">
          <Link to="/login" className="nav-login">
            Login
          </Link>
          <Link to="/signup" className="nav-sign-up">
            <span className="sign-up-span">Sign up for free</span>
          </Link>
        </div>
      </div>
    );
  }
}
