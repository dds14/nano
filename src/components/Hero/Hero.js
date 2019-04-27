import React, { Component } from "react";
import "./Hero.scss";

export default class Hero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <div className="home-left">Home Left</div>
        <div className="home-right">Home Right</div>
      </div>
    );
  }
}
