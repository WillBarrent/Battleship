function loadImage(src, className) {
    const image = new Image();
    image.src = src;
    image.className = className;
    return image;
}

export { loadImage }