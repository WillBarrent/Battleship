import { appearElement } from "../utils/appearElement";
import { createElement } from "../utils/createElement";

import Radar from '../../assets/radar.png';
import { createRocket } from "./rocket";

function createBoard(boardType = 'player') {
    const board = createElement('div', 'board');

    if (boardType === 'ai') {
        board.style.backgroundImage = `url(${Radar})`;
        board.classList.add('ai');
    }

    for (let i = 1; i <= 10; i++) {
        const div = createPosition('position-number', i)
        appearElement(board, div);
    }

    const boardLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    boardLetters.forEach(letter => {
        const div = createPosition('position-letter', letter);
        appearElement(board, div);
    });

    const emptyPosition = createElement('div', 'position');
    appearElement(board, emptyPosition);

    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            const div = createElement('div', 'square');
            div.dataset.position = `${i} ${j}`;
            div.style.gridRow = `${i + 2} / ${i + 3}`;
            div.style.gridColumn = `${j + 2} / ${j + 3}`;
            appearElement(board, div);
        }
    }

    const rocket = createRocket();
    appearElement(board, rocket);

    return board;
}

function createPosition(className = "empty", textContent) {
    const div = createElement('div', className);

    if (className === "empty") {
        return div;
    }

    div.textContent = textContent;
    return div;
}

export { createBoard as default };