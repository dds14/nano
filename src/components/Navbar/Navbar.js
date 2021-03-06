import React, { Component } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../Images/logo.png";
import hamburger from "../../Images/hamburger.png";
import { logout } from "../../ducks/auth";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
      id: null
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    axios.get("/api/users").then(res => {
      this.setState({
        id: res.data.userId
      });
    });
  }

  logout() {
    // console.log(this.props);
    this.props.logout().then(res => {
      this.setState({
        id: null
      });
    });
  }

  render() {
    if (this.state.id === null) {
      return (
        // LOGGED OUT NAVBAR
        <div className="navbar">
          <div className="hamburger">
            <img src={logo} className="hammy-logo" alt="logo" />
            <img src={hamburger} className="hammy" alt="hamburger" />
          </div>

          <div className="nav-left-side">
            <Link to="/">
              <img src={logo} className="nav-logo" alt="logo" />
            </Link>
            <Link to="/learn" className="nav-learn">
              <p className="nav-brands">Learn</p>
            </Link>
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
    } else {
      return (
        // LOGGED IN NAVBAR
        <div className="navbar">
          <div className="nav-left-side">
            <Link to="/">
              <img src={logo} className="nav-logo" alt="logo" />
            </Link>
            <Link to="/learn" className="nav-learn">
              <p className="nav-brands">Learn</p>
            </Link>
            <Link to="/contact" className="nav-influencer">
              Contact Us
            </Link>
          </div>
          <div className="nav-right-side">
            <Link to={`/profile/${this.state.id}`} className="nav-profile">
              My Profile
            </Link>
            <p className="nav-logout" onClick={this.logout}>
              {" "}
              Log Out
            </p>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(reduxState) {
  // console.log("REDUX STATE: ", reduxState);
  return reduxState;
}

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
