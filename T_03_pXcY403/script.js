// ZADATAK 1

let automobil1 = {
    marka: `Opel`,
    km: 54326,
    godište: 2021,
    vlasnici: [`Pera`, `Mika`, `Laza`, `Zika`, `Emil`],
};
let automobil2 = {
    marka: `Opel`,
    km: 4326,
    godište: 2021,
    vlasnici: [`Aca`, `Braca`, `Ana`, `Seka`],
};
let automobil3 = {
    marka: `BMW`,
    km: 563241,
    godište: 2005,
    vlasnici: [`Darko`, `Nikola`, `Dusan`],
};
let automobil4 = {
    marka: `Opel`,
    km: 54326,
    godište: 2008,
    vlasnici: [`Emil`, `Dejan`],
};

let nizAutomobila = [automobil1, automobil2, automobil3, automobil4];

// ZADATAK 2

function prosecnoGodiste(niz) {
    let suma = 0;
    niz.forEach(a => {
        suma += a.godište
    });
    return Math.floor(suma / niz.length);
}
console.log(`Zadatak 2`);
console.log(`Prosecno godiste automobila je ${prosecnoGodiste(nizAutomobila)}`);

// ZADATAK 3
console.log(`Zadatak 3`);

function markaNajmanjeKm(niz, marka) {
    let brojac = 0;
    let index = 0;
    let minKm = 9999999999999999;
    let nullti = 1;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].marka == marka) {
            if(niz[i].km < minKm) {
                minKm = niz[i].km;
            }
            console.log(minKm);

    for(let i = 0; i < niz.length; i++) {
        if(niz[i].km == minKm) {
            brojac++;
            index = i;
        }
    }
    if(brojac == 1) {
        return niz[index];
    }
    else if(brojac > 1) {
        let indexDrugi = 0;
        let najmladji = niz[0].godište;
        let brojacNajmladjih = 0;
        for(let i = 1; i < niz.length; i++) {
            if(niz[i].godište > najmladji) {
                najmladji = niz[i].godište;
            }
        }
        for(let i = 0; i < niz.length; i++) {
            if(niz[i].godište == najmladji) {
                brojacNajmladjih++;
                indexDrugi = i;
            }
        }
        if(brojacNajmladjih == 1) {
            return niz[indexDrugi];
        }
        if(brojacNajmladjih > 1) {
            return niz[indexDrugi];
        }
    }
        }
        else {
            nullti = null;
        }
    }
    if (nullti == null) {
        return null;
    }
}

console.log(markaNajmanjeKm(nizAutomobila, `Opel`));

// ZADATAK 4
console.log(`ZADATAK 4`);

function prosekKm10(niz) {
    let datum = new Date();
    let godina = datum.getFullYear();
    let ukupno = 0;
    let brojac = 0;
    niz.forEach(a => {
        if(godina - a.godište < 10) {
            ukupno += a.km;
            brojac++;
        }
    });
    if(brojac == 0) {
        return `Vozimo mnogo matore automobile.`;
    }
    else {
    return ukupno / brojac;
    }
}

console.log(prosekKm10(nizAutomobila));

// ZADATAK 5

console.log(`ZADATAK 5`);

function rokfeler(niz, ime) {
    let pomocna = false;
    let brojac = 0;
    niz.forEach(a => {
        a.vlasnici.forEach(v => {
            if(v == ime) {
                brojac++;
            }
        });
        if(brojac > 1) {
            pomocna = true;
        }
    });
    return pomocna;
}

console.log(rokfeler(nizAutomobila, `Emil`));

