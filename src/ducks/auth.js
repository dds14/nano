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
        username: action.payload.data[0].username,
        email: action.payload.data[0].email,
        password: action.payload.data[0].password,
        igaccountname: action.payload.data[0].igaccountname,
        atname: action.payload.data[0].atname,
        profilepicture: action.payload.data[0].profilepicture,
        accountdescription: action.payload.data[0].accountdescription,
        followercount: action.payload.data[0].followercount,
        averagelikes: action.payload.data[0].averagelikes,
        averagecomments: action.payload.data[0].averagecomments,
        engagementrate: action.payload.data[0].engagementrate,
        audiencebreakdown: action.payload.data[0].audiencebreakdown,
        priceperpost: action.payload.data[0].priceperpost,
        contactinfo: action.payload.data[0].contactinfo
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
    default:
      return state;
  }
}
