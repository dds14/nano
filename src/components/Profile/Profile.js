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
    console.log("MOUNTED");
    axios.get(`/api/profile/${this.props.match.params.id}`).then(res => {
      console.log(res);
      this.setState({
        profile: res.data
      });
    });
  }

  render() {
    console.log(this.state.profile);
    console.log(this.props);
    // This page will display the current users profile
    // Each part of their profile will be editable, which will manipulate the database
    return (
      <div>
        <h1>Profile</h1>
      </div>
    );
  }
}
