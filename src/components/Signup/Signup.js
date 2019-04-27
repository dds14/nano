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
          <h1 className="signup-header">SIGN UP</h1>
          <label>
            {/* Username */}
            <input className="signup-username-input" placeholder="USERNAME" />
          </label>
          <label className="signup-email-label">
            {/* Email */}
            <input className="signup-email-input" placeholder="EMAIL" />
          </label>
          <label>
            {/* Password */}
            <input className="signup-password-input" placeholder="PASSWORD" />
          </label>
          <button className="signup-form-submit-button">Submit</button>
        </form>
      </div>
    );
  }
}
