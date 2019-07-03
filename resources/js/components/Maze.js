import React, { useContext } from "react";
import MazeContext from "../context/MazeContext";

function Maze() {
    const { tiles } = useContext(MazeContext);

    return (
        <div className="maze">
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
