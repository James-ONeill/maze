import React, { useContext } from "react";

import PlayerContext from "../context/PlayerContext";

function Player() {
    const player = useContext(PlayerContext);

    let rotate;
    switch (player.direction) {
        case "up":
            rotate = "0deg";
            break;
        case "right":
            rotate = "90deg";
            break;
        case "down":
            rotate = "180deg";
            break;
        case "left":
            rotate = "-90deg";
            break;
        default:
    }

    return (
        <div
            className={`player ${player.hasCoffee ? "bg-green-900" : ""}`}
            style={{
                transform: `translate(${1.5 * player.x}rem, ${1.5 *
                    player.y}rem) rotate(${rotate}) ${
                    player.hasCompleted ? "scale(2)" : ""
                }`
            }}
        >
            P
        </div>
    );
}

export default Player;
