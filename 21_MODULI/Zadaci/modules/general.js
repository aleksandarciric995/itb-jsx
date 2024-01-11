let generateImage = src => {
    let img = document.createElement(`img`);
    img.src = src;
    img.alt = `Alternativni tekst`;
    img.style.width = `400px`;
    // img.width = `400`; kada pisemo bez style, ide bez px
    return img; 
}

export { generateImage };