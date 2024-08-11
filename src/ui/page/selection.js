import createSelectionPanel from "../game/selectionPanel";
import createBoard from "../game/board";
import { appearElement } from "../utils/appearElement";
import dragndrop from "../game/dragndrop";
import Player from "../../game/player/player";

function createSelection() {
    const game = document.querySelector('.game');
    const selectionGameboard = createBoard();
    const selection = createSelectionPanel();

    appearElement(game, selectionGameboard);
    appearElement(game, selection);

    const player = new Player();

    dragndrop(selection, player)
}

export { createSelection as default }