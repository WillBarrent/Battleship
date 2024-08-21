import { appearElement } from "../utils/appearElement";

import Ship from '../../game/ship/ship';
import Hit from '../../assets/fire.png';
import Miss from '../../assets/water.png';
import { createElement } from "../utils/createElement";
import { loadImage } from "../utils/loadImage";
import { loadSingleShip } from "./ship";
import restartTheGame from "./restart";
import { rocketAttack, test, turnOffBoard, turnOnBoard } from "./rocket";

function attackMoves(player, ai) {
    const playerBoard = document.querySelector('.board');
    const aiBoard = document.querySelector('.board.ai');

    const playerGameboard = player.gameboard;
    const aiGameboard = ai.gameboard;

    aiBoard.addEventListener('click', async function (e) {
        const target = e.target;

        if (target.classList.contains('square')) {
            const position = target.dataset.position.split(' ');

            let X = +position[0], Y = +position[1];

            playerTurn(target, aiGameboard, aiBoard, X, Y);

            turnOffBoard(aiBoard);
            const playersRocketAttacking = await rocketAttack();

            aiTurn(playerGameboard, playerBoard, ai);

            const aiRocketAtacking = await rocketAttack();

            turnOnBoard('ai');

            if (aiGameboard.isAllShipSunk() || playerGameboard.isAllShipSunk()) {
                const loser = aiGameboard.isAllShipSunk ? "ai" : 'player';
                restartTheGame(loser);
            }
        }
    })
}

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

function destroyEffect(ship, board, gameboard) {
    const [x, y] = getShipPositionByType(ship, gameboard);

    const destroyedShip = loadSingleShip(x, y, ship);
    appearElement(board, destroyedShip);
    fieldDisclosure(ship.length, [x, y], board, gameboard.getGameBoard());
}

function attackEffect(element, typeOfAttack = "M") {
    const div = createElement('div', 'missed-attack');
    const image = typeOfAttack === "M" ? Miss : Hit;
    const imageClass = typeOfAttack === "M" ? "missed-attack__img" : "hitted-attack__img";
    const imgEl = loadImage(image, imageClass);

    appearElement(div, imgEl);

    const position = element.dataset.position.split(' ');
    const X = +position[0] + 2, Y = +position[1] + 2;

    div.style.gridRow = `${X} / ${X + 1}`;
    div.style.gridColumn = `${Y} / ${Y + 1}`;

    return div;
}

function fieldDisclosure(shipLength, coords, board, gameboard) {
    const fullCoords = (new Array(shipLength)).fill(null).map((_, c) => [coords[0] + c, coords[1]]);
    const disclosurePos = [];
    const surFields = [
        [0, 1],
        [1, 0],
        [1, 1],
        [0, -1],
        [-1, 0],
        [-1, -1],
        [-1, 1],
        [1, -1]
    ];
    let x, y, surX, surY;

    fullCoords.forEach(coord => {
        x = coord[0], y = coord[1];
        surFields.forEach(sur => {
            surX = sur[0] + x, surY = sur[1] + y;
            if ((surX) >= 0 && (surY) >= 0
                && (surX) <= 9 && (surY) <= 9
                && gameboard[surX][surY]
                && gameboard[surX][surY] !== 'M'
                && gameboard[surX][surY] !== 'H') {
                const square = board.querySelector(`[data-position="${surX} ${surY}"]`);
                gameboard[surX][surY] = 'M';
                const effect = attackEffect(square, gameboard[surX][surY]);
                appearElement(board, effect);
            }
        });
    });
}

function getShipPositionByType(ship, gameboard) {
    let shipPosition = gameboard.getShipPositions();
    let shipTypes = gameboard.getShipTypes();
    const shipType = ship.type;
    const shipTypeIndex = shipTypes.findIndex(type => type === shipType);

    const x = shipPosition[shipTypeIndex][0];
    const y = shipPosition[shipTypeIndex][1];

    return [x, y];
}

export { attackMoves as default }