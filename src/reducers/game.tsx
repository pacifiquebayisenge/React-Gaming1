interface initStateFace {
  hasStarted: boolean;
  highscore: number[];
  timerStarted: boolean;
  time: number;
  offset: number;
  interval: NodeJS.Timer | undefined;
  score: number;
}

const initialState: initStateFace = {
  hasStarted: false,
  highscore: [],
  timerStarted: false,
  time: 5,
  offset: 0,
  interval: undefined,
  score: 0,
};

const gameReducer = (
  state = initialState,
  action: {
    type: string;
    interval: NodeJS.Timer;
    score: number;
    offset: number;
  }
) => {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        hasStarted: true,
      };
    case "STOP_GAME":
      console.log("scorev:" + state.score);
      return {
        ...initialState,
        highscore: state.highscore,
      };
    case "START_TIMER":
      return {
        ...state,

        interval: action.interval,
      };
    case "STOP_TIMER":
      clearInterval(state.interval);
      console.log("score:" + state.score);
      state.highscore.push(state.score);
      return {
        ...state,
        time: 30,
        offset: 0,
        interval: undefined,
        highscore: state.highscore,
      };

    case "TICK":
      return {
        ...state,
        time: (state.time = state.time - action.offset),
      };
    case "INCREMENT":
      return {
        ...state,
        score: (state.score = state.score + 1),
      };

    default:
      return state;
  }
};

export default gameReducer;
