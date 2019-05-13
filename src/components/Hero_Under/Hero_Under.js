import React, { Component } from "react";
import "./Hero_Under.scss";
import logo from "../../Images/logo.png";
import fb_icon from "../../Images/fb_icon.png";

export default class Hero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero-under">
        <div className="hero-under-right">
          <img
            className="under1"
            src={logo}
            src="
            https://images.unsplash.com/photo-1550725650-c258d72de212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60
            "
            alt="logo"
          />
        </div>
        <div className="hero-under-right">
          <div className="under-right">
            <div className="under-header">
              <h1 className="under-h1">How It Works</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
