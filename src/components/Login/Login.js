import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../ducks/auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.username);
    console.log(this.state.password);
  }
  handleSubmit(e) {
    e.preventDefault();

    this.props.login(this.state.username, this.state.password);
  }

  render() {
    if (this.props.auth.username) {
      return <Redirect to="/account" push={true} />;
    }
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input
              onChange={this.handleChange}
              value={this.state.username}
              name="username"
            />
          </label>
          <label>
            Password
            <input
              onChange={this.handleChange}
              value={this.state.password}
              name="password"
              type="password"
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(
  mapStateToProps,
  { login }
)(Login);
