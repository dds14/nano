import React, { Component } from "react";

import "./Footer.scss";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-left">Left</div>
        <div className="footer-middle">Middle</div>
        <div className="footer-right">Right</div>
      </div>
    );
  }
}
