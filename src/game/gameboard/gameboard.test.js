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

        const board = new Array(10).fill([]);
        board.forEach((_, i) => {
            board[i] = [...(new Array(10)).fill([])];
        });

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

    test('Whether or not attack hit a ship: Case 1', () => {
        const gameboard = new Gameboard();
        const battleship = new Ship(4);
        gameboard.placeShip(battleship, [5 , 4]);

        expect(gameboard.receiveAttack(5, 4)).toBe(true);
    });
    
    test('Whether or not attack hit a ship: Case 2', () => {
        const gameboard = new Gameboard();
        const battleship = new Ship(4);
        gameboard.placeShip(battleship, [5 , 4]);

        expect(gameboard.receiveAttack(6, 5)).toBe(false);
    });

    test('Keep tracking of missed attacks properly', () => {
        const gameboard = new Gameboard();
        const submarine = new Ship(4);
        gameboard.placeShip(submarine, [5 , 4]);
        gameboard.receiveAttack(5, 5);
        expect(gameboard.getGameBoard()[5][5]).toBe('M');
    });
    
    test('Report whether or not all of their ships have been sunk', () => {
        const gameboard = new Gameboard();
        const battleship = new Ship(4);
        gameboard.placeShip(battleship, [5 , 4]);
        gameboard.receiveAttack(5, 4);
        gameboard.receiveAttack(6, 4);
        gameboard.receiveAttack(7, 4);
        gameboard.receiveAttack(8, 4);
        gameboard.receiveAttack(9, 4);
        expect(gameboard.isAllShipSunk()).toBe(true);
    });
})