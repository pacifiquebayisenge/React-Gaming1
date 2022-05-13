import { useEffect } from "react";
import { batch, useDispatch } from "react-redux";
import { stopTimer, stopGame } from "../actions";

const Timer = ({ timerObj }: any) => {
  const dispatch = useDispatch();

  const timer = timerObj;

  // method to stop the game
  const gameOver = () => {
    // batch method to dispatch multiple action to cause only 1 rerendering
    batch(() => {
      dispatch(stopTimer());
      dispatch(stopGame());
    });
  };

  // method to check when the timer gets to 0
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
