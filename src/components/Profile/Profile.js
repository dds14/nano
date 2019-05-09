import React, { Component } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./Profile.scss";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: [],
      igaccountname: "",
      atname: "",
      profilepicture: "",
      accountdescription: "",
      followercount: "",
      averagelikes: "",
      averagecomments: "",
      engagementrate: "",
      audiencebreakdown: "",
      priceperpost: "",
      contactinfo: "",
      showEdit: false
    };
  }

  componentDidMount() {
    axios.get(`/api/profile/${this.props.match.params.id}`).then(res => {
      this.setState({
        profile: res.data
      });
    });
  }

  // Edit Profile
  handleSubmit() {
    axios
      .put("/api/editprofile", {
        igaccountname: this.state.igaccountname,
        atname: this.state.atname,
        profilepicture: this.state.profilepicture,
        accountdescription: this.state.accountdescription,
        followercount: this.state.followercount,
        averagelikes: this.state.averagelikes,
        averagecomments: this.state.averagecomments,
        engagementrate: this.state.engagementrate,
        audiencebreakdown: this.state.audiencebreakdown,
        priceperpost: this.state.priceperpost,
        contactinfo: this.state.contactinfo
      })
      .then(res => {
        this.setState({
          profile: res.data,
          showEdit: false
        });
      });
  }

  render() {
    console.log(this.state.showEdit);
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
                  <button
                    className="edit-profile-button"
                    onClick={() => {
                      this.setState({ showEdit: true });
                    }}
                  >
                    Edit Profile
                  </button>
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
        {this.state.showEdit ? (
          <form
            onSubmit={this.handlesubmit}
            autoComplete="off"
            className="profile-form"
          >
            <label>Home Course</label>
            <input
              onChange={this.handleChange}
              placeholder="course"
              name="course"
              value={this.state.course}
              autoComplete="off"
            />
            <label> Handicap</label>
            <input
              onChange={this.handleChange}
              name="handicap"
              value={this.state.handicap}
              type="number"
              autoComplete="off"
            />
            <label>Rounds Per Year</label>
            <input
              value={this.state.rounds}
              onChange={this.handleChange}
              name="rounds"
              type="number"
              autoComplete="off"
            />
            <label>Career Hole in One</label>
            <input
              onChange={this.handleChange}
              value={this.state.career}
              name="career"
              type="number"
              autoComplete="off"
            />
            <button onClick={this.handleSubmit}>submit</button>
          </form>
        ) : null}
      </div>
    );
  }
}
