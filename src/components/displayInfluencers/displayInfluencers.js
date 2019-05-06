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
      <div className="display-influencers">
        <h1 className="home-influencers-title">Our Influencers</h1>
        <div className="whole-div">
          {this.state.influencerProfiles.map((val, index) => {
            return (
              <div className="overall-account-display">
                <div className="home-account-name">{val.igaccountname}</div>
                <img
                  src={val.profilepicture}
                  alt="influencer-profile-picture"
                  className="home-profile-picture"
                />
                <div className="home-account-atname">
                  {"Username: " + val.atname}
                </div>
                <div className="home-follower-count">
                  {"Followers: " + val.followercount}
                </div>
                <div className="home-average-likes">
                  {"Average Likes: " + val.averagelikes}
                </div>
                <div className="ello">
                  <div className="home-contact-influencer">
                    <button className="home-contact-influencer-button">
                      {" "}
                      <a href={"mailto:" + val.email}>Contact</a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
