// TEST PRIMERI
let a = [6, 8, 9, 3, 1];
let b = [];
b = [9, 5, 6, 9, 8, 9, 9]

// Zadatak 2 iz nizova
let sumaElem = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma += el;
    });
    return suma;
}

console.log(sumaElem(a));

// Zadatak 5 iz nizova

let maxVr = niz => {
    let max = niz[0];
    niz.forEach(el => {
        if(el > max) {
            max = el;
        }
    });
    return max;
}
console.log(maxVr(a));

// Zadatak 3 iz nizova
let proizvodElem = niz => {
    let proizvod = 1;
    niz.forEach(el => {
        proizvod *= el;
    });
    return proizvod;
}
console.log(proizvodElem(a));

// Zadatak 4 iz nizova -* Odrediti sr vrednost elem

let srVr = niz => {
    let suma = 0;
    let brojac = 0;
    niz.forEach(el => {
        suma += el;
        brojac++;
    });
    return suma/brojac;
}
console.log(srVr(a));

// Zadatak 6 iz nizova - min vrednost
let minVrednost = niz => {
    let min = niz[0];
    niz.forEach(el => {
        if(el < min) {
            min = el;
        }
    });
    return min;
}

console.log(minVrednost(a));

function test(niz, cb) {
    let min = niz[0];
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] < min) {
            min = niz[i];
        }
    }
    cb(`min vrednost je ${min}`);
}

function ispisKonzola (niz) {
    console.log(niz);
}

test(a, ispisKonzola);

// 7 Odrediti indeks maksimalnog elementa celobrojnog niza. ODRADI GA PREKO JEDNE PROMENLJIVE!!
let indexMaxElem = niz => {
    let index = 0;
    let max = niz[0];
    niz.forEach((el, i) => {
        if(el > max) {
            max = el;
            index = i;
        }
    });
    return index;
}
console.log(indexMaxElem(a));

// 7`: Vratiti sve idnekse pojavljivanja maksimalne vrednost
let sviIndexiMaxVr = niz => {
    let max = maxVr(niz);
    let sviIndexi = [];
    niz.forEach((elem, i) => {
        if(elem == max) {
            max = elem;
            sviIndexi.push(i);
        }
    });
    return sviIndexi;
}
// b = [9, 5, 6, 9, 8, 9, 9]

let c = [3, 5, 2, 1, 6, 2, 6];
console.log(sviIndexiMaxVr(b));
console.log(sviIndexiMaxVr(c));
console.log(sviIndexiMaxVr(c)[0]); // index prvog pojavljivanja
console.log(sviIndexiMaxVr(c)[sviIndexiMaxVr(c).length - 1]); // index poslednjeg pojavljivanja



// 8 Odrediti indeks minimalnog elementa celobrojnog niza.
let indexMinElem = niz => {
    let index = 0;
    let min = niz[0];
    niz.forEach((el, i) => {
        if(el < min) {
            min = el;
            index = i;
        }
    });
    return index;
}
console.log(indexMinElem(a));

// 9 Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
let brElemVeciOdSrVr = niz => {
    let brojac = 0;
    niz.forEach(el => {
        if(el > srVr(niz))
        brojac++;
    });
    return brojac;
}
console.log(brElemVeciOdSrVr(a));

// let a = [6, 8, 9, 3, 1];

// 10 Izračunati zbir pozitivnih elemenata celobrojnog niza.
let zbirPozElem = niz => {
    let suma = 0;
    niz.forEach(el => {
        if(el > 0) {
            suma += el;
        }
    });
    return suma;
}
console.log(`Suma poz elem je ${zbirPozElem(a)}`);

//  11 Odrediti broj parnih elemenata u celobrojnom nizu.
let brParElem = niz => {
    let brojac = 0;
    niz.forEach(el => {
        if(el % 2 == 0) {
            brojac++;
        }
    });
    return brojac;
}
console.log(`broj parnih elem je ${brParElem(a)}`);

b = [9, 5, 6, 9, 8, 9, 9]; // index max elementa ce biti 0 posto je u uslovu strogo vece (da je >= vratio bi poslednji)

console.log(indexMaxElem(b));

let imena = [`Stefan`, ` Vladislav`, `Nikola`, `Milan`, `Nevena`, `Maja`];

// 19 Ispisati dužinu svakog elementa u nizu stringova. 
console.log(`ZADATAK 19`);
let duzinaSvihStringova = niz => {
    niz.forEach(el => {
        console.log(el.length);
    });
}
duzinaSvihStringova(imena);

// 20 Odrediti element u nizu stringova sa najvećom dužinom.
console.log(`ZADATAK 20`);
// NETACAN NACIN 

let stringMaxDuzina = niz => {
    let maxVr = niz[0];
    let duzina = niz[0].length;
    niz.forEach(el => {
        if(el.length > duzina) {
            maxVr = el;
            return maxVr;
        }
    });
}

console.log(stringMaxDuzina(imena)); // ovako napisana vraca undefined
// maxVr = `Stefan`, duzina = 6;
// callback(`Stefan)
// callback(`Vladislav)
// ............
// callback(`Maja`)
console.log(`ZADATAK 20 ispravan ancin`);
let stringMaxDuzina1 = niz => {
    let maxVr = niz[0];
    let duzina = niz[0].length;
    niz.forEach(el => {
        if(el.length > duzina) {
            maxVr = el;
            duzina.el = el.length;
        }
    });
    return maxVr;
}

console.log(stringMaxDuzina1(imena)); 

// ZADATAK 24
console.log(`ZADATAK 24`);

let zad24 = (a, b) => {
    let c = [];
    a.forEach((el, i) => {
        c.push(a[i], b[i]); // a moze i c.push(el, b[i]);
    });
    return c;
}
let n1 = [1, 2, 3, 4];
let n2 = [5, 6, 7, 8];
console.log(zad24(n1, n2));

// ZADATAK 25
console.log(`ZADATAK 25`);
let zad25For = (a, b) => {
    let n = a.length; // posto su iste duzine, moglo je i n = b.length;
    let c = [];
    for(let i = 0; i < n; i++) {
        c[i] = a[i] * b[i]; // c.push(a[i] * b[i]);
    }
    return c;
}
console.log(zad25For(n1, n2));

let zad25ForEach = (a, b) => {
    let c = [];
    a.forEach((el, i) => {
        c.push(el * b[i]);
    });    
    return c;
}
console.log(zad25ForEach(n1, n2));


// ZADATAK 26 
console.log(`ZADATAK 26`);
// a = [a[0], a[1],....., a[2n - 1]] // niz ima 2n elemenata
// n = 3 => a ima 6 elemenata
// 2n znaci PARAN broj elemenata
// b =b[[0], b[1],...., b[n-1]];

let zad26For = a => {
    let k = a.length;
    let n = k / 2;
    let b = [];
    for(let i = 0; i < n; i++) {
        b[i] = (a[i] + a[2 * n - 1 - i]) / 2;
    }
    return b;
}
n1 = [1, 2, 3, 4];
console.log(`n1 je ${n1}`);
console.log(zad26For(n1));

let n3 = [5, 8, 0, 1, 4, 2, 4, 3];
console.log(zad26For(n3));

// ZAD 26 sa forEach

let zad26ForEach = a => {
    let b = [];
    let k = a.length; 
    let n = k / 2;
    a.forEach((el, i) => {
        if(i < n) {
            b[i] = (a[i] + a[2 * n - 1 - i]) / 2;
        }
    });
    return b;
}
let n4 = [1, 2];
console.log(zad26ForEach(n1));
console.log(zad26ForEach(n3));
console.log(zad26ForEach(n4));