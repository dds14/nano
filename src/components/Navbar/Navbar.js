import React, { Component } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../Images/logo.png";
import { login } from "../../ducks/auth";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      id: null
    };
  }

  componentDidMount() {
    console.log("navbar mounted");
    axios.get("/api/users").then(res => {
      this.setState({
        id: res.data.userId
      });
    });
  }

  render() {
    return (
      // LOGGED OUT NAVBARr
      <div className="navbar">
        <div className="nav-left-side">
          <img src={logo} className="nav-logo" alt="logo" />
          <p className="nav-brands">Brands</p>
          <Link to="/contact" className="nav-influencer">
            Contact Us
          </Link>
        </div>
        <div className="nav-right-side">
          <Link to={`/profile/${this.state.id}`} className="nav-profile">
            Profile
          </Link>
          <Link to="/login" className="nav-login">
            Login
          </Link>
          <Link to="/login" className="nav" onClick={this.logout} />
          <Link to="/signup" className="nav-sign-up">
            <span className="sign-up-span">Sign up for free</span>
          </Link>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = reduxState => {
//   return {
//     username: reduxState.auth.username
//   };
// };
