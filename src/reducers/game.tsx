const initialState = {
  hasStarted: false,
  highscore: [],
};

const gameReducer = (
  state = initialState,
  action: { type: string; score: number }
) => {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        hasStarted: true,
      };
    case "STOP_GAME":
      return {
        ...initialState,
        highscore: [...state.highscore, action.score],
      };

    default:
      return state;
  }
};

export default gameReducer;
