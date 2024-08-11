import Ship from '../ship/ship';

class Gameboard {
    #board;
    #hitted = 'H';
    #missed = 'M';
    #shipsPosition = [];
    #shipsTypes = [];
    constructor() {
        this.#board = this.createGameBoard();
    }

    createGameBoard() {
        const array = (new Array(10)).fill([]);
        array.forEach((_, i) => {
            array[i] = [...(new Array(10)).fill([])];
        });

        return array;
    }

    getGameBoard() {
        return this.#board;
    }

    getShipPositions() {
        return this.#shipsPosition;
    }

    getShipTypes() {
        return this.#shipsTypes;
    }

    getHitted() {
        return this.#hitted;
    }

    getMissed() {
        return this.#missed;
    }

    placeShip(shipType, coordinates) {
        const ship = shipType;
        let x = coordinates[0];
        const y = coordinates[1];
        const board = this.#board;

        if ((board.length - (x + ship.length)) < 0) {
            return "ERROR";
        }

        const positions = (new Array(ship.length)).fill(ship);

        positions.forEach(position => {
            board[x][y] = position;
            x += 1;
        });

        this.#shipsPosition.push(coordinates);
        this.#shipsTypes.push(shipType.type);

        return board;
    }

    receiveAttack(x, y) {
        const board = this.getGameBoard();

        let attackCoord = board[x][y];

        const isInstanceOf = attackCoord instanceof Ship;

        if (!isInstanceOf)
            (this.#board)[x][y] = this.#missed;

        if (!(attackCoord instanceof Ship)
            || attackCoord === this.#hitted
            || attackCoord === this.#missed) {
            return false;
        }

        this.#board[x][y].hit();
        (this.#board)[x][y] = this.#hitted;

        return true;
    }

    isAllShipSunk() {
        let isHitted = false;
        const board = this.getGameBoard();
        let boardValues = [];

        for (let i = 0; i < 10; i++) {
            const values = Object.values(board[i]);
            boardValues = [...boardValues, ...values]
        }

        if (!boardValues.find(value => value instanceof Ship)) {
            isHitted = true
        }

        return isHitted;
    }
}

export default Gameboard;