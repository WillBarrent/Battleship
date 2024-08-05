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
        randomX = randomY = Math.round((Math.random() * 100) % 9);

        const hitted = gameboard.getHitted();
        const missed = gameboard.getMissed();
    
        gameboard = gameboard.getGameBoard();

        while (gameboard[randomX][randomY] === hitted
            || gameboard[randomX][randomY] === missed
        ) {
            randomX = randomY = Math.round((Math.random() * 100) % 9);
        }

        gameboard[randomX][randomY] = gameboard[randomX][randomY] instanceof Ship ? hitted : missed;

        return [gameboard[randomX][randomY], randomX, randomY];
    }
}

export default Player;