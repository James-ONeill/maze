import React, { useContext } from "react";
import MazeContext from "../context/MazeContext";

function Maze() {
    const { tiles, entrance, coffeeMachine } = useContext(MazeContext);

    function isEntrance(x, y) {
        return entrance.x === x && entrance.y === y;
    }

    function isCoffeeMachine(x, y) {
        return coffeeMachine.x === x && coffeeMachine.y === y;
    }

    return (
        <div className="maze">
            {tiles.map((rowTiles, row) =>
                rowTiles.map((tile, col) => (
                    <div
                        key={`${row}-${col}`}
                        className={`tile ${
                            isEntrance(col, row) ? "bg-blue-300" : ""
                        } ${isCoffeeMachine(col, row) ? "bg-pink-300" : ""}`}
                        data-obstacle={!tile}
                    />
                ))
            )}
        </div>
    );
}

export default Maze;
