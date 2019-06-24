import React from "react";

const PlayerContext = React.createContext({
    x: 0,
    y: 0,
    hasDrink: false,
});

export const PlayerProvider = PlayerContext.Provider;
export const PlayerConsumer = PlayerContext.Consumer;

export default PlayerContext;