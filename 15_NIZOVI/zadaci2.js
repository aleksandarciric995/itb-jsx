// Test primeri
let imena = [`Stefan`, `Jelena`, `Marko`, `Milos`, `Bratislav`, `Ljiljana`];

/*
Zadatak 19 Ispisati dužinu svakog elementa u nizu stringova. 
*/

let duzinaSvakogElementa = niz => {
    for(let i = 0; i < niz.length; i++) {
        // niz[i] je string
        let s = niz[i];
        console.log(s.length);
    }
}
duzinaSvakogElementa(imena);

/*
Zadatak 20 Odrediti element u nizu stringova sa najvećom dužinom.
*/

let elementSaNajvecomDuzinom = niz => {
    let index = 0;
    let duzina = niz[0].length;
    for(let i = 1; i < niz.length; i++) {
        if(niz[i].length > duzina) {
            duzina = niz[i].length;
            index = i;
        }
    }
    return niz[index];
}
console.log(elementSaNajvecomDuzinom(imena));

let elementSaNajvecomDuzinomKompaktno = niz => {
    let maxString = niz[0];
    for (let i = 1; i < niz.length; i++) {
        let s = niz[i];
        if(s.length > maxString.length) {
            maxString = s;
        }
    }
    return maxString;
}
console.log(elementSaNajvecomDuzinomKompaktno(imena));

/*
Zadatak 21 Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
*/

let prosecnaDuzina = niz => {
    let broj = 0;
    let brojac = 0;
    for(let i = 0; i < niz.length; i++) {
        broj += niz[i].length;
        brojac++;
    }
    return broj / brojac; // umesto uvodjenja promenljive brojac, mogao sam samo da koristim niz.length
}
console.log(prosecnaDuzina(imena));

let brojElemVecihOdProseka = niz => {
    let brojac = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].length > prosecnaDuzina(niz)) {
            brojac++;
        }
    }
    return brojac;
}

console.log(brojElemVecihOdProseka(imena));

/*
Zadatak 22 Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 
*/

let brojElemNizaStringovaSadrzaSlovoa = niz => {
    let brojac = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].includes(`a`)) {
            brojac++;
        }
    }
    return brojac;
}
console.log(brojElemNizaStringovaSadrzaSlovoa(imena));

/*
Zadatak 23 Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 
*/

let brojElemNizaStringovaKojiPocinjusaAilia = niz => {
    let brojac = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].startsWith(`a`) || niz[i].startsWith(`A`)) {
            brojac++;
        }
    }
    return brojac;
}
console.log(brojElemNizaStringovaKojiPocinjusaAilia(imena));

console.log(imena[1][3]);


/* JELENA TAKAC NACIN
// ZADATAK 22
// 1. nacin
let brElKojiSadrzeA = niz => {
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) { // prolazim kroz sve elemente niza
        for (let j = 0; j < niz[i].length; j++) { // prolazim kroz sve karaktere svakog elementa niza
            if (niz[i][j] == 'a') {
                brojac++;
                break;  // ovo govori: kada se prvi put stekne uslov true izadji iz petlje ne zanima me dalje(neke rijeci sadrze vise 'a') pa zato ide break.
            }
        }
    }
    return brojac;
}
console.log(brElKojiSadrzeA(stavke));
// 2. nacin
let brElKojiSadrzeA2 = niz => {
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].includes('a')) {
            brojac++;
        }
    }
    return brojac;
}
console.log(brElKojiSadrzeA2(stavke));

// ZADATAK 23 
// 1. nacin
let brElKojiPocinjuSaA = niz => {
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i][0] == 'a' || niz[i][0] == 'A') {
            brojac++;
        }
    }
    return brojac;
}
console.log(brElKojiPocinjuSaA(stavke));
console.log(brElKojiPocinjuSaA(stavke1));
console.log(brElKojiPocinjuSaA(stavke2));
let imena = ["Ana", "Milica", "Ananas"];
// 2. nacin
let brElKojiPocinjuSaA1 = niz => {
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].startsWith('a') || niz[i].startsWith('A')) {
            brojac++;
        }
    }
    return brojac;
}
console.log(brElKojiPocinjuSaA1(imena));
*/

// Zadatak 24 

