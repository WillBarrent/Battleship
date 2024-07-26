import Ship from '../ship/ship';

class Gameboard {
    #board;
    constructor() {
        this.#board = this.createGameBoard();
    }

    createGameBoard() {
        return new Array(10).fill([...(new Array(10).fill([]))]);
    }

    getGameBoard() {
        return this.#board;
    }
}

export default Gameboard;