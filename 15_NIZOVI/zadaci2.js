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