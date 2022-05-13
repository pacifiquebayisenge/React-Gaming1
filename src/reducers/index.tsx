import counterReducer from "./counter";
import timerReducer from "./timer";
import gameReducer from "./game";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  // timer: timerReducer,
  //counter: counterReducer,
  game: gameReducer,
});

export default allReducers;
