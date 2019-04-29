import React, { Component } from "react";
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
      influencer: false,
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
      this.state.password,
      this.state.influencer
    );
    this.setState({ button: true });
  }

  render() {
    if (this.state.button) {
      if (this.state.influencer === true) {
        return <Redirect to="/influencer-signup" />;
      } else {
        return <Redirect to="/brand-signup" />;
      }
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
          {/* Brand Checkbox */}
          <div className="signup-checkboxes">
            <div>
              <input
                type="radio"
                className="signup-brand-input-label"
                name="brand"
                value="brand"
                onChange={e => this.setState({ influencer: false })}
                checked={this.state.influencer === false}
              />
              <label for="brand" className="signup-brand-input-label">
                I'm a brand
              </label>
            </div>
            {/* Influencer Checkbox */}

            <div>
              <input
                type="radio"
                className="signup-influencer-input-checkbox"
                name="influencer"
                value="influencer"
                onChange={e => this.setState({ influencer: true })}
                checked={this.state.influencer === true}
              />
              <label for="influencer" className="signup-influencer-input-label">
                I'm an influencer
              </label>
            </div>
          </div>
          <button className="signup-form-submit-button">Submit</button>
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
