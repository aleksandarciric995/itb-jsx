// Test primeri

let brojevi1 = [8, 4, -2, 0, 1, 9];
let brojevi2 = [10, -5, 0, -3];
let brojevi3 = [1, 2, 3, 4, 5, 6];
let brojevi4 = [1, 5, 9, 3];
let brojevi5 = [8, 6, 7, 8, 5];

// ZADATAK 2 Odrediti zbir elemenata celobrojnog niza.

let sumaElem = niz => {
    let suma = 0;
    for(let i = 0; i < niz.length; i++) {
        suma = suma + niz[i];
    }
    return suma;
}

console.log(sumaElem(brojevi1));
console.log(sumaElem(brojevi2));
console.log(sumaElem(brojevi3));

// ZADATAK 3 Odrediti proizvod elemenata celobrojnog niza.

let proizvodElem = niz => {
    let proizvod = 1;
    for(let i = 0; i < niz.length; i++) {
        proizvod *= niz[i];
    }
    return proizvod;
}

console.log(proizvodElem(brojevi1));
console.log(proizvodElem(brojevi2));
console.log(proizvodElem(brojevi3));

// if((-5) * 0 * 3 === (-5) * 0 * (-3)) {
//     console.log(`-0 === 0`);
// }

// ZADATAK 4 Odrediti srednju vrednost elemenata celobrojnog niza.

let srednjaVrednost = niz => {
    return sumaElem(niz) / niz.length;
}
console.log(srednjaVrednost(brojevi3));

let srednjaVrednost2 = niz => niz.length != 0 ? sumaElem(niz) / niz.length : 0;
console.log(`console log od srednjaVrednost 2 = ${srednjaVrednost2(brojevi3)}`);

// ZADATAK 4a: Odrediti srednju vrednost parnih elemenata celobrojnog niza

let srVrednostParnih = niz => {
    let suma = 0;
    br = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] % 2 == 0) {
        suma += niz[i];
        br++;
        }
    }
    if(br != 0) {
        return suma / br;
    }
    else {
    return 0;
    }
}
console.log(srVrednostParnih(brojevi3));


console.log(srVrednostParnih(brojevi4));

// Zadatak 5 Odrediti maksimalnu vrednost u celobrojnom nizu.

let maks = niz => {
    let najveciBroj = niz[0];
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] > najveciBroj) {
            najveciBroj = niz[i];
        }
    }
    return najveciBroj;
}

console.log(maks(brojevi1));

// Zadatak 6 Odrediti minimalnu vrednost u celobrojnom nizu.
// brojevi3 = [1, 2, 3, 4, 5, 6];
let min = niz => {
    let najmanjiBroj = niz[0];
    for(let i = 1; i < niz.length; i++) {
        if(najmanjiBroj > niz[i]) {
            najmanjiBroj = niz[i];
        }
    }
    return najmanjiBroj;
}

console.log(min(brojevi3));

