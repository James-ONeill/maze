import React from "react";
import { findIndex } from "lodash";

function tile(settings) {
    return {
        type: 'tile',
        className: "",
        ...settings,
    }
}

function shelf() {
    return tile({
        type: 'wall',
        className: "",
    })
}

function block() {
    return tile({
        type: 'obstacle',
        className: ""
    })
}

function coffee() {
    return tile({
        type: 'coffee-machine'
    })
}

function enter() {
    return tile({
        type: 'entrance'
    })
}

function exit() {
    return tile({
        type: 'exit'
    })
}

function checkout() {
    return tile({ type: 'checkout' });
}

const tiles = [
    [shelf(), shelf(), coffee(), shelf(), shelf(), shelf(), shelf(), shelf(), shelf(), shelf(), shelf(), shelf(), shelf(), shelf(), shelf(), shelf()],
    [shelf(), tile(),  tile(),   tile(),  tile(),  block(), tile(),  tile(),  tile(),  tile(),  tile(),  tile(),  tile(),  tile(),  tile(),  shelf()],
    [shelf(), tile(),  shelf(),  tile(),  shelf(), tile(),  shelf(), tile(),  shelf(), tile(), shelf(), tile(),  shelf(),  shelf(),  tile(),  shelf()],
    [shelf(), tile(),  shelf(),  block(), shelf(), tile(),  shelf(), block(), shelf(), tile(), shelf(), tile(),  tile(),  shelf(),  tile(),  shelf()],
    [shelf(), tile(),  shelf(),  tile(),  tile(),  tile(),  shelf(), tile(),  shelf(), tile(), shelf(), tile(),  tile(),  shelf(),  tile(),  shelf()],
    [shelf(), tile(),  shelf(),  tile(),  shelf(), tile(),  shelf(), tile(),  tile(),  tile(),  shelf(), tile(),  tile(),  tile(),  tile(),  shelf()],
    [shelf(), tile(),  shelf(),  tile(),  shelf(), tile(),  tile(),  tile(),  shelf(), tile(), shelf(), tile(),  shelf(),  tile(),  tile(),  shelf()],
    [shelf(), tile(),  tile(),   tile(),  shelf(), tile(),  tile(),  tile(),  shelf(), tile(), tile(),  tile(),  shelf(),  shelf(),  block(),  shelf()],
    [shelf(), tile(),  shelf(),  tile(),  shelf(), tile(),  shelf(), tile(),  shelf(), tile(), shelf(), tile(),  shelf(),  tile(),  tile(),  shelf()],
    [shelf(), tile(),  shelf(),  tile(),  shelf(), tile(),  shelf(), tile(),  tile(),  tile(),  shelf(), tile(),  tile(),  tile(),  tile(),  shelf()],
    [shelf(), tile(),  shelf(),  tile(),  shelf(), tile(),  shelf(), shelf(), shelf(), tile(),  shelf(), tile(),  tile(),  shelf(),  tile(),  shelf()],
    [shelf(), tile(),  tile(),   tile(),  tile(),  tile(),  tile(),  tile(),  shelf(), tile(),  shelf(), tile(), shelf(),  shelf(),  tile(),  shelf()],
    [shelf(), block(), shelf(),  block(), shelf(), checkout(),  shelf(), block(), shelf(), block(), shelf(), tile(),  tile(),  tile(),  tile(),  shelf()],
    [shelf(), tile(),  shelf(),  tile(),  shelf(), tile(),  shelf(), tile(),  shelf(), tile(),  shelf(), tile(),  shelf(), shelf(), tile(),  shelf()],
    [shelf(), tile(),  tile(),   tile(),  tile(),  tile(),  tile(),  tile(),  shelf(), tile(),  tile(),  tile(),  tile(),  tile(),  tile(),  shelf()],
    [shelf(), shelf(), shelf(),  exit(), shelf(), shelf(), shelf(), shelf(), shelf(), shelf(), shelf(), shelf(), enter(),  shelf(), shelf(), shelf()],
];

function getCoordinates(type) {
    return tiles.map((cols, row) => {
        return {
            x: findIndex(cols, ['type', type]),
            y: row,
        }
    }).filter(({ x }) => x > -1)[0];
}

const MazeContext = React.createContext({
    tiles,
    entrance: getCoordinates('entrance'),
    exit: getCoordinates('exit'),
    coffeeMachine: getCoordinates('coffee-machine'),
    checkout: getCoordinates('checkout'),
    traversableTiles: ['tile', 'entrance', 'exit', 'coffee-machine', 'checkout'],
});

export const MazeProvider = MazeContext.Provider;
export const MazeConsumer = MazeContext.Consumer;

export default MazeContext;
