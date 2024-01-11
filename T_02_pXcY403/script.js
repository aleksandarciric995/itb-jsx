/*
Zadatak 1 
*/
console.log(`ZADATAK 1`);
let funkcijaBMI = (tezina, visina) => {
    let BMI = tezina / ((visina/100)**2);
    if(BMI <= 18.5) {
        console.log(`Pothranjenost.`);
    }
    else if(BMI < 24.9) {
        console.log(`Normalna tezina.`);
    }
    else if(BMI <= 30) {
        console.log(`Povisena tezina.`);
    }
    else {
        console.log(`Gojaznost.`);
    }
}
funkcijaBMI(100, 182);

/*
Zadatak 2
*/
console.log(`ZADATAK 2`);
let funkcijaZeljenaTezina = (t1, t2) => {
    if(t1 < t2) {
        let brojNedelja = 0;
        while(t1 < t2) {
            brojNedelja++;
            t1 = t1 + t1*0.01;
        }
        return brojNedelja;
    }
    else if(t1 > t2) {
        let brojNedelja = 0;
        while(t1 > t2) {
            brojNedelja++;
            t1 = t1 - t1*0.02;
        }
        return brojNedelja;
    }
}

console.log(`Potreban broj nedelja je ${funkcijaZeljenaTezina(70, 63)}`);

/*
Zadatak 3
*/
console.log(`ZADATAK 3`);
let nizTezina = [120, 118, 115, 116, 110, 112, 110, 113];
let maxNiza = niz => {
    let max = niz[0];
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] > max) {
            max = niz[i];
        }
    }
    return max;
}
let minNiza = niz => {
    let min = niz[0];
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] < min) {
            min = niz[i];
        }
    }
    return min;
}

let funkcijaProsecnaTezinaOsobe = niz => {
    let suma = 0;
    let brojac = 0;
    for(let i = 0; i < niz.length; i++) {
        suma += niz[i];
        brojac++;
    } 
    return (suma - maxNiza(niz) - minNiza(niz)) / (brojac - 2);
}
console.log(`Prosecna tezina osobe je ${funkcijaProsecnaTezinaOsobe(nizTezina)}`);

/*
Zadatak 4
*/
console.log(`ZADATAK 4`);
let nizTezinaKlijenata = [120, 110, 87, 54, 69, 74, 99];

let s1 = niz => {
    let suma = 0;
    let  brojac = 0;
    for(let i = 0; i < niz.length; i++) {
        suma += niz[i]; 
        brojac++;
    }
    return suma / brojac;
}

let s2 = niz => {
    let suma = 0;
    let  brojac = 0;
    for(let i = 0; i < niz.length; i+=2) {
        suma += niz[i]; 
        brojac++;
    }
    return suma / brojac;
}

let funkcijaTrueIliFalse = niz => {
    if((s2(niz) > 1.1 * s1(niz)) || (s2(niz) < 0.9 * s1(niz))) {
        return false;
    }
    else {
        return true;
    }
}

console.log(`Svi klijenti su priblizno jedanlo napredovali: ${funkcijaTrueIliFalse(nizTezinaKlijenata)}.`);

/*
Zadatak 5 - ne vredi gledati. Zadatak ne radi 
*/
console.log(`ZADATAK 5`);
nizTezinaKlijenata = [120, 110, 87, 54, 69, 74, 99];
let testNiz = [50, 50, 50];
let pomocnaFunkcijaZadatak5 = niz => {
    let brojac = 0;
    for(let i = 0; i < niz.length; i++) {
    if(funkcijaZeljenaTezina(niz[i], s1(niz)) <= 1) {
        brojac++; 
        console.log(brojac);
    }
}
return brojac;
}
console.log(pomocnaFunkcijaZadatak5(testNiz));

let funkcijaZadatak5 = niz => {
    let brojac = 0;
    for(let i = 0; i < niz.length; i++) {
        if(funkcijaZeljenaTezina(niz[i], s1(niz)) == 1) {
            brojac++;
            console.log(`test`);
        }
    }
    return brojac;
}
console.log(s1(nizTezinaKlijenata));
console.log(`broj osoba je ${funkcijaZadatak5[nizTezinaKlijenata]}`);

console.log(funkcijaZeljenaTezina(87, s1(nizTezinaKlijenata)));

