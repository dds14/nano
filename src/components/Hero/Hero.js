import React, { Component } from "react";
import "./Hero.scss";

export default class Hero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <div className="home-left">
          <div className="home-header">
            <span className="hero-span">
              <h1 className="home-nano">Nano</h1>
            </span>
            <br />
            <h3 className="home-tagline">Influencer Marketing Made Eas</h3>
          </div>

          <div className="hero-buttons">
            <button className="hero-button-1">Learn More</button>
          </div>
        </div>
        <div className="home-right">
          <img
            className="girl1"
            src="https://images.unsplash.com/photo-1524508368610-eec9c872de62?ixlib=rb-1.2.1&auto=format&fit=crop&w=2800&q=80"
            alt="logo"
          />
        </div>
      </div>
    );
  }
}
