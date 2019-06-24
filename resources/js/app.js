import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import moment from "moment";

import "./bootstrap";
import Maze from "./components/Maze";
import Timer from "./components/Timer";
import Player from "./components/Player";
import Controls from "./components/Controls";
import MazeContext from "./context/MazeContext";
import { TimerProvider } from "./context/TimerContext";
import { PlayerProvider } from "./context/PlayerContext";

function App() {
    const maze = useContext(MazeContext);

    const [timer, setTimer] = useState({
        startTime: null,
        endTime: null
    });

    function timeElapsed() {
        const compare = timer.endTime ? timer.endTime : moment();

        return moment.duration(compare.diff(timer.startTime));
    }

    function startTimer() {
        if (timer.startTime) return;

        setTimer({
            ...timer,
            startTime: moment(),
            endTime: null
        });
    }

    function stopTimer() {
        setTimer({
            ...timer,
            endTime: moment()
        });
    }

    const [player, setPlayer] = useState({
        x: maze.entrance.x,
        y: maze.entrance.y,
        direction: "up"
    });

    const move = direction => () => {
        if (player.hasCompleted) return;

        startTimer();

        const newPlayer = { ...player };

        switch (direction) {
            case "up":
                newPlayer.y = player.y - 1;
                break;
            case "right":
                newPlayer.x = player.x + 1;
                break;
            case "down":
                newPlayer.y = player.y + 1;
                break;
            case "left":
                newPlayer.x = player.x - 1;
                break;
            default:
        }

        if (!maze.tiles[newPlayer.y][newPlayer.x]) {
            setPlayer({ ...player, direction });
            return;
        }

        if (
            newPlayer.x == maze.coffeeMachine.x &&
            newPlayer.y == maze.coffeeMachine.y
        ) {
            newPlayer.hasCoffee = true;
        }

        if (
            player.hasCoffee &&
            newPlayer.x == maze.entrance.x &&
            newPlayer.y == maze.entrance.y
        ) {
            newPlayer.hasCompleted = true;
            stopTimer();
        }

        setPlayer({ ...newPlayer, direction });
    };

    return (
        <div>
            <TimerProvider
                value={{ ...timer, startTimer, stopTimer, timeElapsed }}
            >
                <PlayerProvider value={{ ...player, move }}>
                    <Timer />
                    <div
                        className="mx-auto relative"
                        style={{ width: "fit-content" }}
                    >
                        <Maze />
                        <Player />
                    </div>
                    <Controls />
                </PlayerProvider>
            </TimerProvider>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
