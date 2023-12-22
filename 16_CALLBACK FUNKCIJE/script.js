/*
TEST PRIMERI
*/
let a = [-6, 8, 11, 6, 0];
let b = [`pera`, `mika`, `laza`];


// BEz callback funkcija

function ispisNizaKonzola(niz) {
    let s = ``;
    for(let i = 0; i < niz.length; i++) {
        s += niz[i] + ` `;
    }
    console.log(s);
}

function ispisNizaStranica(niz) {
    let s = ``;
    for(let i = 0; i < niz.length; i++) {
        s += niz[i] + ` `;
    }
    let div = document.getElementById(`containter`);
    div.innerHTML += s;
}

ispisNizaKonzola(a);
ispisNizaKonzola(b);
ispisNizaStranica(a);
ispisNizaStranica(b);

// Funkcija 1: niz => {for petljom prodjemo kroz sve elemente niza, i generisani string ispisemo u konzoli}
// Funkcija 2: niz => {for petljom prodjemo kroz sve elemente niza, i generisani string ispisemo u div tag}
// a moze li ovako?
// Funkcija: (niz, nacin) => {for petljom prodjemo kroz sve elementa niza,  igenerisani string ispise na zadati (iz zagrade) nacin}

// Sa callback funkcijama

function ispisKonzola(p) {
    console.log(p);
}

function ispisStranica(p) {
    let div = document.getElementById(`containter`);
    div.innerHTML += p;
}

function ispisNiza(niz, cb) {
    let s = ``;
    for(let i = 0; i < niz.length; i++) {
        s += niz[i] + ` `;
    }
    cb(s);
}

ispisNiza(a, ispisKonzola);
ispisNiza(b, ispisKonzola);
ispisNiza(a, ispisStranica);
ispisNiza(b, ispisStranica);

// Anonimna funkcija kao callback funkcija
ispisNiza([1, 2, 3, 4, 5], function(p) {
    console.log(p);
});

// Arrow funkcija kao callback funkcija

ispisNiza([9, 8, 7, 6], p => {
    console.log(p);
});

// forEach petlja

a.forEach(ispisKonzola);
// forEach petlja - prolazi kroz sve elementa niza, i za svaki element niza poziva callback funkciju i prosledjuje vrednost elementa kao argument

b.forEach(ispisKonzola);

a.forEach(function(e) {
    console.log(e);
});
b.forEach(function(e) {
    console.log(e);
});

a.forEach(e => {
    let div = document.getElementById(`containter`);
    div.innerHTML += e;
});

a.forEach((e, i) => {
    console.log(`Element ${e} u nizu ima indeks ${i}`);
});