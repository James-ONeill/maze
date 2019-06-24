import React, { useContext } from "react";

import PlayerContext from "../context/PlayerContext";

function Controls() {
    const player = useContext(PlayerContext);

    return (
        <div>
            <button onClick={player.move('up')}>Up</button>
            <button onClick={player.move('right')}>Right</button>
            <button onClick={player.move('down')}>Down</button>
            <button onClick={player.move('left')}>Left</button>
        </div>
    );
}

export default Controls;
