import React, { Component } from "react";
import axios from "axios";

export default class DisplayInfluencers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      influencerProfiles: []
    };
  }

  componentDidMount() {
    axios.get("auth/influencerprofiles").then(res => {
      this.setState({ influencerProfiles: res.data });
      //   console.log("hey");
      console.log(this.state.influencerProfiles);
    });
  }

  render() {
    return (
      <div>
        {this.state.influencerProfiles.map((val, index) => {
          return <div>{val.email}</div>;
        })}
      </div>
    );
  }
}
