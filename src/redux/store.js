import { combineReducers, createStore } from "redux";
import worksReducer from "./works-reducer";

let reducers = combineReducers({
     portfolioPage: worksReducer
});

let store = createStore(reducers);

export default store;