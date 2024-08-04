import Player from './game/player/player';
import Ship from './game/ship/ship';
import './style.css';
import createGameboard from './ui/page/game';

const player = new Player();
const ai = new Player();

const playerGameboard = player.gameboard;
const aiGameboard = ai.gameboard;

const battleship = new Ship(5, 'battleship');
const cruiser = new Ship(4, 'cruiser');
const destroyer = new Ship(4, 'destroyer');
const rescue = new Ship(3, 'rescue');
const patrol = new Ship(3, 'patrol');

playerGameboard.placeShip(battleship, [0, 0]);
playerGameboard.placeShip(cruiser, [1, 3]);
playerGameboard.placeShip(destroyer, [4, 6]);
playerGameboard.placeShip(rescue, [5, 9]);
playerGameboard.placeShip(patrol, [7, 1]);

aiGameboard.placeShip(battleship, [0, 0]);
aiGameboard.placeShip(cruiser, [1, 3]);
aiGameboard.placeShip(destroyer, [2, 4]);
aiGameboard.placeShip(rescue, [5, 9]);
aiGameboard.placeShip(patrol, [1, 7]);

console.table(playerGameboard.getGameBoard());

createGameboard(playerGameboard);
createGameboard(aiGameboard, 'ai');