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
}

export default Player;