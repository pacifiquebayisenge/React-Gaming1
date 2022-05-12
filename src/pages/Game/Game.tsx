import React from "react";
import { Link } from "react-router-dom";
import "./Game.scss";
function Game() {
  return (
    <main className="game">
      <header className="game-header">
        <h1> Game</h1>
        <Link to="/">Home </Link>
      </header>
      <body className="game-body"></body>
    </main>
  );
}

export default Game;
