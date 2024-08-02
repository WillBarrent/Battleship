import { appearElement } from "../utils/appearElement";
import { createElement } from "../utils/createElement";

function createBoard() {
    const board = createElement('div', 'board');

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

    for (let i = 99; i >= 0; i--) {
        const div = createElement('div', 'square');
        div.dataset.position = `${i}`;
        appearElement(board, div);
    }

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

export {createBoard as default};