let zad24a = (a, b) => {
    let n = a.length; // ovo je i b.length posto su po uslovu zadatka nizovi a i b iste duzine
    let c = [];
    for(let i = 0; i < n; i++) {
        c.push(a[i], b[i]);
    }
    return c;
    // u 0. iteraciji c = [];
    // u 1. iteraciji c = [a[o], b[o]]
    // u 2. iteraciji c = [a[o], b[o], a[1], b[1]]
    // u n-1. iteraciji c = [a[o], b[o], a[1], b[1], ... , a[n-1], b[n-1]]
}
// druga varijanta
let zad24b = (a, b) => {
    let n = a.length;
    let c = [];
    for(let i = 0; i < n; i++) {
        c[2 * i] = a[i];
        c[2 * i + 1] = b[i];
    }
    return c;
}

nizA = [`prvi`, `treci`, `peti`, `sedmi`];
nizB = [`drugi`, `cetvrti`, `sesti`, `osmi`];

console.log(zad24a(nizA, nizB));
console.log(zad24b(nizA, nizB));

// zadatak 19 drugi nacin vezbanje 
// Ispisati dužinu svakog elementa u nizu stringova. 

let zadatak19 = niz => {
    for(let i = 0; i < niz.length; i++) {
        let brojac = 0;
        for(let j = 0; j < niz[i].length; j++) {
        brojac++;
    }
    console.log(brojac);  
}
}
zadatak19(imena);

// zadatak 20 vezbanje Odrediti element u nizu stringova sa najvećom dužinom.

let zadatak20 = niz => {
    let maxElem = niz[0];
    for(let i = 1; i < niz.length; i++) {
        let s = niz[i];
        if(maxElem.length < s.length) {
            maxElem = s;
        }
    }
    return maxElem;
}

console.log(`zadatak 20 = ${zadatak20(imena)}`);

// 21 Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

let zadatak21 = niz => {
    let srVr = niz => {
    let suma = 0;
    for(let i = 0; i < niz.length; i++) {
        suma += niz[i].length;
    }
    return suma / niz.length;
    }
    let brojac = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].length > srVr(niz)) {
            brojac++;
        }
    }
    return brojac;
}
console.log(zadatak21(imena));

/*
22 - Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’.
*/

let zadatak22 = niz => {
    brojac = 0;
    for(let i = 0; i < niz.length; i++) {
        for(let j = 0; j < niz[i].length; j++) {
            if(niz[i][j] === `a`) {
                brojac++;
                break;
            }
        }
    }
    return brojac;
}
console.log(zadatak22(imena));

let zadatak22B = niz => {
    brojac = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].includes(`a`)) {
            brojac++;
        }
    }
    return brojac;
}
console.log(zadatak22B(imena));

/*
Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 
*/

let zadatak23 = niz => {
    let brojac = 0;
    for(i = 0; i < niz.length; i++) {
        if(niz[i][0] === `a` || niz[i][0] === `A`) {
            brojac++;
        }
    }
    return brojac;
}
console.log(zadatak23(imena));

let imena2 = [`Stefan`, `Jelena`, `Marko`, `Milos`, `Bratislav`, `Ljiljana`, `aca`, `Ana`];

let zadatak23B = niz => {
    let brojac = 0;
    for(i = 0; i < niz.length; i++) {
        if(niz[i].startsWith(`a`) || niz[i].startsWith(`A`)) {
            brojac++;
        }
    }
    return brojac;
}
console.log(zadatak23B(imena2));

// ZADATAK 24

nizA = [1, 3, 5, 7, 9];
nizB = [2, 4, 6, 8, 10];
let nizC = [];

let zadatak24 = (niz1, niz2) => {
    for(let i = 0; i < niz1.length; i++) {
        nizC[2 * i] = niz1[i];
        nizC[2 * i + 1] = niz2[i];
    }
}
zadatak24(nizA, nizB);
console.log(nizC);

nizC = [];

let zadatak24b = (niza, nizb) => {
    for(let i = 0; i < niza.length; i++) {
    nizC.push(niza[i], nizb[i]);
    }
}
zadatak24b(nizA, nizB);
console.log(nizC);


// ZADATAK 25
console.log(`ZADATAK 25`);

nizC = [];

let zadatak25 = (a, b) => {
    for(let i = 0; i < a.length; i++) {
        nizC[i] = [a[i] * b[i]];
    }
}
zadatak25(nizA, nizB);
console.log(nizC);

// ZADATAK 26 

nizA = [1, 3, 5, 7, 9];
nizB = [];

let zadatak26 = (a) => {
    for(let i = 0; i < a.length; i++) {
        nizB[i] = (a[i] + (2 * a.length - 1 - i)) / 2;
    }
}
zadatak26(nizA);
console.log(nizB);