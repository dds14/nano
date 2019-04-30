import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export function influencerDashboard(props) {
  return (
    <div>
      <h1>props will go here</h1>
      {/* <h1>{props.influencerInfo.followerCount}</h1> */}
    </div>
  );
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(influencerDashboard);
