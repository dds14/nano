import { createStore, combineReducers, applyMiddleware } from "redux";

import promise from "redux-promise-middleware";
import auth from "./ducks/auth";
import influencerInfo from "./ducks/influencerInfo";

const rootReducer = combineReducers({ auth, influencerInfo });

const store = createStore(rootReducer, applyMiddleware(promise));

export default store;
