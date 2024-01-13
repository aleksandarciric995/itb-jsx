import Film from "./film.js";

let film1 = new Film(`Cuvari formule`, `Dragan Bjelogrlic`, 2023, [6, 7, 8, 9, 10]);
let film2 = new Film(`Klopka`,`Srdan Golubovic`, 2007, [3, 11]);
let film3 = new Film(`Maratonci trce pocasni krug`, `Slobodan Sijan`, 1982, [7, 10, 9, 8, 6]);
let filmovi = [film1, film2, film3];

// film1.stampaj();
// film2.stampaj();
// filmovi[2].stampaj();

// console.log(`Ispis for petljom`);

// for(let i = 0; i < filmovi.length; i++) {
//     filmovi[i].stampaj();
// }

// console.log(`Ispis forEach petljom`);

// filmovi.forEach(f => {
//     f.stampaj();
// })

console.log(filmovi[0]);
console.log(filmovi[1]);
console.log(filmovi[2]);
