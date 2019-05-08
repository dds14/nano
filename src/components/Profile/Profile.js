import React, { Component } from "react";
import axios from "axios";
// import { connect } from "react-redux";
// import { getSession } from "";
// import { Link } from "react-router-dom";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: []
    };
  }

  componentDidMount() {
    axios.get(`/api/profile/${this.props.match.params.id}`).then(res => {
      this.setState({
        profile: res.data
      });
    });
  }

  render() {
    console.log("state of the profile below");
    console.log(this.state.profile);
    // console.log(this.props);
    // This page will display the current users profile
    // Each part of their profile will be editable, which will manipulate the database
    return (
      <div className="whole-div">
        {this.state.profile.map((val, index) => {
          return (
            <div>
              <div>
                <h1>{val.followercount}</h1>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
