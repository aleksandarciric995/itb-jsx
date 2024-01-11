let generateImage = src => {
    let img = document.createElement(`img`);
    img.src = src;
    img.style.width = `300px`;
    img.alt = `nema slike`;
    return img;
}

export { generateImage };