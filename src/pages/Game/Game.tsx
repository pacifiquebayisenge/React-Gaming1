import GameHole from "../../components/GameHole";
import { Link } from "react-router-dom";
import "./Game.scss";

import { useDispatch, useSelector } from "react-redux";
import Timer from "../../components/Timer";
import { startTimer, tick } from "../../actions";

function Game() {
  const dispatch = useDispatch();

  // game object from game reducer
  const gameObj = useSelector((state: any) => state);

  // boolean to display or hide the mole
  const isHidden = () => {
    // random number between 0 and 10
    let rdmNr: number = Math.floor(Math.random() * 10);

    // 2  chace out of 10 to show the mole else hidden
    if (rdmNr === 1 || rdmNr === 9) return false;
    return true;
  };

  // start the time
  const setTimer = () => {
    // interval method to dispatch a tick action to the game reducer every 1 second
    const interval = setInterval(() => {
      dispatch(tick());
    }, 1000);

    // start timer action dispatcher with the interval property
    dispatch(startTimer(interval));
  };

  return (
    <div className="game">
      <header>
        <h1> Game</h1>
        <Link to="/">Home </Link>

        <Timer timerObj={gameObj.time} />
        <h2>Score: {gameObj.score}</h2>

        <button
          onClick={() => {
            setTimer();
          }}
        >
          start
        </button>
      </header>
      <div className="game-body">
        <div className="game-background">
          <GameHole isEmpty={isHidden()} />
          <GameHole isEmpty={isHidden()} />
          <GameHole isEmpty={isHidden()} />
          <GameHole isEmpty={isHidden()} />
          <GameHole isEmpty={isHidden()} />
          <GameHole isEmpty={isHidden()} />
          <GameHole isEmpty={isHidden()} />
          <GameHole isEmpty={isHidden()} />
          <GameHole isEmpty={isHidden()} />
          <GameHole isEmpty={isHidden()} />
          <GameHole isEmpty={isHidden()} />
          <GameHole isEmpty={isHidden()} />
        </div>
      </div>
    </div>
  );
}

export default Game;
