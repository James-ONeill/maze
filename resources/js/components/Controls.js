import React, { useState, useContext } from "react";

import PlayerContext from "../context/PlayerContext";

function Button({ className, onClick, upSrc, downSrc }) {
    const [src, updateSrc] = useState(upSrc);

    function onTap() {
        onClick();
        updateSrc(downSrc);

        setTimeout(() => updateSrc(src), 300);
    }

    return <button className={className} onClick={onTap}><img src={src}/></button>
}

function Controls() {
    const player = useContext(PlayerContext);

    return (
        <div className="controls">
            <Button className="button up" onClick={player.move('up')} upSrc="/img/up-off.png" downSrc="/img/up-on.png"/>
            <Button className="button down" onClick={player.move('down')} upSrc="/img/down-off.png" downSrc="/img/down-on.png"/>
            <Button className="button left" onClick={player.move('left')} upSrc="/img/left-off.png" downSrc="/img/left-on.png"/>
            <Button className="button right" onClick={player.move('right')} upSrc="/img/right-off.png" downSrc="/img/right-on.png"/>
        </div>
    );
}

export default Controls;
