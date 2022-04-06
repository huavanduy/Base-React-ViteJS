import { combineReducers } from "redux";
import testReducer from "./testReducer";

const appReducer = asyncReducers =>
  combineReducers({
    test: testReducer,
    ...asyncReducers
  });

function rootReducer(asyncReducers) {
  return appReducer(asyncReducers);
}

export default rootReducer;
