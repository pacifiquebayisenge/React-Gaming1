const initialState = {
  hasStarted: false,
  time: 30,
  offset: 1,
  interval: undefined,
};

const timerReducer = (
  state = initialState,
  action: { type: string; offset: number; time: number; interval: NodeJS.Timer }
) => {
  switch (action.type) {
    case "START_TIMER":
      return {
        ...state,
        hasStarted: true,

        interval: action.interval,
      };
    case "STOP_TIMER":
      clearInterval(state.interval);
      return {
        ...initialState,
      };

    case "TICK":
      return {
        ...state,
        time: state.time - state.offset,
      };

    default:
      return state;
  }
};

export default timerReducer;
