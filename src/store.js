import { createStore, combineReducers, applyMiddleware } from "redux";

import promise from "redux-promise-middleware";
import auth from "./ducks/auth";
// import influencerInfo from "./ducks/___unused: influencerInfo";

const rootReducer = combineReducers({ auth });

const store = createStore(rootReducer, applyMiddleware(promise));

export default store;
