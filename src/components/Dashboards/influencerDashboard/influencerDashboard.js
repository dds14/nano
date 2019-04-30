import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { influencerSignUp } from "../../../ducks/influencerInfo";
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
    console.log(this.state.info);
    {
      this.state.info.map((val, index) => {
        console.log("here is state.info" + this.state.info);
        return (
          <div>
            <h3>{val.id}</h3>
          </div>
        );
      });
    }
    return (
      <div>
        <h1>props will go here</h1>
        <p>stuff goes here </p>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    followerCount: reduxState.influencerInfo.followerCount
  };
};

export default connect(
  mapStateToProps,
  { influencerSignUp }
)(influencerDashboard);
