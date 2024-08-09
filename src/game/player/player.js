import Gameboard from '../gameboard/gameboard';
import Ship from '../ship/ship';

class Player {
    constructor() {
        this.gameboard = new Gameboard();
    }

    hasGameboard() {
        return this.gameboard instanceof Gameboard;
    }

    makeRandomAttack(gameboard) {
        let randomX, randomY;

        let ship = null;

        randomX = Math.round((Math.random() * 100) % 9);
        randomY = Math.round((Math.random() * 100) % 9)
        const hitted = gameboard.getHitted();
        const missed = gameboard.getMissed();

        const board = gameboard.getGameBoard();

        while (board[randomX][randomY] === hitted
            || board[randomX][randomY] === missed
        ) {
            randomX = Math.round((Math.random() * 100) % 9);
            randomY = Math.round((Math.random() * 100) % 9);
        }

        if (board[randomX][randomY] instanceof Ship)
            ship = board[randomX][randomY];

        gameboard.receiveAttack(randomX, randomY);

        return [board[randomX][randomY], randomX, randomY, ship];
    }

    randomGameboard() {
        const gameboard = this.gameboard;

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

        let randomX = null, randomY = null;

        shipTypes.forEach(type => {
            const ship = new Ship(type.length, type.name);
            let j = 0;

            do {
                randomX = Math.round(Math.random() * 100) % 9;
                randomY = Math.round(Math.random() * 100) % 9;

            } while ((randomX + ship.length - 1) > 9 || this.spaceAvailable(gameboard, [randomX, randomY], ship))

            gameboard.placeShip(ship, [randomX, randomY]);
        })
    }

    spaceAvailable(gameboard, positions, ship) {
        const head = [positions[0], positions[1]];
        const tail = [positions[0] + ship.length - 1, positions[1]];

        const isPosition = (gameboard, x, y) => {
            return (x >= 0 && y >= 0 && x < 10 && y < 10) ? gameboard[x][y] : "none";
        }

        let isThereAnyShip = false;
        let currentPosition = [];

        let x, y;

        gameboard = gameboard.getGameBoard();

        for (let i = 0; i < ship.length && !isThereAnyShip; i++) {
            currentPosition = [positions[0] + i, positions[1]];

            x = currentPosition[0], y = currentPosition[1];

            if (head.toString() === currentPosition.toString()) {
                isThereAnyShip = isPosition(gameboard, x - 1, y - 1) instanceof Ship
                    || isPosition(gameboard, x - 1, y) instanceof Ship
                    || isPosition(gameboard, x - 1, y + 1) instanceof Ship
                    || isPosition(gameboard, x, y - 1) instanceof Ship
                    || isPosition(gameboard, x, y + 1) instanceof Ship
                    || isPosition(gameboard, x, y) instanceof Ship
            } else if (tail.toString() === currentPosition.toString()) {
                isThereAnyShip = isPosition(gameboard, x + 1, y - 1) instanceof Ship
                    || isPosition(gameboard, x + 1, y) instanceof Ship
                    || isPosition(gameboard, x + 1, y + 1) instanceof Ship
                    || isPosition(gameboard, x, y - 1) instanceof Ship
                    || isPosition(gameboard, x, y + 1) instanceof Ship
                    || isPosition(gameboard, x, y) instanceof Ship
            } else {
                isThereAnyShip = isPosition(gameboard, x, y - 1) instanceof Ship
                    || isPosition(gameboard, x, y + 1) instanceof Ship
                    || isPosition(gameboard, x, y) instanceof Ship
            }
        }
        return isThereAnyShip;
    }
}

export default Player;