import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../ducks/auth";
import logo from "../../Images/logo.png";

import "./Signup.scss";

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      igaccountname: "",
      atname: "",
      profilepicture: "",
      accountdescription: "",
      followercount: "",
      averagelikes: "",
      averagecomments: "",
      engagementrate: "",
      audiencebreakdown: "",
      priceperpost: "",
      contactinfo: "",
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
      this.state.igaccountname,
      this.state.atname,
      this.state.profilepicture,
      this.state.accountdescription,
      this.state.followercount,
      this.state.averagelikes,
      this.state.averagecomments,
      this.state.engagementrate,
      this.state.audiencebreakdown,
      this.state.priceperpost,
      this.state.contactinfo
    );
    this.setState({ button: true });
  }

  render() {
    if (this.state.button) {
      return <Redirect to="/" />;
    }

    return (
      <div className="signup">
        <form
          autocomplete="off"
          className="signup-form"
          onSubmit={this.handleSubmit}
        >
          <img src={logo} className="signup-logo" alt="logo" />

          <h1 className="signup-header">SIGN UP</h1>
          <label>
            <h4 className="signup-nano-header">Nano Info</h4>
            <input
              className="signup-username-input"
              placeholder="Username"
              onChange={this.handleChange}
              value={this.state.username}
              name="username"
            />
          </label>
          <label className="signup-email-label">
            <input
              className="signup-email-input"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
            />
          </label>
          <label>
            <input
              className="signup-password-input"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
              name="password"
            />
            {/* <h4 className="signup-instagram-header">Instagram Info</h4>
            <input
              placeholder="IG Account Name"
              onChange={this.handleChange}
              value={this.state.igaccountname}
              name="igaccountname"
            />
            <input
              placeholder="IG @Username"
              onChange={this.handleChange}
              value={this.state.atname}
              name="atname"
            />
            <input
              placeholder="Profile Picture (link)"
              onChange={this.handleChange}
              value={this.state.profilepicture}
              name="profilepicture"
            />
            <input
              placeholder="Describe Your Account"
              onChange={this.handleChange}
              value={this.state.accountdescription}
              name="accountdescription"
            />
            <input
              placeholder="Follower Count"
              onChange={this.handleChange}
              value={this.state.followercount}
              name="followercount"
            />
            <input
              placeholder="Average Likes Per Post"
              onChange={this.handleChange}
              value={this.state.averagelikes}
              name="averagelikes"
            />
            <input
              placeholder="Average Comments"
              onChange={this.handleChange}
              value={this.state.averagecomments}
              name="averagecomments"
            />
            <input
              placeholder="Engagement Rate %"
              onChange={this.handleChange}
              value={this.state.engagementrate}
              name="engagementrate"
            />
            <input
              placeholder="Target Audience"
              onChange={this.handleChange}
              value={this.state.audiencebreakdown}
              name="audiencebreakdown"
            />
            <input
              placeholder="Price Per Post"
              onChange={this.handleChange}
              value={this.state.priceperpost}
              name="priceperpost"
            />
            <input
              placeholder="Contact Information"
              onChange={this.handleChange}
              value={this.state.contactinfo}
              name="contactinfo"
            /> */}
          </label>

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
