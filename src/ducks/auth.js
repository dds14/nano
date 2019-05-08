import axios from "axios";

const initialState = {
  username: "",
  email: "",
  password: "",
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
  contactinfo: ""
};

// Action Types
const SIGN_UP = "SIGN_UP";
const LOGIN = "LOGIN";
const ME = "ME";
const GET_SESSION = "GET_SESSION";

// Action Creator
export function signUp(
  username,
  email,
  password,
  igaccountname,
  atname,
  profilepicture,
  accountdescription,
  followercount,
  averagelikes,
  averagecomments,
  engagementrate,
  audiencebreakdown,
  priceperpost,
  contactinfo
) {
  return {
    type: SIGN_UP,
    payload: axios.post("/auth/signup", {
      username,
      email,
      password,
      igaccountname,
      atname,
      profilepicture,
      accountdescription,
      followercount,
      averagelikes,
      averagecomments,
      engagementrate,
      audiencebreakdown,
      priceperpost,
      contactinfo
    })
  };
}

export function login(username, password) {
  return {
    type: LOGIN,
    payload: axios.post("/auth/login", { username, password })
  };
}

export function getSession() {
  return {
    type: GET_SESSION,
    payload: axios.get("/api/users")
  };
}

export function me() {
  return {
    type: ME,
    payload: axios.get("/auth/me")
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${SIGN_UP}_FULFILLED`:
      console.log(action.payload.data);
      return {
        ...state,
        username: action.payload.data.username,
        email: action.payload.data.email,
        password: action.payload.data.password,
        igaccountname: action.payload.data.igaccountname,
        atname: action.payload.data.atname,
        profilepicture: action.payload.data.profilepicture,
        accountdescription: action.payload.data.accountdescription,
        followercount: action.payload.data.followercount,
        averagelikes: action.payload.data.averagelikes,
        averagecomments: action.payload.data.averagecomments,
        engagementrate: action.payload.data.engagementrate,
        audiencebreakdown: action.payload.data.audiencebreakdown,
        priceperpost: action.payload.data.priceperpost,
        contactinfo: action.payload.data.contactinfo
      };
    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        username: action.payload.data.username,
        password: action.payload.data.password
      };
    case `${ME}_FULFILLED`:
      return {
        ...state,
        username: action.payload.data.username,
        password: action.payload.data.password
      };
    case `{GET_SESSION}_FULFILLED`:
      return {
        ...state,
        username: action.payload.data.username
      };
    default:
      return state;
  }
}
