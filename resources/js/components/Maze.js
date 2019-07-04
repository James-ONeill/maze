import React, { useContext, useEffect } from "react";
import MazeContext from "../context/MazeContext";
import TimerContext from "../context/TimerContext";

const audio = new Audio('/audio/themetune-background-gameplay.mp3');
audio.load();
audio.loop = true;

function Maze() {
    const { tiles } = useContext(MazeContext);
    const { startTime, startTimer } = useContext(TimerContext);

    return (
        <div className="maze relative">
            {startTime === null && (
                <img
                    className="absolute inset-0 z-10"
                    src="/img/how-to-play.png"
                    onClick={startTimer}
                />
            )}
            {tiles.map((rowTiles, row) =>
                rowTiles.map((tile, col) => (
                    <div
                        key={`${row}-${col}`}
                        className={`tile`}
                        data-obstacle={!tile}
                    />
                ))
            )}
        </div>
    );
}

export default Maze;
