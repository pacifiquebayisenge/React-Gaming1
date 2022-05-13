import { useEffect } from "react";
import { batch, useDispatch } from "react-redux";
import { stopTimer, stopGame } from "../actions";

const Timer = ({ timerObj }: any) => {
  const dispatch = useDispatch();
  const timer = timerObj;

  const gameOver = () => {
    batch(() => {
      dispatch(stopTimer());
      dispatch(stopGame());
    });
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
