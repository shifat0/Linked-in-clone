import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import useReducer from "./userReducer";

const rootReducer = combineReducers({
  userState: useReducer,
  articleState: articleReducer,
});

export default rootReducer;
