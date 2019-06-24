import React, { useContext, useState, useEffect } from "react";
import { padStart } from "lodash";

import TimerContext from "../context/TimerContext";

function Timer() {
    const timer = useContext(TimerContext);
    const [timeElapsed, setTimeElapsed] = useState(timer.timeElapsed());

    useEffect(() => {
        const interval = setInterval(() => setTimeElapsed(timer.timeElapsed()), 50);

        return () => clearInterval(interval);
    });

    function elapsedTime() {
        return timer.startTime && !isNaN(timeElapsed.minutes())
            ? `${padStart(
                  timeElapsed.minutes().toString(),
                  2,
                  "0"
              )}:${padStart(
                  timeElapsed.seconds().toString(),
                  2,
                  0
              )}:${padStart(
                  timeElapsed.milliseconds().toString(),
                  3,
                  "0"
              )}`
            : "00:00:000";
    }

    return <div>{elapsedTime()}</div>;
}

export default Timer;