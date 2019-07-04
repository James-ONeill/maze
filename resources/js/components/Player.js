import React, { useContext } from "react";

import PlayerContext from "../context/PlayerContext";

function Player() {
    const player = useContext(PlayerContext);

    function character() {
        const characters = {
            noCoffee: {
                up: 'back.png',
                right: 'right.png',
                down: 'front.png',
                left: 'left.png',
            },
    
            coffee: {
                up: 'back-coffee.png',
                right: 'right-coffee.png',
                down: 'front-coffee.png',
                left: 'left.png',
            }
        };

        return characters[player.hasCoffee ? 'coffee' : 'noCoffee'][player.direction];
    }

    return (
        <div
            className="player"
            style={{
                transition: '0.5s transform',
                transform: `translate(${1.25 * player.x}rem, ${1.25 *
                    player.y}rem)`
            }}
        >
            <img src={`img/${character()}`} />
        </div>
    );
}

export default Player;
