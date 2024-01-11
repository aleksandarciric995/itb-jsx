import { generateImage } from "./general.js";

let generateTable = parent => {
    let table = document.createElement(`table`);
    parent.append(table);
    return table;
}

let generateTableRow = parent => {
    let tr = document.createElement(`tr`);
    parent.append(tr);
    return tr;
}

let generateTableItem = (parent, src) => {
    let td = document.createElement(`td`);
    td.appendChild(generateImage(src));
    parent.append(td);
    return td;
}

export {generateTable, generateTableRow, generateTableItem};