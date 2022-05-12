import React from "react";

interface GameHoleProps {
  imgURL: string;
}

const GameHole = (props: GameHoleProps) => {
  return (
    <div className="game-hole">
      <img src={props.imgURL} alt="" />
    </div>
  );
};

export default GameHole;
