import { appearElement } from "../utils/appearElement"
import { createElement } from "../utils/createElement"
import { loadImage } from "../utils/loadImage"

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

export { createShip as default } 