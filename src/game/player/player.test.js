import Player from "./player";

describe('Testing Player Class', () => {
    test('The Player has it is own gameboard', () => {
        const player = new Player();
        expect(player.hasGameboard()).toBe(true);
    })
})