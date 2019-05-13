import React, { Component } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Profile.scss";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: [],
      profilepicture: "",
      atname: "",
      followercount: "",
      averagelikes: "",
      averagecomments: "",
      engagementrate: "",
      priceperpost: "",
      audiencebreakdown: "",
      accountdescription: "",
      email: "",
      igaccountname: "",
      contactinfo: "",
      showEdit: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/profile/${this.props.match.params.id}`).then(res => {
      console.log(res);
      this.setState({
        profile: res.data,
        profilepicture: res.data[0].profilepicture,
        atname: res.data[0].atname,
        followercount: res.data[0].followercount,
        averagelikes: res.data[0].averagelikes,
        averagecomments: res.data[0].averagecomments,
        engagementrate: res.data[0].engagementrate,
        priceperpost: res.data[0].priceperpost,
        audiencebreakdown: res.data[0].audiencebreakdown,
        accountdescription: res.data[0].accountdescription,
        email: res.data[0].email
      });
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // Edit Profile
  handleSubmit() {
    console.log("HANDLE SUBMIT: EDITING THE PROFILE");
    axios
      .put("/api/editprofile", {
        profilepicture: this.state.profilepicture,
        atname: this.state.atname,
        followercount: this.state.followercount,
        averagelikes: this.state.averagelikes,
        averagecomments: this.state.averagecomments,
        engagementrate: this.state.engagementrate,
        priceperpost: this.state.priceperpost,
        audiencebreakdown: this.state.audiencebreakdown,
        accountdescription: this.state.accountdescription,
        email: this.state.email
      })
      .then(res => {
        this.setState({
          profile: res.data
        });
      });
  }

  // This page will display the current users profile
  // Each part of their profile will be editable, which will manipulate the database
  render() {
    console.log("helloooo");
    console.log(this.state.profile);
    console.log("this.state.profile");
    console.log("PROFILE PICTURE: ", this.state.profilepicture);

    return (
      <div>
        <Navbar />
        <button
          className="edit-profile-button"
          onClick={() => {
            this.setState({ showEdit: !this.state.showEdit });
          }}
        >
          Edit Profile
        </button>
        {/* Edit Profile Form - only shown when 'Edit Profile' button is clicked */}
        {/* FORM DIV START */}
        <div>
          {this.state.showEdit === true ? (
            <div className="edit-profile-container">
              <form
                autocomplete="off"
                className="edit-profile-form"
                onSubmit={this.handleSubmit}
              >
                <h1 className="edit-profile-header">— Edit Profile —</h1>
                <div>
                  <input
                    placeholder="Profile Picture (link)"
                    onChange={this.handleChange}
                    value={this.state.profilepicture}
                    name="profilepicture"
                  />
                  <input
                    placeholder="IG Username"
                    onChange={this.handleChange}
                    value={this.state.atname}
                    name="atname"
                  />
                  <input
                    placeholder="Followers"
                    onChange={this.handleChange}
                    value={this.state.followercount}
                    name="followercount"
                  />

                  <input
                    placeholder="Average Likes"
                    onChange={this.handleChange}
                    value={this.state.averagelikes}
                    name="averagelikes"
                  />
                  <input
                    placeholder="Average Comments"
                    onChange={this.handleChange}
                    value={this.state.averagecomments}
                    name="averagecomments"
                  />

                  {/* HALFWAY POINT */}
                  <input
                    placeholder="Engagement Rate"
                    onChange={this.handleChange}
                    value={this.state.engagementrate}
                    name="engagementrate"
                  />
                  <input
                    placeholder="Price Per Post"
                    onChange={this.handleChange}
                    value={this.state.priceperpost}
                    name="priceperpost"
                  />
                  <input
                    placeholder="Audience Breakdown"
                    onChange={this.handleChange}
                    value={this.state.audiencebreakdown}
                    name="audiencebreakdown"
                  />
                  <input
                    placeholder="Bio"
                    onChange={this.handleChange}
                    value={this.state.accountdescription}
                    name="accountdescription"
                  />
                  <input
                    placeholder="Email Address"
                    onChange={this.handleChange}
                    value={this.state.email}
                    name="email"
                  />
                </div>
                <button className="edit-profile-submit-button">
                  Save Changes
                </button>
              </form>
            </div>
          ) : (
            <div className="entire-profile-page">
              {this.state.profile.map((val, index) => {
                return (
                  <div>
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
                        <p>{"IG Username: " + val.atname}</p>
                        <br />
                        <p>{"Followers: " + val.followercount}</p>
                        <br />
                        <p>{"Average Likes: " + val.averagelikes}</p>
                        <br />
                        <p>{"Average Comments: " + val.averagecomments}</p>
                        <br />
                      </div>
                      <div className="profile-right-side">
                        <p>{"Engagement Rate: " + val.engagementrate}</p>
                        <br />
                        <p>{"Price Per Post: " + val.priceperpost}</p>
                        <br />
                        <p>{"Audience Breakdown: " + val.audiencebreakdown}</p>
                        <br />
                        <p>{"Bio: " + val.accountdescription}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {/* FORM DIV END */}
        {/* <Footer /> */}
      </div>
    );
  }
}