// ZADATAK 7 Odrediti indeks maksimalnog elementa celobrojnog niza.
let indMaxNiza = niz => {
    let max = niz[0];
    let index = 0;
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] > max) {
            max = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(indMaxNiza(brojevi1));
console.log(indMaxNiza(brojevi2));
console.log(indMaxNiza(brojevi3));
console.log(indMaxNiza(brojevi4));
console.log(indMaxNiza(brojevi5));

// ZADATAK 8 Odrediti indeks minimalnog elementa celobrojnog niza.
let indMinNiza = niz => {
    let min = niz[0];
    let index = 0;
    for(i = 1; i < niz.length; i++) {
        if(niz[i] < min) {
            min = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(`Zadatak 8`);
console.log(indMinNiza(brojevi1));
console.log(indMinNiza(brojevi2));
console.log(indMinNiza(brojevi3));
console.log(indMinNiza(brojevi4));
console.log(indMinNiza(brojevi5));

// ZADATAK 9 Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
let brElemVeciOdSrVr = niz => {
    let br = 0;
    for(i = 0; i < niz.length; i++) {
        if(niz[i] > srednjaVrednost(niz)) {
            br++;
        }
        // br += (niz[i] > srednjaVrednost(niz)) ? 1 : 0; MOZE I OVAKO UMESTO CELOG IF
}
return br;
}
/*
let brojevi1 = [8, 4, -2, 0, 1, 9];
let brojevi2 = [10, -5, 0, -3];
let brojevi3 = [1, 2, 3, 4, 5, 6];
let brojevi4 = [1, 5, 9, 3];
let brojevi5 = [8, 6, 7, 8, 5];
*/

console.log(`Zadatak 9 - srednje vrednosti`);
console.log(srednjaVrednost2(brojevi1));
console.log(srednjaVrednost2(brojevi2));
console.log(srednjaVrednost2(brojevi3));
console.log(srednjaVrednost2(brojevi4));
console.log(srednjaVrednost2(brojevi5));
console.log(`Zadatak 9 - broj elemenata koji su veci od srvr`);
console.log(brElemVeciOdSrVr(brojevi1));
console.log(brElemVeciOdSrVr(brojevi2));
console.log(brElemVeciOdSrVr(brojevi3));
console.log(brElemVeciOdSrVr(brojevi4));
console.log(brElemVeciOdSrVr(brojevi5));

// ZADATAK 10 Izračunati zbir pozitivnih elemenata celobrojnog niza.
let zbirPozElemNiza = niz => {
    let suma = 0;
    for(i = 0; i < niz.length; i++) {
        if(niz[i] > 0) {
            suma += niz[i];
        }
    }
    return suma;
}

console.log(`ZADATAK 10`);
console.log(zbirPozElemNiza(brojevi1));
console.log(zbirPozElemNiza(brojevi2));
console.log(zbirPozElemNiza(brojevi3));
console.log(zbirPozElemNiza(brojevi4));
console.log(zbirPozElemNiza(brojevi5));

// ZADATAK 11  Odrediti broj parnih elemenata u celobrojnom nizu.
let brojParElemNiza = niz => {
    let br = 0;
    for(i = 0; i < niz.length; i++) {
        if((niz[i] % 2 == 0) && niz[i] != 0) {
            br++
        }
    }
    return br;
}
console.log(`ZADATAK 11`);
console.log(brojParElemNiza(brojevi1));
console.log(brojParElemNiza(brojevi2));
console.log(brojParElemNiza(brojevi3));
console.log(brojParElemNiza(brojevi4));
console.log(brojParElemNiza(brojevi5));

/*
let brojevi1 = [8, 4, -2, 0, 1, 9];
let brojevi2 = [10, -5, 0, -3];
let brojevi3 = [1, 2, 3, 4, 5, 6];
let brojevi4 = [1, 5, 9, 3];
let brojevi5 = [8, 6, 7, 8, 5];
*/

// ZADATAK 12  Odrediti broj parnih elemenata sa neparnim indeksom.
let brojParElemNeparIndex = niz => {
    let br = 0;
    for(i = 0; i < niz.length; i++) {
        if(niz[i] % 2 == 0) {
            if(i % 2 != 0) {
                br++;
            }
        }
    }
    return br;
}
console.log(`ZADATAK 12`);
console.log(brojParElemNeparIndex(brojevi1));
console.log(brojParElemNeparIndex(brojevi2));
console.log(brojParElemNeparIndex(brojevi3));
console.log(brojParElemNeparIndex(brojevi4));
console.log(brojParElemNeparIndex(brojevi5));

// ZADATAK 13  Izračunati sumu elemenata niza sa parnim indeksom.
let sumaElemNizaParniIndex = niz => {
    let suma = 0;
    for(i = 0; i < niz.length; i++) {
        if(i % 2 == 0) {
            suma += niz[i];
        }
    }
    return suma;
}
console.log(`ZADATAK 13`);
console.log(sumaElemNizaParniIndex(brojevi1));
console.log(sumaElemNizaParniIndex(brojevi2));
console.log(sumaElemNizaParniIndex(brojevi3));
console.log(sumaElemNizaParniIndex(brojevi4));
console.log(sumaElemNizaParniIndex(brojevi5));

/*
let brojevi1 = [8, 4, -2, 0, 1, 9];
let brojevi2 = [10, -5, 0, -3];
let brojevi3 = [1, 2, 3, 4, 5, 6];
let brojevi4 = [1, 5, 9, 3];
let brojevi5 = [8, 6, 7, 8, 5];
*/

// ZADATAK 14  Promeniti znak svakom elementu celobrojnog niza.

let promenaZnaka = niz => {
    for(i = 0; i < niz.length; i++) {
        niz[i] = niz[i] * (-1)
    }
    return niz;
}
console.log(`ZADATAK 14`);
console.log(promenaZnaka(brojevi1));
console.log(promenaZnaka(brojevi2));
console.log(promenaZnaka(brojevi3));
console.log(promenaZnaka(brojevi4));
console.log(promenaZnaka(brojevi5));



// ZADATAK 15 Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.
brojevi1 = [8, 4, -2, 0, 1, 9];
brojevi2 = [10, -5, 0, -3];
brojevi3 = [1, 2, 3, 4, 5, 6];
brojevi4 = [1, 5, 9, 3];
brojevi5 = [8, 6, 7, 8, 5];

let promenaZnakaNepElemParIndex = niz => {
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] % 2 != 0) {
            if(i % 2 == 0) {
                niz[i] = niz[i] * (-1);
            }
        }
    }
    return niz; // NIJE NEOPHODNO RETURN NIZ
}
console.log(`ZADATAK 15`);
console.log(promenaZnakaNepElemParIndex(brojevi1));
console.log(promenaZnakaNepElemParIndex(brojevi2));
console.log(promenaZnakaNepElemParIndex(brojevi3));
console.log(promenaZnakaNepElemParIndex(brojevi4));
console.log(promenaZnakaNepElemParIndex(brojevi5));


// zad 15
brojevi1 = [8, 4, -2, 0, 1, 9];
brojevi2 = [10, -5, 0, -3];
brojevi3 = [1, 2, 3, 4, 5, 6];
brojevi4 = [1, 5, 9, 3];
brojevi5 = [8, 6, 7, 8, 5];

console.log(`TEST`);

let promenaZnakaNepElemParIndex1 = niz => {
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] % 2 != 0 && i % 2 == 0) {
            niz[i] = niz[i] * (-1);
        }
    }
    return niz;
}
console.log(`ZADATAK 15`);
console.log(promenaZnakaNepElemParIndex1(brojevi1));
console.log(promenaZnakaNepElemParIndex1(brojevi2));
console.log(promenaZnakaNepElemParIndex1(brojevi3));
console.log(promenaZnakaNepElemParIndex1(brojevi4));
console.log(promenaZnakaNepElemParIndex1(brojevi5));

