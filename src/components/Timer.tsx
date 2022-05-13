import React, { useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { tick, startTimer, stopTimer, stopGame } from "../actions";

const Timer = ({ timerObj, highscore }: any) => {
  const dispatch = useDispatch();
  const timer = timerObj;

  const gameOver = () => {
    batch(() => {
      dispatch(stopTimer());
      dispatch(stopGame());
    });
    console.log(highscore);
  };

  const stopTime = () => {
    if (timer === 0) gameOver();
  };

  useEffect(() => {
    stopTime();
  });

  return (
    <div>
      <h2>Timer: {timer}</h2>
    </div>
  );
};

export default Timer;
