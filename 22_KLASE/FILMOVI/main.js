import Film from "./film.js";

let film1 = new Film(`Cuvari formule`, `Dragan Bjelogrlic`, 2023, [6, 7, 8, 9, 10]);
let film2 = new Film(`Klopka`,`Srdan Golubovic`, 2007, [10, 7]);
let film3 = new Film(`Maratonci trce pocasni krug`, `Slobodan Sijan`, 1982, [7, 10, 9, 8, 7, 10, 10, 10, 10]);
let filmovi = [film1, film2, film3];

// film1.stampaj();
// film2.stampaj();
// filmovi[2].stampaj();

// console.log(`Ispis for petljom`);

// for(let i = 0; i < filmovi.length; i++) {
//     filmovi[i].stampaj();
// }

// console.log(`Ispis forEach petljom`);

// filmovi.forEach(f => {
//     f.stampaj();
// })

console.log(filmovi[0]);
console.log(filmovi[1]);
console.log(filmovi[2]);

console.log(`Prosecna ocena filma ${filmovi[0].naslov} je ${filmovi[0].prosecna()}`);
console.log(`Prosecna ocena filma ${filmovi[1].naslov} je ${filmovi[1].prosecna()}`);
console.log(`Prosecna ocena filma ${filmovi[2].naslov} je ${filmovi[2].prosecna()}`);

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku
// 1801-1900 - 19. vek
// 1901-2000 - 20. vek
// 2001-... - 21. vek
let vekFilmova = (filmovi, vek) => {
    filmovi.forEach(f => {
        // 1801/100 = 18.01 = Math.ceil => 19
        // 1850/100 = 18.5 = Math.ceil => 19
        // 1900/100 = 19 = Math.ceil => 19
        let vekFilma = Math.ceil(f.godinaIzdanja / 100);
        if(vekFilma == vek) {
            f.stampaj();
        }
    });
}

vekFilmova(filmovi, 20)
vekFilmova(filmovi, 21)

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.

let prosecnaOcena = niz => {
    let suma = 0;
    let br = 0;
    niz.forEach(f => {
        f.ocene.forEach(o => {
            suma += o;
            // br++; prvi nacin
        });
        br += f.ocene.length; // drugi nacin
    });
    return suma / br;
}

console.log(`Prosecna ocena svih filmova je ${prosecnaOcena(filmovi)}`);

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz filmova, a ona vraća ocenu koju su filmovi najčešće dobijali (u opticaju su ocene 5, 6, 7, 8, 9 i 10). 

let najcescaOcena = niz => {
    let pet = 0;
    let sest = 0;
    let sedam = 0;
    let osam = 0;
    let devet = 0;
    let deset = 0;
    niz.forEach(n => {
        n.ocene.forEach(o => {
            if(o == 5) {
                pet++;
            }
            else if(o == 6) {
                sest++;
            }
            else if(o == 7) {
                sedam++;
            }
            else if(o == 8) {
                osam++;
            }
            else if(o == 9) {
                devet++
            }
            else {
                deset++;
            }
        });
    });
    let ocene = [pet, sest, sedam, osam, devet, deset];
    let max = ocene[0];
    ocene.forEach(o => {
        if(o > max) {
            max = o;
        }
    });
    let brojac = 5;
    for(let i = 0; i < ocene.length; i++) {
        if(ocene[i] == max) {
            return brojac;
        }
        else {
            brojac++;
        }
    }
    return brojac;
}
console.log(najcescaOcena(filmovi));
/* NACIN SA CASA SA CASE
let najcescaOcena = niz => {
    let br5 = 0;
    let br6 = 0;
    let br7 = 0;
    let br8 = 0;
    let br9 = 0;
    let br10 = 0;
    niz.forEach(el => {
        el.ocene.forEach(o => {
        switch(o) {
            case 5:
                br5++;
                break;
            case 6:
                br6++;
                break;
            case 7:
                br7++;
                break;
            case 8:
                br8++;
                break;
            case 9:
                br9++;
                break;
            case 10:
                br10++;
                break;
        }
        });
    });
    let nizOcena = [br5, br6, br7, br8, br9, br10];
    let maxElement = nizOcena[0];
    let maxIndex = 0;
    for(let i = 0; i < nizOcena.length; i++) {
        if(maxElement <= nizOcena[i]) {
            maxElement = nizOcena[i];
            maxIndex = i;
        }
    }
    console.log(nizOcena);
    return maxIndex + 5;
}
console.log(filmovi);
console.log(`Ocena koja se najvise puta ponavljala je: ${najcescaOcena(filmovi)}`);
*/
/*
let najcescaOcena = nizFilmova => {
    let superNizOcene = [];
    nizFilmova.forEach(film => {
       film.ocene.forEach(ocena => {
           superNizOcene.push(ocena);
       });
    });

    let najOcena = null;
    let najOcenaBr = 0;
    superNizOcene.forEach(ocena => {
        let br = 0;
        superNizOcene.forEach(o => {
            if (ocena == o) {
                br++;
            }
        });
        if (br > najOcenaBr) {
            najOcenaBr = br;
            najOcena = ocena;
        }
    });

    return najOcena;
}

console.log(`Najčešća ocena je: ${najcescaOcena(filmovi)}`);
*/
/*
let najcescaOcena = niz =>{
    let el1;
    let brojac = 1;
    let max = 0;
    let velikiNiz = [];
    niz.forEach(el =>{
        el.ocene.forEach(ocena => {
            velikiNiz.push(ocena);
        });
    });
    velikiNiz.sort(function(a, b){return a - b});
    for (let i = 1; i < velikiNiz.length; i++) {
        if (velikiNiz[i] == velikiNiz[i - 1]) {
            brojac++;
        } else {
            brojac = 1;
        }
        if (brojac > max) {
            max = brojac;
            el1 = velikiNiz[i];
        }
    }
    return el1;
}
*/


// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.
function iznadOcene(ocena, niz) {
    let nizFilmova = [];
    niz.forEach(n => {
        if(n.prosecna() > ocena) {
            nizFilmova.push(n);
        }
    });
    return nizFilmova;
}

console.log(iznadOcene(5, filmovi));

// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu.
function iznadOceneNoviji(ocena, niz) {
    let najnoviji = niz[0].godinaIzdanja;
    let index = 0;
    niz.forEach((n, i) => {
        if(n.prosecna() >= ocena) {
            console.log(`test`);
            if(n.godinaIzdanja > najnoviji) {
                najnoviji = n.godinaIzdanja;
                index = i;
                console.log(index);
            }
        }
    });
    console.log(index);
    niz[index].stampaj()
}

iznadOceneNoviji(5, filmovi);

/* NACINI SA CASA
// 1. nacin
let iznadOceneNoviji = (niz, nekaOcena) => {
    let iznadOCeneNiz = iznadOcene(niz, nekaOcena);
    let mladjiFilm = iznadOCeneNiz[0];
    niz.forEach(f => {
        if (f.godinaIzdanja > mladjiFilm.godinaIzdanja) {
            mladjiFilm = f;
        }
    });
    return mladjiFilm;
}
let ocenaZaProsledjivanje = 8;
console.log(iznadOceneNoviji(filmovi, ocenaZaProsledjivanje));

// 2. nacin
let iznadOceneNoviji = (niz, nekaOcena) => {
    let iznadOceneFilmovi = [];
    let mladjiFilm = niz[0];
    niz.forEach(f => {
        if (f.prosecna() > nekaOcena) {
            iznadOceneFilmovi.push(f);
        }
    });
    iznadOceneFilmovi.forEach(el => {
        if (el.godinaIzdanja > mladjiFilm.godinaIzdanja) {
            mladjiFilm = el;
        }
    });
    return mladjiFilm;
}
console.log(iznadOceneNoviji(filmovi, 8));
*/

// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film (film koji ima najveću prosečnu ocenu i to treba da vrai objekat).

let najboljeOcenjeni = niz => {
    let najboljeOcenjeni = niz[0]; // objekat film
    let najboljaOcena = najboljeOcenjeni.prosecna(); // ovo je vrednost prosecne ocene
    niz.forEach(film => {
        if(film.prosecna() > najboljaOcena) {
            najboljaOcena = film.prosecna();
            najboljeOcenjeni = film;
        }
    });
    return najboljeOcenjeni;
} 
console.log(najboljeOcenjeni(filmovi));

// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
let najmanjaOcenaNajboljeg = niz => {
    let najboljiFilm = najboljeOcenjeni(niz);
    let najmanjaOcena = najboljiFilm.ocene[0]; // pretpostavka za najmanju ocenu
    najboljiFilm.ocene.forEach(o => {
        if(o < najmanjaOcena) {
            najmanjaOcena = o;
        }
    });
    return najmanjaOcena;
}
console.log(`Najmanja ocena najbolje ocenjenog filma (${najboljeOcenjeni(filmovi).naslov}) je ${najmanjaOcenaNajboljeg(filmovi)}`);

// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
console.log(`Zadatak 2 sa slajda 23`);
function osrednjiFilm(niz) {
    let osrednji = niz[0];
    let razlika = Math.abs(prosecnaOcena(niz) - osrednji.prosecna())
    niz.forEach((n, i) => {
        if(Math.abs(prosecnaOcena(niz) - n.prosecna()) < razlika) {
            razlika = Math.abs(prosecnaOcena(niz) - n.prosecna());
            osrednji = niz[i];
        }
    })
    return osrednji;
}

console.log(osrednjiFilm(filmovi));
console.log(osrednjiFilm(filmovi).prosecna());

// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.
console.log(`Zadatak 4 sa slajda 23`);
function najmanjaOcena(niz) {
    let pomocniNiz = [];
    niz.forEach(n => {
        n.ocene.forEach(o => {
            pomocniNiz.push(o);
        });
    });
    let najmanja = pomocniNiz[0];
    pomocniNiz.forEach(o => {
        if(o < najmanja) {
            najmanja = o;
        }
    });
    return najmanja;
}
console.log(`Najmanja ocena koju je neki film dobio je ${najmanjaOcena(filmovi)}`);

// 2. način - ne zahteva dodatnu memoriju
// let najmanjaOcena2 = (niz) => {
//     let minOcena = niz[0].ocene[0];
//     niz.forEach((e) => {
//       e.ocene.forEach((o) => {
//         if (o < minOcena) {
//           minOcena = o;
//         }
//       });
//     });
//     console.log(minOcena);
//   };
//   najmanjaOcena2(filmovi);