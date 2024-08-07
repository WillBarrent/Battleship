import { appearElement } from "../utils/appearElement";

import Ship from '../../game/ship/ship';
import Hit from '../../assets/fire.png';
import Miss from '../../assets/water.png';
import { createElement } from "../utils/createElement";
import { loadImage } from "../utils/loadImage";
import { loadSingleShip } from "./ship";

function playerTurn(target, aiGameboard, aiBoard, X, Y) {
    let ship = null;
    if (aiGameboard.getGameBoard()[X][Y] instanceof Ship) {
        ship = aiGameboard.getGameBoard()[X][Y];
    }

    aiGameboard.receiveAttack(X, Y);

    const effect = attackEffect(target, aiGameboard.getGameBoard()[X][Y]);
    appearElement(aiBoard, effect);

    aiBoard.removeChild(target);

    if (ship?.isSunk()) {
        destroyEffect(ship, aiBoard, aiGameboard)
    }
}

function aiTurn(playerGameboard, playerBoard, ai) {
    const [attack, X, Y, ship] = ai.makeRandomAttack(playerGameboard);
    const target = playerBoard.querySelector(`[data-position="${X} ${Y}"]`);

    const effect = attackEffect(target, playerGameboard.getGameBoard()[X][Y]);
    appearElement(playerBoard, effect);

    playerBoard.removeChild(target);

    if (ship?.isSunk()) {
        const [x, y] = getShipPositionByType(ship, playerGameboard);
        fieldDisclosure(ship.length, [x, y], playerBoard, playerGameboard.getGameBoard());
    }
}