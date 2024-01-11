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

// Zadatak 4

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

/*
Zadatak 5 - ne vredi gledati. Zadatak ne radi 
*/
console.log(`ZADATAK 5`);
nizTezinaKlijenata = [120, 110, 87, 54, 69, 74, 99];


let funkcijaZadatak5 = niz => {
    let brojac = 0;
    for(let i = 0; i < niz.length; i++) {
        if(funkcijaZeljenaTezina(niz[i], s1(niz)) <= 1) {
            brojac++;
        }
    }
    return brojac;
}
console.log(s1(nizTezinaKlijenata));
console.log(`broj osoba je ${funkcijaZadatak5[nizTezinaKlijenata]}`);



