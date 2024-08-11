import { createElement } from "../utils/createElement"

import Modal from '../../assets/modal.png';
import Notice from '../../assets/notice.png';
import NewStart from '../../assets/newstart.png';

import { appearElement } from "../utils/appearElement";
import { loadImage } from "../utils/loadImage"

function restartTheGame(loser) {
    const modal = createElement('div', 'modal');
    const modalBar = createElement('div', 'modal__bar')
    const modalNotice = createElement('div', 'modal__notice');
    const modalNoticeImage = loadImage(Notice, 'modal__notice--img');
    const modalRestart = createElement('div', 'modal__restart');
    const modalRestartImage = loadImage(NewStart, 'modal__restart--img');

    const mainHeadText = `You ${loser === 'player' ? "Lost" : "Win"}!`

    const mainSecondText = 'Click on the "New Game" button to restart the game';

    const modalHead = createElement('h1', 'modal__head');
    const modalInfo = createElement('p', 'modal__info');

    modalHead.textContent = mainHeadText;
    modalInfo.textContent = mainSecondText;

    appearElement(modal, modalBar);
    appearElement(modalNotice, modalNoticeImage);
    appearElement(modalRestart, modalRestartImage);
    appearElement(modalBar, modalNotice);
    appearElement(modalBar, modalRestart);
    appearElement(modalBar, modalHead)
    appearElement(modalBar, modalInfo)

    appearElement(document.body, modal);

    modalRestart.onclick = () => {
        window.location.reload();
    }
}

export { restartTheGame as default }