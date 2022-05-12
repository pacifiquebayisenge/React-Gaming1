import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header className="App-header">
      <h1> Whack a Mole</h1>
      <Link to="/game">Game </Link>
      <Link to="/about">About </Link>
    </header>
  );
};

export default Home;
