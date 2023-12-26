console.log(document); // document je objekat (koren DOM stabla (koren znaci predak))
console.log(document.body); // body svojstvo document objekta je objekat
let e1 = document.getElementById(`p2`);
console.log(e1); // (jedinstven - zbog ID) objekat iz DOM stabla

let el2 = document.getElementsByClassName(`par`);
console.log(el2); //HTML kolekcija objekata iz DOM stabla

// Pristup elementima HTML kolekcije
for(let i = 0; i < el2.length; i++) {
    console.log(el2[i]);
}

// HTML kolekcije ne poseduju forEach petlju
// el2.forEach(el => {
//     console.log(el);
// }); ovo prijavljuje gresku jer HTML NE POSEDUJE forEach petlju

let niz = Array.from(el2);
niz.forEach(el => {
    console.log(el);
});

let el3 = document.getElementsByTagName(`p`); // vraca HTML kolekciju
console.log(el3);

let el4 = document.getElementsByName(`p`); // vraca NodeList
console.log(el4); 
el4.forEach(el => {
    console.log(el);
});

// svi objekti tipa niz nasledjuju klasu Array - svi nizovi pripadaju toj klasi Array(postoji forEach). Postoje i HTMLCollection(NE postoji forEach, ali moze FOR petlja) i NodeList(postoji forEach)

console.log(el4[0]); // kad ima samo JEDAN element, mozemo ovako pristupiti, ne mora FOR petlja

let t1 = document.querySelector(`#p2`);
console.log(t1);

let  t2 = document.querySelector(`.par`); // vraca objekat iz DOM stabla
console.log(t2);

let t3 = document.querySelectorAll(`.par`); // vraca NodeList
console.log(t3);

t3.forEach(el => {
    console.log(el);
});

let t4 = document.querySelectorAll(`div p.par`);
console.log(t4);

/*
Dohvatiti prvi paragraf na stranici.
Dohvatiti prvi div tag sa klasom „error“.
Dohvatiti poslednji red u tabeli.
Dohvatiti sve linkove na stranici.
Dohvatiti sve slike na stranici.
*/

// Prvi paragraf na stranici
console.log(t2);
// drugi nacin
let v5 = document.querySelector(`p:first-of-type`);
console.log(v5);
let v6 = document.querySelector(`p:first-child`);
console.log(v6);

// Prvi div tag sa klasom error
let v1 = document.querySelector(`div.error`);
console.log(v1);
// zadnji red tabele
let v2 = document.querySelector(`tr:last-of-type`);
console.log(v2);
// svi linkovi na stranici
let v3 = document.getElementsByTagName(`a`);
console.log(v3);
// sve slike na stranici
let v4 = document.getElementsByTagName(`img`);
console.log(v4);
for(let i = 0; i < v4.length; i++) {
    console.log(v4[i]);
}

let link = document.querySelector(`a`);
link.innerHTML = `<span style="font-weight: bold" id="ca">Novi tekst</span> prvog linka`; // += dodaje tekst a samo = menja tekst
// link.href = `https://www.google.com`;
link.setAttribute(`href`, `https://www.google.com`);
link.setAttribute(`target`, `_blank`);
// a moze i link.target = `_blank;
link.id = `pera`;

// link.style.color = `red`;
// link.style.fontSize = `18px`;
// link.style.textDecoration = `none`;
let linkovi = document.querySelectorAll(`a`);
linkovi.forEach(link => {
    link.style.color = `red`;
    link.style.fontSize = `18px`;
    link.style.textDecoration = `none`;
    // link.setAttribute(`style`, `color: red; font-size: 26px; text-decoration: none;`);
});

// PRVA VEZBA

document.querySelectorAll(`p`).forEach(p => {
    p.innerHTML += ` VAZNO!!!`;
});

// DRUGA VEZBA
document.querySelectorAll(`div.error`).forEach(div => {
    div.innerHTML += `<h1>Greska!</h1>`
});

// TRECA VEZBA
document.querySelectorAll(`p`).forEach((p, i) => {
        p.innerHTML += `${(i + 1) * (i + 1)}`;
});

// CETVRTA VEZBA
document.querySelectorAll(`img`).forEach(img => {
    img.setAttribute(`alt`, `cao`);
});

// PETA VEZBA
document.querySelectorAll(`p`).forEach(p => {
    p.style.color = `purple`;
});

// SESTA VEZBA
document.querySelectorAll(`p:nth-child(even)`).forEach(p => {
    p.style.backgroundColor = `green`;
});
document.querySelectorAll(`p:nth-child(odd)`).forEach(p => {
    p.style.backgroundColor = `red`;
});
