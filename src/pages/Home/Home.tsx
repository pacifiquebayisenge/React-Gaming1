import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

const Home = () => {
  const myHishscore = localStorage.getItem("Highscore");
  return (
    <div className="home">
      <header className="home-header">
        <h1> Whack a Mole</h1>
      </header>
      <div className="home-body">
        <nav className="home-nav">
          <Link to="/game">Game </Link>
        </nav>
        <div className="home-body-container">
          <h3>Leaderboard</h3>
          <div className="home-body-container-myScore">
            <p>My personal highscore : {myHishscore}</p>
          </div>
          <div className="home-body-container-lastPlayers">
            <strong>10 best players</strong>
            <p>1. Date - Hour - Score</p>
            <p>2. Date - Hour - Score</p>
            <p>3. Date - Hour - Score</p>
            <p>4. Date - Hour - Score</p>
            <p>5. Date - Hour - Score</p>
            <p>6. Date - Hour - Score</p>
            <p>7. Date - Hour - Score</p>
            <p>8. Date - Hour - Score</p>
            <p>9. Date - Hour - Score</p>
            <p>10. Date - Hour - Score</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
