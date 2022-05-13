export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const tick = () => {
  return {
    type: "TICK",
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
