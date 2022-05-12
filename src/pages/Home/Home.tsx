import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <main className="home">
      <header className="home-header">
        <h1> Whack a Mole</h1>
      </header>
      <body>
        <nav className="home-nav">
          <Link to="/game">Game </Link>
          <Link to="/about">About </Link>
        </nav>
      </body>
    </main>
  );
};

export default Home;
