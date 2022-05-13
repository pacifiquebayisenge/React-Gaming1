import GameHole from "../../components/GameHole";
import { Link } from "react-router-dom";
import "./Game.scss";

import { useDispatch, useSelector } from "react-redux";
import Timer from "../../components/Timer";
import { startTimer, stopTimer, tick } from "../../actions";
import { useEffect } from "react";

function Game() {
  const dispatch = useDispatch();

  // score
  const counter = useSelector((state: any) => state.counter);

  // boolean to kdisplay or hide the mole
  const isHidden = () => {
    const stateArr = [false, true];

    // random number between 0 and 1
    let rdmNr: number = Math.floor(Math.random() * (1 - 0 + 1) + 0);

    // return true or false on the basis of the random number
    return stateArr[rdmNr];
  };
  let e = "edddd";
  const setTimer = () => {
    const interval = setInterval(() => {
      console.log(e);
      dispatch(tick());
    }, 1000);

    dispatch(startTimer(interval));
  };
  useEffect(() => {
    e = e + "bbb";
  });

  const stop = () => {
    dispatch(stopTimer());
  };

  return (
    <div className="game">
      <header>
        <h1 onClick={stop}> {e} Game</h1>
        <Link to="/">Home </Link>

        <Timer />
        <h2>Score: {counter}</h2>
      </header>
      <div className="game-body" onClick={setTimer}>
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
