import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import moment from "moment";

import "./bootstrap";
import GameScreen from "./components/GameScreen";
import MazeContext from "./context/MazeContext";
import { TimerProvider } from "./context/TimerContext";
import { PlayerProvider } from "./context/PlayerContext";

function App() {
    const [screen, setScreen] = useState("new-player");

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
        name: "James",
        x: maze.entrance.x,
        y: maze.entrance.y,
        direction: "up"
    });

    useEffect(() => {
        try {
            const name = localStorage.getItem("name");
            if (!name) return;

            setPlayer({ ...player, name });
            setScreen("maze");
        } catch (e) {}
    });

    function setName(name) {
        setPlayer({ ...player, name });
    }

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

        if (
            !maze.tiles[newPlayer.y] ||
            !maze.tiles[newPlayer.y][newPlayer.x] ||
            !maze.traversableTiles.includes(
                maze.tiles[newPlayer.y][newPlayer.x].type
            )
        ) {
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
            newPlayer.x == maze.exit.x &&
            newPlayer.y == maze.exit.y
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
                <PlayerProvider value={{ ...player, move, setName }}>
                    <GameScreen />
                </PlayerProvider>
            </TimerProvider>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
