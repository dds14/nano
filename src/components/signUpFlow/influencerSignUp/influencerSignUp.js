import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { influencerSignUp } from "../../../ducks/influencerInfo";

export class influencerCreateInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      igAccountName: "",
      atName: "",
      profilePicture: "",
      accountDescription: "",
      followerCount: "",
      averageLikes: "",
      averageComments: "",
      engagementRate: "",
      audienceBreakdown: "",
      pricePerPost: "",
      contactInfo: "",
      button: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state.audienceBreakdown);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.influencerSignUp(
      this.state.igAccountName,
      this.state.atName,
      this.state.profilePicture,
      this.state.accountDescription,
      this.state.followerCount,
      this.state.averageLikes,
      this.state.averageComments,
      this.state.engagementRate,
      this.state.audienceBreakdown,
      this.state.pricePerPost,
      this.state.contactInfo
    );
    this.setState({ button: true });
  }

  render() {
    if (this.state.button) {
      return <Redirect to="/influencer-dashboard" />;
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(
  mapStateToProps,
  { influencerSignUp }
)(influencerCreateInfo);
