import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export default class brandSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      website: "",
      description: "",
      targetDemographic: "",
      missionStatement: "",
      budget: "",
      contactInfo: "",
      logo: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.influencerSignUp(
      this.state.companyName,
      this.state.website,
      this.state.description,
      this.state.targetDemographic,
      this.state.missionStatement,
      this.state.budget,
      this.state.contactInfo,
      this.state.logo
    );
  }

  render() {
    return (
      <div>
        <form>
          <h1>INFLUENCER SIGN UP</h1>
          <label>
            <input
              placeholder="IG Account Name"
              onChange={this.handleChange}
              value={this.state.igAccountName}
              name="igAccountName"
            />
            <input
              placeholder="IG @Username"
              onChange={this.handleChange}
              value={this.state.atName}
              name="atName"
            />
            <input
              placeholder="Profile Picture (link)"
              onChange={this.handleChange}
              value={this.state.profilePicture}
              name="profilePicture"
            />
            <input
              placeholder="Describe Your Account"
              onChange={this.handleChange}
              value={this.state.accountDescription}
              name="accountDescription"
            />
            <input
              placeholder="Follower Count"
              onChange={this.handleChange}
              value={this.state.followerCount}
              name="followerCount"
            />
            <input
              placeholder="Average Likes Per Post"
              onChange={this.handleChange}
              value={this.state.averageLikes}
              name="averageLikes"
            />
            <input
              placeholder="Average Comments Per Post"
              onChange={this.handleChange}
              value={this.state.averageComments}
              name="averageComments"
            />
            <input
              placeholder="Engagement Rate %"
              onChange={this.handleChange}
              value={this.state.engagementRate}
              name="engagementRate"
            />
            <input
              placeholder="Audience Breakdown"
              onChange={this.handleChange}
              value={this.state.audienceBreakdown}
              name="audienceBreakdown"
            />
            <input
              placeholder="Price Per Post"
              onChange={this.handleChange}
              value={this.state.pricePerPost}
              name="pricePerPost"
            />
            <input
              placeholder="Contact Information"
              onChange={this.handleChange}
              value={this.state.contactInfo}
              name="contactInfo"
            />
          </label>
        </form>
      </div>
    );
  }
}
