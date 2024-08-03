import { createElement } from "../utils/createElement"
import { appearElement } from "../utils/appearElement";
import { loadImage } from "../utils/loadImage";

import Start from '../../assets/start.png'
import Notice from '../../assets/notice.png'

function createSelectionPanel() {
    const selection = createElement('div', 'selection');
    
    const start = createElement('div', 'start');
    const startImage = loadImage(Start, 'start__img');

    const notice = createElement('div', 'notice');
    const noticeImage = loadImage(Notice, 'notice__img');


    appearElement(start, startImage);
    appearElement(selection, start);

    appearElement(notice, noticeImage);
    appearElement(selection, notice);

    return selection;
}

export { createSelectionPanel as default }