import GameHole from "../../components/GameHole";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Game.scss";

import { useDispatch, useSelector } from "react-redux";
import { timerStart } from "../../actions";

function Game() {
  const dispatch = useDispatch();
  const timer = useSelector((state: any) => state.timer);
  let stateArr = [false, true];

  let holes = document.getElementsByClassName("game-hole-empty");

  useEffect(() => {
    holes = document.getElementsByClassName("game-hole-empty");
  });

  const rdmHide = () => {
    let rdmNr: number;

    rdmNr = Math.floor(Math.random() * (1 - 0 + 1) + 0);

    //let rdmPos = holes[rdmNr];
    console.log(rdmNr);
    return rdmNr;
  };

  return (
    <div className="game">
      <header>
        <h1> Game</h1>
        <Link to="/">Home </Link>

        <h2>Timer: {timer}</h2>
      </header>
      <div className="game-body">
        <div className="game-background">
          <GameHole isEmpty={stateArr[rdmHide()]} />
          <GameHole isEmpty={stateArr[rdmHide()]} />
          <GameHole isEmpty={stateArr[rdmHide()]} />
          <GameHole isEmpty={stateArr[rdmHide()]} />
          <GameHole isEmpty={stateArr[rdmHide()]} />
          <GameHole isEmpty={stateArr[rdmHide()]} />
          <GameHole isEmpty={stateArr[rdmHide()]} />
          <GameHole isEmpty={stateArr[rdmHide()]} />
          <GameHole isEmpty={stateArr[rdmHide()]} />
          <GameHole isEmpty={stateArr[rdmHide()]} />
          <GameHole isEmpty={stateArr[rdmHide()]} />
          <GameHole isEmpty={stateArr[rdmHide()]} />
        </div>
      </div>
    </div>
  );
}

export default Game;
