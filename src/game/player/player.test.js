import Ship from "../ship/ship";
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

    test('Random gameboad generation', () => {
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

        const ai = new Player();

        ai.randomGameboard();

        const gameboard = ai.gameboard.getGameBoard();
        const allShipPositions = ai.gameboard.getShipPositions();

        let isAllCorrect = true;

        for (let i = 0; i < shipTypes.length && isAllCorrect; i++) {
            const type = shipTypes[i];
            const ship = new Ship(type.length, type.name);

            const x = allShipPositions[i][0];
            const y = allShipPositions[i][1];
            isAllCorrect = !((x + ship.length - 1) > 9) && ship.type === type.name;
        }

        expect(isAllCorrect).toBe(true);
    })
})