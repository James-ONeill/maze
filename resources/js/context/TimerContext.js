import React from "react";

const TimerContext = React.createContext({
    startTime: null,
    timeElapsed: null,
});

export const TimerProvider = TimerContext.Provider;
export const TimerConsumer = TimerContext.Consumer;

export default TimerContext;