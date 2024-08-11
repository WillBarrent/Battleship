import Player from '../../game/player/player';
import Ship from '../../game/ship/ship';
import { appearElement } from '../utils/appearElement';
import attackMoves from './attack';
import createBoard from './board';
import { loadShips, loadSingleShip } from './ship';

function dragndrop(selection, player) {
    const shipTypes = [
        {
            name: "battleship",
            length: 5,
        },
        {
            name: "cruiser",
            length: 4,
        },
        {
            name: "destroyer",
            length: 4,
        },
        {
            name: "rescue",
            length: 3,
        },
        {
            name: "patrol",
            length: 3,
        },
    ];

    let target, shipType, shipSelected = { isSelected: false };

    target = shipType = null;

    let queue = [];

    selection.addEventListener('click', (e) => {
        target = e.target.closest('div');
        shipType = shipTypes.find(type => type.name === target?.className);

        if (shipType && !shipSelected.isSelected) {
            const width = target.offsetWidth;
            const height = target.offsetHeight;

            target.style.position = 'absolute';
            target.style.width = width + 'px';
            target.style.height = height + 'px';
            shipSelected.isSelected = true;
        }
    });
    let prevElement = null;
    document.addEventListener('mouseover', (e) => drag(e, target, shipType, shipSelected, queue, player));
}

function drag(e, ship, shipType, selected, queue, player) {
    if (!selected.isSelected) {
        return;
    }

    ship.style.left = e.pageX + 'px';
    ship.style.top = e.pageY + 'px';

    const target = e.target;
    const shipLength = shipType?.length;
    const gameboard = player.gameboard;
    const battleShip = new Ship(shipType.length, shipType.name);

    if (target.classList.contains('square')) {
        queue.forEach(element => {
            element.style.background = '';
        });

        const position = target.dataset.position.split(' ').map(p => +p);
        const color = ((+position[0] + shipLength - 1) <= 9) && !player.spaceAvailable(gameboard, position, battleShip) ? `rgba(66, 184, 131, .5)` : `rgba(194, 77, 44, .5)`

        for (let i = 0; i < shipLength; i++) {
            const square = document.querySelector(`[data-position="${+position[0] + i} ${+position[1]}"]`);
            if (square) {
                square.style.background = color;
                queue.push(square);
            }
        }

        target.onclick = () => {
            if (((+position[0] + shipLength - 1) <= 9)
                && !player.spaceAvailable(gameboard, position, battleShip)) {
                drop(player, shipType, ship, target);
                queue.forEach(element => {
                    element.style.background = '';
                });
                selected.isSelected = false;
            }
        }
    }
}

function drop(player, shipType, ship, target) {
    const selection = document.querySelector('.selection');
    const board = document.querySelector('.board');
    const positions = target.dataset.position.split(' ').map(p => +p);
    const start = document.querySelector('.start');

    const gameboard = player.gameboard;

    selection.removeChild(ship);
    const battleShip = new Ship(shipType.length, shipType.name);
    appearElement(board, loadSingleShip(positions[0], positions[1], battleShip));

    gameboard.placeShip(battleShip, positions);

    start.onclick = () => {
        const allShips = gameboard.getShipPositions();
        if (allShips.length === 5) {
            const game = document.querySelector('.game');
            const allGameElements = game.querySelectorAll('.game > div');
            Array.from(allGameElements).forEach(element => {
                game.removeChild(element);
            })

            const board = createBoard();
            const aiBoard = createBoard('ai');

            const aiPlayer = new Player();
            aiPlayer.randomGameboard();

            appearElement(game, board);
            appearElement(game, aiBoard);
            loadShips(gameboard);
            
            attackMoves(player, aiPlayer);
        }
    }
}

export { dragndrop as default }