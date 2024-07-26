class Ship {
    #hitNum;
    constructor(length = 0) {
        this.length = length;
        this.#hitNum = 0;
    }

    hit() {
        this.#hitNum += 1;
    }

    getHitNumber() {
        return this.#hitNum;
    }

    isSunk() {
        if (this.length === this.#hitNum) {
            return true;
        }

        return false;
    }
}

export default Ship;