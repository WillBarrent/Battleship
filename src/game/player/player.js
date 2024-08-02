import Gameboard from '../gameboard/gameboard';

class Player {
    constructor() {
        this.gameboard = new Gameboard();
    }

    hasGameboard() {
        return this.gameboard instanceof Gameboard;
    }
}

export default Player;