import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { influencerSignUp } from "../../../ducks/___unused: influencerInfo";
import axios from "axios";

export class influencerDashboard extends Component {
  constructor() {
    super();
    this.state = {
      info: []
    };
  }
  componentDidMount() {
    axios.get("/auth/influencersignup").then(res => {
      this.setState({ info: res.data });
    });
  }

  render() {
    console.log(this.props.reduxState);
    return (
      <div>
        <h1>{this.props.reduxState.igAccountName}</h1>
        <p>stuff goes here </p>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  console.log(reduxState);
  return {
    reduxState: reduxState.influencerInfo
  };
};

export default connect(
  mapStateToProps,
  { influencerSignUp }
)(influencerDashboard);
