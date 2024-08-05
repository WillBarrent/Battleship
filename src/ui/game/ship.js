import { appearElement } from "../utils/appearElement"
import { createElement } from "../utils/createElement"
import { loadImage } from "../utils/loadImage";

import Battleship from '../../assets/ships/battleship.png';
import Cruiser from '../../assets/ships/cruiser.png';
import Destroyer from '../../assets/ships/destroyer.png';
import Rescue from '../../assets/ships/rescue.png';
import Patrol from '../../assets/ships/patrol.png';

// Battleship
// Cruiser
// Destroyer
// Rescue
// Patrol

const shipsAssets = {
    'battleship': Battleship,
    'cruiser': Cruiser,
    'destroyer': Destroyer,
    'rescue': Rescue,
    'patrol': Patrol,
};

function createShip(shipName, image) {
    const ship = createElement('div', shipName);
    const shipImage = loadImage(image, 'ship__img');

    appearElement(ship, shipImage);

    return ship;
}

function loadSingleShip(x, y, gameboard) {
    const start = 2;
    const ship = gameboard[x][y];
    const shipType = ship.type;
    const buildShip = createShip(shipType, shipsAssets[shipType]);
    buildShip.style.gridRow = `${start + x} / ${start + x + ship.length}`;
    buildShip.style.gridColumn = `${start + y} / ${start + y + 1}`;

    return buildShip;
}

function loadShips(board) {
    const shipPositions = board.getShipPositions();
    const gameboard = board.getGameBoard();

    const boardClass = document.querySelector('.board');

    shipPositions.forEach((position) => {
        const buildShip = loadSingleShip(position[0], position[1], gameboard);
        appearElement(boardClass, buildShip);
    });
}

export { createShip as default, loadShips } 