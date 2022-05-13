//interface model for the initial state  of the gamereducer
interface initStateFace {
  hasStarted: boolean;
  highscore: number;
  timerStarted: boolean;
  time: number;
  interval: NodeJS.Timer | undefined;
  score: number;
}

/* 
 * initialstate when the app gets loaded:

 * hasStarted: Wheter the game has started or not,  
 * highscore: personal highscore of the player
 * timerStarted: wheter the timer has started or not,
 * time: for how many seconds the game will run
 * offset: amount of seconds the timer will be decreased
 * interval: setInterval method to start the countdown of the timer
 * score: current score of the player

*/
const initialState: initStateFace = {
  hasStarted: false,

  highscore: 0,
  timerStarted: false,
  time: 10,
  interval: undefined,
  score: 0,
};

// reducer
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
    // when the game starts

    case "START_GAME":
      return {
        //copy current state props
        ...state,

        // game has started
        hasStarted: true,

        // look in local storage for any saved highscore else return 0
        highscore: Number(localStorage.getItem("HighScore"))
          ? Number(localStorage.getItem("HighScore"))
          : 0,
      };

    // when the game stops
    case "STOP_GAME":
      // get new highscore if new highscore is reached
      if (state.score > state.highscore) state.highscore = state.score;

      // save new highscore in local storage
      localStorage.setItem("Highscore", state.highscore.toString());

      return {
        //copy init state props
        ...initialState,

        // keep  highscore
        highscore: state.highscore,
      };

    // when timer starts
    case "START_TIMER":
      return {
        // copy current state props
        ...state,

        // get given setinetval method
        interval: action.interval,
      };

    //when timer stops
    case "STOP_TIMER":
      // clear given interval to stop the countdown
      clearInterval(state.interval);

      return {
        // copy current state props
        ...state,

        // put current time back to 30 seconds

        time: 30,

        // clear the setInterval method holder
        interval: undefined,
      };

    // for each count of the timer countdown
    case "TICK":
      return {
        // copy current state props
        ...state,

        // decrease timer seconds by 1
        time: (state.time = state.time - 1),
      };

    // when hit a mole
    case "INCREMENT":
      return {
        // copy current state props
        ...state,

        // increase score with one
        score: (state.score = state.score + 1),
      };

    default:
      return state;
  }
};

export default gameReducer;
