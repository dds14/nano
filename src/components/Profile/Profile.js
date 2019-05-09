import React, { Component } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./Profile.scss";

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
    // This page will display the current users profile
    // Each part of their profile will be editable, which will manipulate the database
    return (
      <div>
        <Navbar />
        <div className="entire-profile-page">
          {this.state.profile.map((val, index) => {
            return (
              <div>
                <div className="button-div">
                  <button className="edit-profile-button">Edit Profile</button>
                </div>
                <div className="profile-picture-pp-div">
                  <img
                    src={val.profilepicture}
                    alt="profile-picture"
                    className="profile-picture-pp"
                  />
                </div>
                <div className="profile-account-name">
                  <p>{val.igaccountname}</p>
                </div>
                <div className="all-profile-info">
                  <div className="profile-left-side">
                    <p>{"Followers: " + val.followercount}</p>
                    <br />
                    <p>{"Average Likes: " + val.averagelikes}</p>
                    <br />
                    <p>{"Average Comments: " + val.averagecomments}</p>
                    <br />
                    <p>{"Engagement Rate: " + val.engagementrate}</p>
                    <br />
                  </div>
                  <div className="profile-right-side">
                    <p>{"Description: " + val.followercount}</p>
                    <br />
                    <p>{"Price Per Post: " + val.priceperpost}</p>
                    <br />
                    <p>{"Audience Breakdown: " + val.audiencebreakdown}</p>
                    <br />
                    <p>{"Bio: " + val.accountdescription}</p>
                  </div>
                </div>
                {/* <div className="button-div">
                  <button className="edit-profile-button">Edit Profile</button>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
