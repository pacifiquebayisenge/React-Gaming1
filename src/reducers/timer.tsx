const timerReducer = (state = 30, action: { type: string }) => {
  switch (action.type) {
    case "Timer_Start":
      return state - 1;
    case "Timer_Reset":
      return (state = 30);
    default:
      return state;
  }
};

export default timerReducer;

/*
import _ from "lodash";
import Immutable from "seamless-immutable";

const initState = Immutable({
  // initial state of the game
  gameState: "notStarted",
  // how many moleHoles and hidden state
  moles: _.times(12, (i) => ({ index: i, moleState: "in" })),
  // how long the game will run
  gameLength: 30000,
  score: 0,
  highScore: 0,
});

// main reducer
export default function reducer(
  state = initState,
  action: { type: string; index: number }
) {
  switch (action.type) {
    case " Game_Start":
      return (
        state
          //game  started
          .set("gameState", "started")
          //score is  0
          .set("score", 0)
          //timer is initialized
          .set("time", state.gameLength)
          //the game will store the High Score acheived by the player in the Local Browser Storage
          .set("highScore", localStorage.getItem("highScore") || 0)
          //will initialize the display of the moles on randomized basis
          .set(
            "hippies",
            state.moles.map((mole) => mole.set("moleState", "in"))
          )
      );

    // when game starts, the timer will count down 1s at the time
    case "TICK":
      return state.update("time", (time: number) => time - 1000);

    //when  game ends
    case "GAMESTATE_END":
      // save  HighScore  in the Local  Storage
      if (state.score > state.highScore) {
        localStorage.setItem("highScore", state.score.toString());
      }
      // end game and hide moles
      return state.set("gameState", "gameover").set(
        "moles",
        state.moles.map((mole) => mole.set("moleState", "in"))
      );

    //case if the moles' state is 'out', then they will be displayed
    case "Mole_COMES_OUT":
      return state.setIn(["moles", action.index, "moleState"], "out");
    //case if the hippies' state is 'in', then they will be hidden again
    case "Mole_GOES_IN":
      return state.setIn(["moles", action.index, "moleState"], "in");

    ////case if the moles' are being hit with cursor, then the score will update with 1
    case "mole_HIT":
      return state
        .setIn(["moles", action.index, "moleState"], "hit")
        .update("score", (score) => score + 1);

    //default state is initialState
    default:
      return state;
  }
}
*/
