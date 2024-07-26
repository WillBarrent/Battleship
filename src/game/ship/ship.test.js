import Ship from "./ship";

describe('Testing Shift Class', () => {
    test('Was the ship hit numbers increased', () => {
        const ship = new Ship(3);
        ship.hit();
        ship.hit();
        expect(ship.getHitNumber()).toBe(2);
    });
    
    test('Did the ship sank', () => {
        const ship = new Ship(2);
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
})