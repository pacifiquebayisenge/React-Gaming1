import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <header className="about-header">
        <h1> About</h1>
        <Link to="/">Home </Link>
      </header>
      <div className="about-body"></div>
    </div>
  );
}

export default About;
