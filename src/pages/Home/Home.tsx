import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1> Whack a Mole</h1>
      </header>
      <div className=" home-body">
        <nav className="home-nav">
          <Link to="/game">Game </Link>
          <Link to="/about">About </Link>
        </nav>
        <div className="container"></div>
      </div>
    </div>
  );
};

export default Home;
