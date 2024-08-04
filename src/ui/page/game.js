import createBoard from "../game/board"
import { loadShips } from "../game/ship";
import { appearElement } from "../utils/appearElement";

function createGameboard(board, boardType) {
    const game = document.querySelector('.game');
    const boardUi = createBoard(boardType);
    appearElement(game, boardUi);
    if (boardType !== 'ai') {
        loadShips(board);
    }
}

export { createGameboard as default }