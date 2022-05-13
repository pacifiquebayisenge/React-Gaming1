export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const tick = () => {
  return {
    type: "TICK",
    offset: 1,
  };
};

export const startTimer = (interval: NodeJS.Timer) => {
  return {
    type: "START_TIMER",

    interval: interval,
  };
};

export const stopTimer = () => {
  return { type: "STOP_TIMER" };
};

export const stopGame = () => {
  return { type: "STOP_GAME" };
};
