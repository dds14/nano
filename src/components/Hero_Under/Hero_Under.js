import React, { Component } from "react";
import "./Hero_Under.scss";
import logo from "../../Images/logo.png";
import discover_icon from "../../Images/discover_icon.png";
import communicate_icon from "../../Images/communicate_icon.png";
import pay_icon from "../../Images/pay_icon.png";

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
          <div className="under-icons">
            <div className="discover-icon-div">
              <div className="img-div">
                <img
                  src={discover_icon}
                  className="discover-image"
                  alt="discover"
                />
              </div>
              <div className="discover-content">
                <p className="discover-header">Discover</p>
                <p className="discover-blurb">
                  Find the perfect influncer to promote your brand.
                </p>
              </div>
            </div>
            {/* SECOND DIV STARTS (COMMUNICATE) */}
            <div className="discover-icon-div">
              <div className="img-div">
                <img
                  src={communicate_icon}
                  className="contact-image"
                  alt="discover"
                />
              </div>
              <div className="discover-content">
                <p className="discover-header">Contact</p>
                <p className="discover-blurb">
                  Communicate with influencers directly from our website.
                </p>
              </div>
            </div>
            {/* THIRD DIV STARTS (PAY)*/}
            <div className="discover-icon-div">
              <div className="img-div">
                <img src={pay_icon} className="pay-image" alt="discover" />
              </div>
              <div className="discover-content">
                <p className="discover-header">Pay</p>
                <p className="discover-blurb">
                  Negotiate a price based on our influencers' profiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
