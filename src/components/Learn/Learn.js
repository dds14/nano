import React, { Component } from "react";
import infographic from "../../Images/infographic.png";

export default class Learn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={infographic} />
      </div>
    );
  }
}
