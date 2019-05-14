import React, { Component } from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";

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
              {/* BOX ANIMATION START */}
              {/* <div className="box">
                <div className="coin" />
              </div> */}
              {/* BOX ANIMATION END */}
              {/* BALLS ANIMATION START */}
              <div className="balls-div">
                <div class="balls">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
              {/* BALLS ANIMATION END */}

              <h1 className="home-nano">Nano</h1>
            </span>
            {/* <div class="box">
              <div class="coin" />
            </div> */}
            <br />
            <h3 className="home-tagline">Influencer Marketing Made Easy</h3>
          </div>

          <div className="hero-buttons">
            <Link to="/learn">
              <button className="hero-button-1">Learn More</button>
            </Link>
          </div>
        </div>
        <div className="home-right">
          <img
            className="girl1"
            src="https://images.unsplash.com/photo-1530131272429-0ad33e79aeb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="logo"
          />
        </div>
      </div>
    );
  }
}
