import React, { Ref, RefObject } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../actions";

// boolean isEmpty will indicate which mole element to show: hidden or not
const GameHole = ({ isEmpty }: { isEmpty: Boolean }) => {
  const dispatch = useDispatch();

  return (
    <div className="game-hole">
      {isEmpty ? (
        <div className="game-hole-empty"></div>
      ) : (
        <div
          className="game-hole-mole"
          onClick={() => dispatch(increment())}
        ></div>
      )}
    </div>
  );
};

export default GameHole;
