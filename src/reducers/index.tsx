import counterReducer from "./counter";
import timerReducer from "./timer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  timer: timerReducer,
  counter: counterReducer,
});

export default allReducers;
