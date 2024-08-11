import Ship from '../../game/ship/ship';
import { appearElement } from '../utils/appearElement';
import { loadSingleShip } from './ship';

function dragndrop(selection, gameboard) {
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
    document.addEventListener('mouseover', (e) => drag(e, target, shipType, shipSelected, queue, gameboard));
}

function drag(e, ship, shipType, selected, queue, gameboard) {
    if (!selected.isSelected) {
        return;
    }

    ship.style.left = e.pageX + 'px';
    ship.style.top = e.pageY + 'px';

    const target = e.target;
    const shipLength = shipType?.length;

    if (target.classList.contains('square')) {
        queue.forEach(element => {
            element.style.background = '';
        });

        const position = target.dataset.position.split(' ');
        const color = (+position[0] + shipLength - 1) <= 9 ? `rgba(66, 184, 131, .5)` : `rgba(194, 77, 44, .5)`

        for (let i = 0; i < shipLength; i++) {
            const square = document.querySelector(`[data-position="${+position[0] + i} ${+position[1]}"]`);
            if (square) {
                square.style.background = color;
                queue.push(square);
            }
        }

        target.onclick = () => {
            if ((+position[0] + shipLength - 1) <= 9) {
                drop(gameboard, shipType, ship, target);
                queue.forEach(element => {
                    element.style.background = '';
                });
                selected.isSelected = false;
            }
        }
    }
}

function drop(gameboard, shipType, ship, target) {
    const selection = document.querySelector('.selection');
    const board = document.querySelector('.board');
    const positions = target.dataset.position.split(' ').map(p => +p);

    selection.removeChild(ship);
    const battleShip = new Ship(shipType.length, shipType.name);
    appearElement(board, loadSingleShip(positions[0], positions[1], battleShip));
}

export { dragndrop as default }