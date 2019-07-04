import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import moment from "moment";

import "./bootstrap";
import GameScreen from "./components/GameScreen";
import StartGameScreen from "./components/StartGameScreen";
import LeaderboardScreen from "./components/LeaderboardScreen";
import CoffeeMachineScreen from "./components/CoffeeMachineScreen";
import MazeContext from "./context/MazeContext";
import { TimerProvider } from "./context/TimerContext";
import { PlayerProvider } from "./context/PlayerContext";

function App() {
    const [screen, setScreen] = useState("start-game");
    const [latestTime, updateLatestTime] = useState(null);

    function showLeaderboard() {
        setScreen("leaderboard");
    }

    const [drink, updateDrink] = useState(null);

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
        direction: "up",
        uuid: null
    });

    function createPlayer({ name, email }) {
        setPlayer({ ...player, name, email });

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);

        setScreen("game");
    }

    useEffect(() => {
        try {
            const name = localStorage.getItem("name");
            const email = localStorage.getItem("email");
            let uuid = localStorage.getItem("uuid");

            if (!uuid) {
                uuid = require("uuid/v4")();
                localStorage.setItem("uuid", uuid);
            }

            setPlayer({ ...player, name, email, uuid });
        } catch (e) {}
    }, []);

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
            setScreen("coffee-machine");
            newPlayer.hasCoffee = true;
            setPlayer({ ...newPlayer, direction: "down" });
            return;
        }

        if (
            player.hasCoffee &&
            newPlayer.x == maze.exit.x &&
            newPlayer.y == maze.exit.y
        ) {
            newPlayer.hasCompleted = true;
            stopTimer();
            showLeaderboard();
        }

        setPlayer({ ...newPlayer, direction });
    };

    useEffect(() => {
        if (!player.hasCompleted) return;

        async function postData(time) {
            const response = await window.axios.post("/times", {
                drink,
                uuid: player.uuid,
                name: player.name,
                email: player.email,
                minutes: time.minutes(),
                seconds: time.seconds(),
                milliseconds: time.milliseconds()
            });

            updateLatestTime(response.data.time);
        }

        postData(timeElapsed());
    }, [player.hasCompleted]);

    function resetGame() {
        setPlayer({
            ...player,
            x: maze.entrance.x,
            y: maze.entrance.y,
            direction: "up",
            hasCompleted: false,
        });

        setTimer({
            startTime: null,
            endTime: null
        });

        setScreen('start-game');
    }

    return (
        <div>
            <TimerProvider
                value={{ ...timer, startTimer, stopTimer, timeElapsed }}
            >
                <PlayerProvider value={{ ...player, move, setName }}>
                    {screen === "start-game" && (
                        <StartGameScreen
                            createPlayer={createPlayer}
                            showLeaderboard={showLeaderboard}
                        />
                    )}

                    {screen === "game" && <GameScreen />}

                    {screen === "coffee-machine" && (
                        <CoffeeMachineScreen
                            updateDrink={updateDrink}
                            onComplete={() => setScreen("game")}
                        />
                    )}

                    {screen === "leaderboard" && (
                        <LeaderboardScreen
                            latestTime={latestTime}
                            exit={resetGame}
                        />
                    )}
                </PlayerProvider>
            </TimerProvider>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
