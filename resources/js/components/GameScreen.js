import React, { useContext } from "react";

import Maze from "./Maze";
import Timer from "./Timer";
import Player from "./Player";
import Controls from "./Controls";

function GameScreen() {
    return (
        <>
            <div className="px-12">
                <div className="flex max-w-xl mx-auto">
                    <div className="w-1/2 pr-10">
                        <img
                            className="mb-6 mx-auto w-32"
                            src="/img/logo.png"
                        />
                    </div>

                    <div className="w-1/2 pl-10">
                        <img className="mb-6 mt-6" src="/img/title-anim.gif" />
                    </div>
                </div>
            </div>

            <div className="px-8">
                <div className="max-w-xl mx-auto">
                    <div
                        className="mx-auto mb-6 relative"
                        style={{ width: "fit-content" }}
                    >
                        <Maze />
                        <Player />
                    </div>

                    <div className="flex -mx-4">
                        <div className="pr-2 w-1/2">
                            <Timer />
                        </div>

                        <div className="pl-2 w-1/2">
                            <Controls />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GameScreen;
