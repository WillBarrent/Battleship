import Player from "./player";

describe('Testing Player Class', () => {
    test('The Player has it is own gameboard', () => {
        const player = new Player();
        expect(player.hasGameboard()).toBe(true);
    });

    test('The AI make random attack', () => {
        const testPlayer = new Player();
        const testAIPlayer = new Player();

        const testPlayerGameboard = testPlayer.gameboard;
        const testAIPlayerGameboard = testAIPlayer.gameboard;

        const [attacked, X, Y] = testAIPlayer.makeRandomAttack(testPlayerGameboard);
        
        expect(testPlayerGameboard.getGameBoard()[X][Y]).toBe(attacked);
    })
})