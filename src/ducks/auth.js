import axios from "axios";

const initialState = {
  username: "",
  email: "",
  password: "",
  admin: false
};

// Action Types
const SIGN_UP = "SIGN_UP";
const LOGIN = "LOGIN";
const ME = "ME";

// Action Creator
export function signUp(username, email, password) {
  return {
    type: SIGN_UP,
    payload: axios.post("/auth/signup", { username, email, password })
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
      return {
        ...state,
        username: action.payload.data.username,
        email: action.payload.data.email,
        password: action.payload.data.password
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
