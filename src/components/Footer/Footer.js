import React, { Component } from "react";
import fb_icon from "../../Images/fb_icon.png";
import ig_icon from "../../Images/ig_icon.png";
import twitter_icon from "../../Images/twitter_icon.png";

import "./Footer.scss";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-left">
          <h2 className="footer-left-header">Get in Touch</h2>
          <div className="footer-left-content">
            <p className="footer-left-paragraph">+1 (212) 825-3953</p>
            <br />
            <p className="footer-left-paragraph">hello@nanoapp.com</p>
            <br />
            <p className="footer-left-paragraph">
              145 2nd Ave, New York, NY 10021
            </p>
          </div>
          <p className="copyright">Copyright © 2019 Nano App Inc.</p>
        </div>
        {/* <div className="footer-middle">
          <h2 className="footer-left-header">Say Hello</h2>
          <div className="footer-form-div">
            <form autoComplete="off" className="footer-form">
              <input
                className="footer-name-input"
                placeholder="Name"
                name="name"
              />
              <input
                className="footer-email-input"
                placeholder="Email"
                name="email"
              />
              <input
                className="footer-phone-input"
                placeholder="Phone"
                name="phone"
              />
              <button className="footer-form-submit-button">Submit</button>
            </form>
          </div>
        </div> */}
        <div className="footer-right">
          <h2 className="footer-left-header">Keep Connected</h2>
          <div className="footer-left-content">
            <div className="facebook-footer">
              <img src={fb_icon} className="fb-logo" alt="facebook" />
              <p className="facebook-word">Facebook</p>
            </div>
            <div className="insta-footer">
              <img src={ig_icon} className="insta-logo" alt="facebook" />
              <p className="insta-word">Instagram</p>
            </div>
            <div className="twitter-footer">
              <img src={twitter_icon} className="twitter-logo" alt="facebook" />
              <p className="twitter-word">Twitter</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
