let niz = [1, 2, 3, 4, 5];
let niz2 = [1, 2, 3, 4, 5, 6];
// 1
for(let i = 0; i < niz.length; i++) {
    console.log(niz[i]);
}
// 2
let zbir = 0;
for(let i = 0; i < niz.length; i++) {
    zbir += niz[i];
}
console.log(zbir);

function funkcijaZbir (niz) {
    let zbir = 0;
    for(let i = 0; i < niz.length; i++) {
        zbir += niz[i];
    }
    return zbir
}
console.log(funkcijaZbir(niz));
console.log(funkcijaZbir(niz2));

// 3
function funkcijaProizvod(niz) {
    let proizvod = 1;
    for(let i = 0; i < niz.length; i++) {
        proizvod *= niz[i];
    }
    return proizvod;
}
console.log(funkcijaProizvod(niz));

// 4 srvr
function funkcijaSrVr(niz) {
    return funkcijaZbir(niz) / niz.length;
}
console.log(funkcijaSrVr(niz));

// 5 
function funkcijaMaxVrednost(niz) {
    let max = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if(niz[i] > max) {
            max = niz[i];
        }        
    }
    return max;
}

console.log(funkcijaMaxVrednost(niz));

// 6 
function funkcijaMinVrednost(niz) {
    let min = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if(niz[i] < min) {
            min = niz[i];
        }        
    }
    return min;
}
console.log(funkcijaMinVrednost(niz));

// 7 
function funkcijaIndexMax(niz) {
    let index = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] == funkcijaMaxVrednost(niz)) {
            index = i;
        }
    }
    return index;
}
console.log(funkcijaIndexMax(niz));

// 8
function funkcijaIndexMin(niz) {
    let index = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] == funkcijaMinVrednost(niz)) {
            index = i;
        }
    }
    return index;
}
console.log(funkcijaIndexMin(niz));

// 9 
function brojElemVeciOdSrVr(niz) {
    let brojac = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] > funkcijaSrVr(niz)) {
            brojac++;
        }
    }
    return brojac;
}

console.log(brojElemVeciOdSrVr(niz));

function zbirPozElem(niz) {
    let zbir = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] > 0) {
            zbir += niz[i];
        }
    }
    return zbir;
}
console.log(zbirPozElem(niz));

let brojParElem = niz => {
    let brojac = 0;
    niz.forEach(i => {
        if(i % 2 == 0) {
            brojac ++;
        }
    });
    return brojac;
}
console.log(brojParElem(niz));

// test
// console.log(`Ispod je primer za arrow`);
// let suma2 = (a, b) => {
//     console.log(this);
//     return a + b;
// }
// console.log(suma2(3, 4));

// 12
function brojParElemSaNeparIndex(niz) {
    let brojac = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] % 2 == 0 && i % 2 != 0) {
            brojac++;
        }
    }
    return brojac;
}
console.log(brojParElemSaNeparIndex(niz));

// 13 
function sumaElemNizaSaParIndex(params) {
    let suma = 0;
    for(let i = 1; i < params.length; i++) {
        if(i % 2 == 0) {
            suma += niz[i];
        }
    }
    return suma;
}
console.log(sumaElemNizaSaParIndex(niz));

// 14
function menjaZNak(niz) {
    for(let i = 0; i < niz.length; i++) {
        niz[i] = niz[i] * (-1);
    }
}
menjaZNak(niz);
console.log(niz);
menjaZNak(niz);
console.log(niz);

let stavke = [`hleb`, `mleko`, `kafa`];

let ulList = (niz) => {
    let lista = `<ul>`;
    let pomocna = ``;
    niz.forEach(n => {
        pomocna += `<li>${n}</li>`;
    });
    lista += pomocna + `</ul>`;
    return lista;
}
document.body.innerHTML += ulList(stavke);

let kosarka = [`zvezda`, `partizan`, `aca`, `kolumbijajajaj`];

let tabela = (niz) => {
    let tabela = `<table>`;
    let pomocna = ``;
    niz.forEach(n => {
        pomocna += `<tr><td>${n}</td></tr>`;
    });
    tabela += pomocna + `</table>`;
    return tabela;
}
document.body.innerHTML += tabela(kosarka);

// 19 
let ispisDuzinaNiza = niz => {
    niz.forEach(n => {
        console.log(n.length);
    })
}
ispisDuzinaNiza(kosarka);
//20
let indexElemNajduzi = (niz) => {
    let max = niz[0].length;
    let index;
    niz.forEach((n, i) => {
        if(n.length > max) {
            index = i;
        }
    });
    return index;
}
console.log(indexElemNajduzi(kosarka));

// 21 
let prosekDuzineElemNiza = niz => {
    let zbir = 0;
    let brojac = 0;
    niz.forEach(n => {
        zbir += n.length;
    })
    // return zbir / niz.length;
    let prosek = zbir / niz.length;
    niz.forEach(n => {
        if(n.length > prosek) {
            brojac++;
            console.log(n);
        }
    })
    console.log(prosek);
    return brojac;
}
console.log(prosekDuzineElemNiza(stavke));
console.log(prosekDuzineElemNiza(kosarka));
kosarka = [`zvezda`, `partizan`, `Aca`, `trt`, `Ana`];
// 22
let sadrzia = niz => {
    let brojac = 0;
    for(let i = 0; i < niz.length; i++) {
        for(let j = 0; j < niz[i].length; j++) {
            if(niz[i][j] == `a`) {
                brojac++;
                break;
            }
        }
    }
    return brojac;
}
console.log(sadrzia(kosarka));

let pocinjeA = niz => {
    let brojac = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i][0] == `A` || niz[i][0] == `a`) {
            brojac++;
        }
    }
    return brojac;
}
console.log(pocinjeA(kosarka));

if(kosarka[2].startsWith(`A`)) {
    console.log(kosarka[2]);
}

// 24
let a = [1, 3, 5, 7, 9];
let b = [2, 4, 6, 8, 10];
let c = [];
for(let i = 0; i < a.length; i++) {
    c.push(a[i], b[i]);
}
console.log(c);

// 25

let d = [];
for(let i = 0; i < a.length; i++) {
    // d.push(a[i] * b[i]);
    d[i] = a[i] * b[i];
}
console.log(d);

// 26

let e = [];
for(let i = 0; i < a.length; i++) {
    // e[i] = (a[i] + a[(2 * a.length) -1 - i]/2)
    e[i] = (a[i] + (2 * a.length - 1 - i)) / 2;
    // e[i] = (a[i] / 2 + a[(2 * a.length - 1 - i)] / 2);
}
console.log(e);
