import React, { Component } from "react";
import infographic from "../../Images/infographic.png";
import "./Learn.scss";

export default class Learn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className="infographic" src={infographic} />
      </div>
    );
  }
}
