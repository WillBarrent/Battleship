import Ship from "../ship/ship";
import Gameboard from "./gameboard";

describe('Testing Gameboard Class', () => {
    test('Creating gameboard', () => {
        const gameboard = new Gameboard();
        const board = new Array(10).fill([...(new Array(10).fill([]))]);
        expect(gameboard.getGameBoard()).toEqual(board);
    });

    test('Place ship at specific coordinates: Case 1', () => {
        const gameboard = new Gameboard();
        const carrier = new Ship(5);
        gameboard.placeShip(carrier, [4, 4]);
        const board = new Array(10).fill([...(new Array(10).fill([]))]);
        const positions = [[4, 4], [5, 4], [6, 4], [7, 4], [8, 4]];
        positions.forEach(position => {
            const x = position[0];
            const y = position[1];
            board[x][y] = carrier;
        })
        expect(gameboard.getGameBoard()).toEqual(board)
    });
    
    test('Place ship at specific coordinates: Case 2', () => {
        const gameboard = new Gameboard();
        const carrier = new Ship(5);
        expect(gameboard.placeShip(carrier, [6, 7])).toBe("ERROR")
    });

    test('Whether or not attack hit a ship', () => {

    });

    test('Keep tracking of missed attacks properly', () => {

    });
    
    test('Report whether or not all of their ships have been sunk', () => {

    })
})