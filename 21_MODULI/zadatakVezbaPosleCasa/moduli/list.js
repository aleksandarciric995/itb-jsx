import { generateImage } from "./general.js";

let generateList = parent => {
    let ul = document.createElement(`ul`);
    parent.append(ul);
    ul.style.listStyle = `none`;
    return ul;
}

let generateListItem = (parent, src) => {
    let li = document.createElement(`li`);
    let img = generateImage(src);
    parent.append(li);
    li.append(img);
    return li;
}

export { generateList, generateListItem };