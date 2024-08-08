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
            }
        ];

        const testFields = [
            [0, 1],
            [1, 0],
            [1, 1],
            [0, -1],
            [-1, 0],
            [-1, -1],
            [-1, 1],
            [1, -1]
        ];

        let randomX = null, randomY = null;

        shipTypes.forEach(type => {
            randomX = Math.round((Math.random() * 100) % 9);
            randomY = Math.round((Math.random() * 100) % 9);

            const ship = new Ship(type.length, type.name);

            let shipPositions = null;

            let head = null, tail = null;

            while (false) {
                randomX = Math.round((Math.random() * 100) % 9);
                randomY = Math.round((Math.random() * 100) % 9);

                shipPositions = (new Array(type.length)).fill(null).map((_) => {
                    return [randomX++, randomY];
                });

                head = shipPositions.at(0), tail = shipPositions.at(-1);
                let field = null;

                for (let i = 0; i < testFields.length; i++) {
                    field = testFields[i]
                    const headX = field[0] + head[0],
                        headY = field[1] + head[1];
                    const tailX = field[0] + tail[0],
                        tailY = field[1] + tail[1];

                    if (headX <= 9 && headY <= 9) {

                    }

                    if  (tailX <= 9 && tailY <= 9) {

                    }
                }

                j += 1;
            }

            for (let i = randomX; i < type.length; i++) {
                gameboard.getGameBoard()[randomX][randomY] = ship;
            }
        });
    }
}

export default Player;