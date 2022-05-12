import GameHole from "../../components/GameHole";
import React from "react";
import { Link } from "react-router-dom";
import "./Game.scss";
function Game() {
  return (
    <main className="game">
      <header>
        <h1> Game</h1>
        <Link to="/">Home </Link>
      </header>
      <body>
        <div className="game-background">
          <GameHole imgURL="" />
          <GameHole imgURL="" />
          <GameHole imgURL="" />
          <GameHole imgURL="" />
          <GameHole imgURL="" />
          <GameHole imgURL="" />
          <GameHole imgURL="" />
          <GameHole imgURL="" />
          <GameHole imgURL="" />
          <GameHole imgURL="" />
          <GameHole imgURL="" />
          <GameHole imgURL="" />
        </div>
      </body>
    </main>
  );
}

export default Game;
