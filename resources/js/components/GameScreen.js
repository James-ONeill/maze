import React from "react";

import Maze from "./Maze";
import Timer from "./Timer";
import Player from "./Player";
import Controls from "./Controls";

function GameScreen() {
    return (
        <>
            <div className="px-12">
                <div className="flex">
                    <div className="w-1/2">
                        <img
                            className="mb-6 mx-auto w-32"
                            src="/img/logo.png"
                        />
                    </div>

                    <div className="w-1/2">
                        <img className="mt-6" src="/img/title-anim.gif" />
                    </div>
                </div>
            </div>

            <div className="px-8">
                <div className="mx-auto relative" style={{ width: "fit-content" }}>
                    <Maze />
                    <Player />
                </div>
            </div>

            <div className="flex">
                <div className="w-1/2">
                    <Timer />
                </div>

                <div className="w-1/2">
                    <Controls />
                </div>
            </div>
        </>
    );
}

export default GameScreen;
