/*
let dan1 = {
    datum: `2023/12/20`,
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [3, 6, 7, 9, 8, 7, 2]
};
let dan2 = {
    datum: `2023/12/21`,
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [4, 5, 7, 10, 8, 7, 1]
};
let dan3 = {
    datum: `2023/12/22`,
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [-1, 2, 3, 5, 4, 3, 0]
};
let dan4 = {
    datum: `2023/12/23`,
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [1, 3, 4, 5, 8, 4, 2]
};
let dan5 = {
    datum: `2023/12/24`,
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [5, 7, 9, 10, 9, 7, 6]
};
*/
let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [-3, -4, -6, -7, -6, -4, -10, 0]
};
let dan2 = {
    datum: "2023/12/24",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperature: [3, 4, 6, 7, 9, 8, 5, 3]
};
let dan3 = {
    datum: "2023/12/25",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [3, 4, 6, 6, 7, 5, 4, 3]
};

let dani = [dan1, dan2, dan3];
/*
let max = 0;
zadatak2 = dani.forEach(dan => {
    let brojac = 0;
    dan.temperature.forEach(t => {
        brojac++;
    });
    if(brojac > max) {
        max = brojac;
    }
    // return max;
});
console.log(max);
*/
// 2. ZADATAK
/*
Napraviti arrow funksiju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
a) Ispisati prvi od njih
b) Ispisati poslednji od njih
*/
console.log(`2. ZADATAK`);
let maxBrMerenja = dani[0].temperature.length; // a moze i sam oda pretpostavimo da je jednako nuli
let indeksPrvog = 0;
let indeksPoslednjeg = 0;
dani.forEach((d, indeks) => {
    if(maxBrMerenja < d.temperature.length) {
        d.temperature.length = maxBrMerenja;
        indeksPrvog == indeks;
    }

    if(maxBrMerenja <= d.temperature.length) {
        maxBrMerenja = d.temperature.length;
        indeksPoslednjeg = indeks;
    }
});
// a) Ispisuje svaki takav datum
dani.forEach(d => {
    if(d.temperature.length == maxBrMerenja) {
        console.log(d.datum);
    }
});

// b) ispisuje prvi od njih
// 1. nacin
console.log(dani[indeksPrvog].datum);

// 2. nacin
for(let i = 0; i < dani.length; i++) {
    if(maxBrMerenja == dani[i].temperature.length) {
        console.log(dani[i].datum);
        break;
    }
}

// c) ispisuje poslednji od njih
// 1. nacin
console.log(dani[indeksPoslednjeg].datum);

// 2. nacin
for(let i = dani.length-1; i >= 0; i--) {
    if(maxBrMerenja == dani[i].temperature.length) {
        console.log(dani[i].datum);
        break;
    }
}

// 3. ZADATAK
//Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana
console.log(`3. ZADATAK`);

// let brKisnihDana = 0;
// let brSuncanihDana = 0;
// let brOblacnihDana = 0;
// dani.forEach(d => {
//     if(d.kisa == true) {
//         brKisnihDana++;
//     }
//     if(d.oblacno == true) {
//         brOblacnihDana++;
//     }
//     if(d.sunce) {
//         brSuncanihDana++;
//     }
// });
let zadatak3 = niz => {
    let brKisnihDana = 0;
    let brSuncanihDana = 0;
    let brOblacnihDana = 0;
    niz.forEach(d => {
        if(d.kisa == true) { // moze i samo if(d.kisa) - to je kao da sam napisao d.kisa == true;
            brKisnihDana++;
        }
        if(d.oblacno == true) {
            brOblacnihDana++;
        }
        if(d.sunce) {
            brSuncanihDana++;
        }
    });
    console.log(`Broj kisnih dana: ${brKisnihDana}`);
    console.log(`Broj suncanih dana: ${brSuncanihDana}`);
    console.log(`Bro oblacnih dana: ${brOblacnihDana}`);
}
zadatak3(dani);

// 4. ZADATAK
// Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom
console.log(`4. ZADATAK`);

let ukupnaTemp = 0;
let brojac = 0;
dani.forEach(d => {
    d.temperature.forEach(t => {
        ukupnaTemp += t;
        brojac++;
    });
});
console.log(ukupnaTemp);
let prosecnaTemp = ukupnaTemp / brojac;
console.log(prosecnaTemp);

let prosecnaTempJednogDana = dan => {
    let ukupnaTemp = 0;
    dan.temperature.forEach(t => {
        ukupnaTemp += t;
    });
    return ukupnaTemp / dan.temperature.length;
};
console.log(prosecnaTempJednogDana(dani[0]));

let brojac2 = 0;
let brojDanaNatprosecneTemp = niz => {
    niz.forEach(d => {
        if(prosecnaTempJednogDana(d) > prosecnaTemp) {
            console.log(d.datum);
            brojac2++;
        }
    })
    console.log(brojac2);
};
brojDanaNatprosecneTemp(dani);

/*
// zadatak 4
let brNatprosecnihDana = niz => {
    let zbirTemp = 0;
    let brTemp = 0;
    let brDana = 0;
    niz.forEach(dan => {
        dan.temperature.forEach(t => {
            zbirTemp += t;
            brTemp++;
        });
    });
    let prosekUkupno = zbirTemp / brTemp;
    console.log(prosekUkupno);
    niz.forEach(dan => {
        let zbirLok = 0;
        let brLok = 0;
        dan.temperature.forEach(t => {
            zbirLok+= t;
            brLok++;
        });
        let prosLok = zbirLok / brLok;
        console.log(prosLok);
        if(prosLok > prosekUkupno) {
            brDana++;
        }
    });
    return brDana;
}
console.log(`Broj dana sa natprosecnom temperaturom: ${brNatprosecnihDana(dani)}`);
*/