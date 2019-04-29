import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import auth from "./ducks/auth";
import userInfo from "./ducks/userInfo";

const rootReducer = combineReducers({ auth, userInfo });

const store = createStore(rootReducer, applyMiddleware(promise));

export default store;
