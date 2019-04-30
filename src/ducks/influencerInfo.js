import axios from "axios";
// these need to match front end (influencerDashboard.js)
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

// Action Creator
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
    payload: axios.post("/auth/influencersignup", {
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

export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case `${INFLUENCER_SIGN_UP}_FULFILLED`:
      console.log(action.payload.data[0].igaccountname);
      return {
        ...state,
        igAccountName: action.payload.data[0].igaccountname,
        atName: action.payload.data[0].atname,
        profilePicture: action.payload.data[0].profilepicture,
        accountDescription: action.payload.data[0].accountdescription,
        followerCount: action.payload.data[0].followercount,
        averageLikes: action.payload.data[0].averagelikes,
        averageComments: action.payload.data[0].averagecomments,
        engagementRate: action.payload.data[0].engagementrate,
        audienceBreakdown: action.payload.data[0].audiencebreakdown,
        pricePerPost: action.payload.data[0].priceperpost,
        contactInfo: action.payload.data[0].contactinfo
      };
    default:
      return state;
  }
}
