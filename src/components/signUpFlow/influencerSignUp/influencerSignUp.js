import React, { Component } from "react";

export default class brandSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      website: "",
      description: "",
      targetDemographic: "",
      missionStatement: "",
      budget: "",
      contactInfo: "",
      logo: ""
    };
  }

  render() {
    return (
      <div>
        <h1>INFLUENCER SIGN UP</h1>
      </div>
    );
  }
}
