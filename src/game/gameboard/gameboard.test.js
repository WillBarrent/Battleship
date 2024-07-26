import Gameboard from "./gameboard";

describe('Testing Gameboard Class', () => {
    test('Creating gameboard', () => {
        const gameboard = new Gameboard();
        const board = new Array(10).fill([...(new Array(10).fill([]))]);
        expect(gameboard.getGameBoard()).toEqual(board);
    });
    test('Place ship at specific coordinates', () => {
        
    });
    test('Whether or not attack hit a ship', () => {

    });
    test('Keep tracking of missed attacks properly', () => {

    });
    test('Report whether or not all of their ships have been sunk', () => {

    })
})