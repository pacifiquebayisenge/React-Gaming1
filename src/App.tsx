import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Game } from "./pages/index";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
