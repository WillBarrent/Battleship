class Ship {
    #hitNum;
    constructor(length = 0, type) {
        this.length = length;
        this.type = type;
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