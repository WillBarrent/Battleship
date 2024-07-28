import Ship from '../ship/ship';

class Gameboard {
    #board;
    #hitted = 'H';
    #missed = 'M';
    #shipsPosition = [];
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

        return board;
    }

    receiveAttack(x, y) {
        const board = this.getGameBoard();
        let attackCoord = board[x][y];
        const isInstanceOf = attackCoord instanceof Ship;
        (this.#board)[x][y] = !isInstanceOf ? this.#missed : "";
        if (!(attackCoord instanceof Ship)
            || attackCoord === this.#hitted
            || attackCoord === this.#missed) {
            return false;
        }

        console.log((this.#board)[x][y]);
        (this.#board)[x][y] = this.#hitted;

        return true;
    }

    isAllShipSunk() {
        const allShips = this.#shipsPosition;
        const isHitted = true;
        const board = this.getGameBoard();
        let x, y, ship;
        x = y = ship = null;

        for (let i = 0; i < allShips.length && isHitted != true; i++) {
            x = allShips[i][0], y = allShips[i][1];
            ship = board[x][y];
            if (ship.isSunk())
                isHitted = true;
        }

        return isHitted;
    }
}

export default Gameboard;