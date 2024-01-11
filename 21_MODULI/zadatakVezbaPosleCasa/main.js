import { generateList, generateListItem } from "./moduli/list.js";
import { generateTable, generateTableRow, generateTableItem } from "./moduli/table.js";

let ul = generateList(document.body);
generateListItem(ul, `images/1.webp`);
generateListItem(ul, `images/1.webp`);
generateListItem(ul, `images/1.webp`);

let test = console.log(`test`);

let table = generateTable(document.body);
let tr = generateTableRow(table);
let tr2 = generateTableRow(table);
generateTableItem(tr, `images/1.webp`);
generateTableItem(tr, `images/2.jpg`);
generateTableItem(tr, `images/3.jpg`);
generateTableItem(tr2, `images/1.webp`);
generateTableItem(tr2, `images/2.jpg`);
generateTableItem(tr2, `images/3.jpg`);
