import React, { Component } from "react";
import "./Login.scss";

export default class Login extends Component {
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
      <div className="login">
        <div className="">Login</div>
      </div>
    );
  }
}
