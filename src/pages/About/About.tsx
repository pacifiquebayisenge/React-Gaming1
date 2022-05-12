import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";

function About() {
  return (
    <main className="about">
      <header className="about-header">
        <h1> About</h1>
        <Link to="/">Home </Link>
      </header>
      <body className="about-body"></body>
    </main>
  );
}

export default About;
