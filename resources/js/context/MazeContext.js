import React from "react";

const tiles = [
    [false, false, false, false, false, false, true, false],
    [false, false, false, false, true, false, true, false],
    [false, true, true, true, true, true, true, false],
    [false, false, false, false, true, false, false, true],
    [false, true, true, true, true, true, true, false],
    [false, false, true, false, false, false, false, false],
    [true, true, true, true, true, true, true, true],
    [false, false, true, false, true, false, true, false]
];

const MazeContext = React.createContext({
    tiles,
    entrance: { x: 2, y: 7 },
    coffeeMachine: { x: 6, y: 0 }
});

export const MazeProvider = MazeContext.Provider;
export const MazeConsumer = MazeContext.Consumer;

export default MazeContext;
