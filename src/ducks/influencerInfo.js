import axios from "axios";

const initialState = {
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
  contactInfo: ""
};

// Action Types
const INFLUENCER_SIGN_UP = "INFLUENCER_SIGN_UP";

// Action Types

export function influencerSignUp(
  igAccountName,
  atName,
  profilePicture,
  accountDescription,
  followerCount,
  averageLikes,
  averageComments,
  engagementRate,
  audienceBreakdown,
  pricePerPost,
  contactInfo
) {
  return {
    type: INFLUENCER_SIGN_UP,
    payload: axios.post("auth/influencersignup", {
      igAccountName,
      atName,
      profilePicture,
      accountDescription,
      followerCount,
      averageLikes,
      averageComments,
      engagementRate,
      audienceBreakdown,
      pricePerPost,
      contactInfo
    })
  };
}
