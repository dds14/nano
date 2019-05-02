import React, { Component } from "react";
import axios from "axios";
import "./displayInfluencers.scss";

export default class DisplayInfluencers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      influencerProfiles: []
    };
  }

  componentDidMount(e) {
    axios.get("/auth/influencerprofiles").then(res => {
      this.setState({ influencerProfiles: res.data });

      //   console.log(this.state.influencerProfiles);
    });
  }

  render() {
    return (
      <div>
        {this.state.influencerProfiles.map((val, index) => {
          return (
            <div className="overall-account-display">
              <div className="home-account-name">{val.igaccountname}</div>
              <img
                src={val.profilepicture}
                alt="influencer-profile-picture"
                className="home-profile-picture"
              />
            </div>
          );
        })}
      </div>
    );
  }
}
