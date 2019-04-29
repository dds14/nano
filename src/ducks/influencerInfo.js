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
  switch (action.type) {
    case `${INFLUENCER_SIGN_UP}_FULFILLED`:
      return {
        ...state,
        igAccountName: action.payload.data.igAccountName,
        atName: action.payload.data.atName,
        profilePicture: action.payload.data.profilePicture,
        accountDescription: action.payload.data.accountDescription,
        followerCount: action.payload.data.followerCount,
        averageLikes: action.payload.data.averageLikes,
        averageComments: action.payload.data.averageComments,
        engagementRate: action.payload.data.engagementRate,
        audienceBreakdown: action.payload.data.audienceBreakdown,
        pricePerPost: action.payload.data.pricePerPost,
        contactInfo: action.payload.data.contactInfo
      };
    default:
      return state;
  }
}
