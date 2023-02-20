import { combineReducers } from "redux";
import { useReducer } from "react";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  userState: userReducer,
});

export default rootReducer;
