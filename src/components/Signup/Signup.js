import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../ducks/auth";

import "./Signup.scss";

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      button: false,
      redirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.signUp(
      this.state.username,
      this.state.email,
      this.state.password
    );
    this.setState({ button: true });
  }

  render() {
    // console.log(this.state.password);
    if (this.state.button) {
      return <Redirect to="/" />;
    }
    return (
      <div className="signup">
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <h1 className="signup-header">SIGN UP</h1>
          <label>
            <input
              className="signup-username-input"
              placeholder="USERNAME"
              onChange={this.handleChange}
              value={this.state.username}
              name="username"
            />
          </label>
          <label className="signup-email-label">
            <input
              className="signup-email-input"
              placeholder="EMAIL"
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
            />
          </label>
          <label>
            <input
              className="signup-password-input"
              placeholder="PASSWORD"
              onChange={this.handleChange}
              value={this.state.password}
              name="password"
            />
          </label>
          <button
          // className="signup-form-submit-button"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(
  mapStateToProps,
  { signUp }
)(Signup);