// ZADATAK 1 Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let kupovina = [`so`, `secer`, `brasno`, `biber`];
let kupovinaLista = niz => {
    let unorderedList = ``;
    for(let i = 0; i < niz.length; i++) {
        unorderedList += `<li>${niz[i]}</li>`;
    }
    document.getElementById(`test`).innerHTML += `<ul>${unorderedList}</ul>`
}
kupovinaLista(kupovina);


// ZADATAK 2 Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

let timovi = [`zvezda`, `partizan`, `lejkers`, `detroit`];
let kosarkaskiTimovi = niz => {
    let sadrzajTabele = ``;
    for(let i = 0; i < niz.length; i++) {
        sadrzajTabele += `<tr><td style="border: 1px solid black";>${niz[i]}</td></tr>`;
    }
    console.log(sadrzajTabele);
    document.getElementById(`kosarka`).innerHTML += `<table style="border: 1px solid black";>${sadrzajTabele}</table>`;
}
kosarkaskiTimovi(timovi);

/* ZADATAK 3 Dat je niz stringova čiji su članovi putanje do slika. 
Prikazati sve slike u html dokumentu, pri čemu su putanje da slika one putanje koje su navedene u nizu.
*/

let nizSlika = [`https://www.slikomania.rs/fotky6509/fotos/CFAZH6215E1.jpg`, `https://static.nationalgeographic.rs/Picture/6985/jpeg/Vincent_van_Gogh___National_Gallery_of_Art_681308748`, `https://www.slikomania.rs/fotky6509/fotos/XOBCHFL005-1.jpg`, `https://www.slikomania.rs/fotky6509/fotos/CWFTR026.jpg`, `https://www.slikomania.hr/fotky6354/fotos/umjetnicke-slike_YOBFB457E1.jpg`];

let nizSlikaFunkcija = niz => {
    for(let i = 0; i < niz.length; i++) {
        document.body.innerHTML += `<img src="${niz[i]}">`;
    }
}
nizSlikaFunkcija(nizSlika);
