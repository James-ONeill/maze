import React from "react";

import Maze from "./Maze";
import Timer from "./Timer";
import Player from "./Player";
import Controls from "./Controls";

function GameScreen() {
    return (
        <>
            <Timer />
            <div className="mx-auto relative" style={{ width: "fit-content" }}>
                <Maze />
                <Player />
            </div>
            <Controls />
        </>
    );
}

export default GameScreen;
