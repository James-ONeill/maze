import React, { useContext, useState, useEffect, useRef } from "react";
import { padStart } from "lodash";

import TimerContext from "../context/TimerContext";

function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

function Timer() {
    const timer = useContext(TimerContext);
    const [timeElapsed, setTimeElapsed] = useState(timer.timeElapsed());

    useInterval(() => setTimeElapsed(timer.timeElapsed()), 1000 / 60);

    function elapsedTime() {
        return timer.startTime && !isNaN(timeElapsed.minutes())
            ? `${padStart(timeElapsed.minutes().toString(), 2, "0")}:${padStart(
                  timeElapsed.seconds().toString(),
                  2,
                  0
              )}:${padStart(timeElapsed.milliseconds().toString(), 3, "0")}`
            : "00:00:000";
    }

    return <div>{elapsedTime()}</div>;
}

export default Timer;
