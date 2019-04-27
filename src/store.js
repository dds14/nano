import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import auth from "./ducks/auth";

const rootReducer = combineReducers({ auth });

const store = createStore(rootReducer, applyMiddleware(promise));

export default store;
