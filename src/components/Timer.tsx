import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tick, startTimer, stopTimer } from "../actions";

const Timer = () => {
  const dispatch = useDispatch();
  const timer = useSelector((state: any) => state.timer);

  const setTimer = () => {
    const interval = setInterval(() => {
      dispatch(tick());
    }, 1000);

    dispatch(startTimer(interval));
  };

  const stop = () => {
    dispatch(stopTimer());
  };

  return (
    <div>
      <h2>Timer: {timer.time}</h2>
    </div>
  );
};

export default Timer;
