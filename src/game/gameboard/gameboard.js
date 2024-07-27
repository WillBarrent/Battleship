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

    placeShip(shipType, coordinates) {
        const ship = shipType;
        let x = coordinates[0];
        const y = coordinates[1];
        const board = this.#board;

        if ((board.length - (x + ship.length)) < 0) {
            return "ERROR";
        }

        const positions = (new Array(ship.length)).fill(null);
        positions.forEach(position => {
            board[x][y] = ship;
            x += 1;
        });

        return board;
    }
}

export default Gameboard;