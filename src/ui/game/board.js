function createBoard(image) {

}

function createPosition(className = "empty", textContent) {
    const div = document.createElement("div");
    div.className = className === "empty" ? "position" : className; 
    if (className === "empty") {
        return div;
    }

    div.textContent = textContent;
    return div;
}

export {createBoard as default};