import { createElement } from "../utils/createElement"
import { appearElement } from "../utils/appearElement";
import { loadImage } from "../utils/loadImage";

import Start from '../../assets/start.png'
import Notice from '../../assets/notice.png'

import Battleship from '../../assets/ships/battleship.png';
import Cruiser from '../../assets/ships/cruiser.png';
import Destroyer from '../../assets/ships/destroyer.png';
import Rescue from '../../assets/ships/rescue.png';
import Patrol from '../../assets/ships/patrol.png';

import createShip from "./ship";

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

    const battleship = createShip('battleship', Battleship);
    const cruiser = createShip('cruiser', Cruiser);
    const destroyer = createShip('destroyer', Destroyer);
    const rescue = createShip('rescue', Rescue);
    const patrol = createShip('patrol', Patrol);

    appearElement(selection, battleship);
    appearElement(selection, cruiser);
    appearElement(selection, destroyer);
    appearElement(selection, rescue);
    appearElement(selection, patrol);

    return selection;
}

export { createSelectionPanel as default }