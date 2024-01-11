import Film from "./moduli/film.js";

let f1 = new Film(`Konan`, `` , 1998);
console.log(f1);

let f2 = new Film(`Varljivo leto 65`, `Seka`, 1965);
console.log(f2);

let f3 = new Film(``, `Ana`, ``);
console.log(f3);

f1.stampaj();
f2.stampaj();
f3.stampaj();