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

function createShip(shipName, image) {
    const ship = createElement('div', shipName);
    const shipImage = loadImage(image, 'ship__img');

    appearElement(ship, shipImage);

    return ship;
}

function loadShips(board) {
    const shipPositions = board.getShipPositions();
    const gameboard = board.getGameBoard();

    const shipsAssets = {
        'battleship': Battleship,
        'cruiser': Cruiser,
        'destroyer': Destroyer,
        'rescue': Rescue,
        'patrol': Patrol,
    };

    const boardClass = document.querySelector('.board');

    let x = null, y = null;
    let start = 2;

    shipPositions.forEach((position) => {
        x = position[0], y = position[1];
        const ship = gameboard[x][y];
        const shipType = ship.type;
        const buildShip = createShip(shipType, shipsAssets[shipType]);
        buildShip.style.gridRow = `${start + x} / ${start + x + ship.length}`;
        buildShip.style.gridColumn = `${start + y} / ${start + y + 1}`;
        appearElement(boardClass, buildShip);
    });
}

export { createShip as default, loadShips } 