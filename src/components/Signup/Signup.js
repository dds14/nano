import React, { Component } from "react";
import "./Signup.scss";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      redirect: false
    };
  }

  render() {
    return (
      <div className="signup">
        <form className="signup-form">
          <h1 className="signup-header">Signup</h1>
          <label>
            Username
            <input className="signup-username-input" />
          </label>
          <label>
            Password
            <input className="signup-password-input" />
          </label>
          <button className="signup-form-submit-button">Submit</button>
        </form>
      </div>
    );
  }
}
