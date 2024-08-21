import Rocket from "../../assets/rocket.png";
import { appearElement } from "../utils/appearElement";
import { createElement } from "../utils/createElement";
import { loadImage } from "../utils/loadImage";

function createRocket() {
    const rocket = createElement('div', 'rocket');
    const rocketImg = loadImage(Rocket, 'rocket__img');
    appearElement(rocket, rocketImg);

    return rocket;
}

function turnOffBoard(board) {
    const div = createElement('div', 'block');
    appearElement(board, div);
}

function turnOnBoard(type = 'player') {
    const additionClass = type === 'player' ? "" : ".ai";
    const board = document.querySelector(`.board${additionClass}`);
    const block = board.querySelector('.block');
    board.removeChild(block);
}

async function rocketAttack() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Rocket attack");
        }, 2000);
    });
}

export { createRocket, rocketAttack, turnOffBoard, turnOnBoard }