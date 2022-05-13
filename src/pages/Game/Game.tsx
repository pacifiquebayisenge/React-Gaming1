import GameHole from "../../components/GameHole";
import { Link } from "react-router-dom";
import "./Game.scss";

import { batch, useDispatch, useSelector } from "react-redux";
import Timer from "../../components/Timer";
import { startTimer, stopGame, stopTimer, tick } from "../../actions";
import { ReducerState, useEffect } from "react";
import { stat } from "fs";
import { Reducer } from "redux";

function Game() {
  const dispatch = useDispatch();

  // score
  const gameObj = useSelector((state: any) => state.game);

  //const time = useSelector((state: any) => state.game.time);

  // boolean to kdisplay or hide the mole
  const isHidden = () => {
    const stateArr = [false, true];

    // random number between 0 and 1
    let rdmNr: number = Math.floor(Math.random() * (1 - 0 + 1) + 0);

    // return true or false on the basis of the random number
    return stateArr[rdmNr];
  };

  const setTimer = () => {
    const interval = setInterval(() => {
      dispatch(tick());
    }, 1000);

    dispatch(startTimer(interval));
  };

  return (
    <div className="game">
      <header>
        <h1> Game</h1>
        <Link to="/">Home </Link>

        <Timer timerObj={gameObj.time} highscore={gameObj.highscore} />
        <h2>Score: {gameObj.score}</h2>

        <button onClick={() => setTimer()}>start</button>
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
