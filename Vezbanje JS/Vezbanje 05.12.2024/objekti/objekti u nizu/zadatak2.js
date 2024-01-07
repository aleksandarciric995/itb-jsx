// POLAZNICI /////////////////////////////////////
let polaznik1 = {
    ime: `aca`,
    prezime: `ciric`,
    ocena: 100,
};
let polaznik2 = {
    ime: `seka`,
    prezime: `ciric`,
    ocena: 85,
};
let polaznik3 = {
    ime: `ana`,
    prezime: `novicic`,
    ocena: 95,
};
let polaznik4 = {
    ime: `uros`,
    prezime: `ilanic`,
    ocena: 75,
};
let polaznik5 = {
    ime: `mladen`,
    prezime: `jovanov`,
    ocena: 98,
};
let polaznik6 = {
    ime: `zlatan`,
    prezime: `jatic`,
    ocena: 79,
};
// KURSEVI ////////////////////////////////////////
let kurs1 = {
    naziv: `Razvoj veb stranica: JS`,
    grad: `Beograd`,
    polaznici: [polaznik1, polaznik2, polaznik3], //srVr 94.66
    uspesan: function uspesan() {
        for(let i = 0; i < this.polaznici.length; i++) {
            if(this.polaznici[i].ocena < 65) {
                return false;
            }
        }
        return true;
    },
    pokidali: function pokidali() {
        for(let i = 0; i < this.polaznici.length; i++) {
            if(this.polaznici[i].ocena < 80) {
                return false;
            }
        }
        return true;
    },
};
console.log(kurs1.pokidali());
let kurs2 = {
    naziv: `Razvoj veb stranica: PHP`,
    grad: `Nis`,
    polaznici: [polaznik4, polaznik5, polaznik6], //srVr 85.00
    uspesan: function uspesan() {
        for(let i = 0; i < this.polaznici.length; i++) {
            if(this.polaznici[i].ocena < 65) {
                return false;
            }
        }
        return true;
    },
    pokidali: function pokidali() {
        for(let i = 0; i < this.polaznici.length; i++) {
            if(this.polaznici[i].ocena < 80) {
                return false;
            }
        }
        return true;
    },
};
let kurs3 = {
    naziv: `Testiranje softvera: QA`,
    grad: `Novi Sad`,
    polaznici: [polaznik2, polaznik3, polaznik6], //srVr 87.667
    uspesan: function uspesan() {
        for(let i = 0; i < this.polaznici.length; i++) {
            if(this.polaznici[i].ocena < 65) {
                return false;
            }
        }
        return true;
    },
    pokidali: function pokidali() {
        for(let i = 0; i < this.polaznici.length; i++) {
            if(this.polaznici[i].ocena < 80) {
                return false;
            }
        }
        return true;
    },
};
let kurs4 = {
    naziv: `Osnove programiranja: Java`,
    grad: `Kosovska Mitrovica`,
    polaznici: [polaznik1, polaznik2, polaznik3, polaznik4, polaznik5, polaznik6], //srVr 89.83
    uspesan: function uspesan() {
        for(let i = 0; i < this.polaznici.length; i++) {
            if(this.polaznici[i].ocena < 65) {
                return false;
            }
        }
        return true;
    },
    pokidali: function pokidali() {
        for(let i = 0; i < this.polaznici.length; i++) {
            if(this.polaznici[i].ocena < 80) {
                return false;
            }
        }
        return true;
    },
};
let kursevi = [kurs1, kurs2, kurs3, kurs4];
// l) Funkciji se prosleđuje niz kurseva i string koji predstavlja grad, a vraća broj kurseva koji se održavaju u tom gradu.

let zadatakL = (niz, grad) => {
    let brojac = 0;
    niz.forEach(n => {
        if(n.grad == grad) {
            brojac++;
        }
    });
    return brojac;
}
console.log(zadatakL(kursevi, `Beograd`));

// m) Funkciji se prosleđuje niz kurseva i string koji predstavlja naziv, a vraća broj kurseva koji sadrže dati naziv.

let zadatakM = (niz, naziv) => {
    brojac = 0;
    niz.forEach(n => {
        if(n.naziv == naziv) {
            brojac++
        }
    });
    return brojac;
}
console.log(zadatakM(kursevi, `Razvoj veb stranica: JS`));

// n) Funkciji se prosleđuje niz kurseva, a ona ispisuje naziv kursa i grad u kojem se nalazi maksimalan broj polaznika. Ukoliko postoji više takvih kurseva, ispisati bilo koji takav kurs.

let zadatakN = niz => {
    let max = 0;
    niz.forEach(n => {
        if(n.polaznici.length > max) {
            max = n.polaznici.length;
        }
    });
    console.log(max);
    niz.forEach(n => {
        if(n.polaznici.length == max) {
            console.log(n.naziv, n.grad);
        }
    });
}

zadatakN(kursevi);

// o) Funkciji se prosleđuje niz kurseva i string koji predstavlja prezime, a ispisuje sve polaznike (ime i prezime polaznika, kao i naziv kursa i grad gde pohađaju kurs) čije ime sadrži dati parametar.

let zadatakO = (niz, prezime) => {
    niz.forEach(k => {
        k.polaznici.forEach(p => {
            if(prezime == p.prezime) {
                console.log(p.ime, p.prezime, k.naziv);
            }
        });
    });
}
zadatakO(kursevi, `ciric`);

// p) Funkciji se prosleđuje niz kurseva, a ispisuje naziv kursa i grad gde je ostvarena najbolja prosečna ocena na završnom testu. Ukoliko ima više takvih kurseva, ispisati bilo koji.

let zadatakP = niz => {
    let maxProsecnaOcena = 0;
    niz.forEach(k => {
        let prosecnaOcena = 0;
        k.polaznici.forEach(p => {
            prosecnaOcena += p.ocena;
        });
        if(prosecnaOcena / k.polaznici.length > maxProsecnaOcena) {
            maxProsecnaOcena =prosecnaOcena / k.polaznici.length;
        }
    });
    for(let i = 0; i < niz.length; i++) {
        let vrednost = 0;
        for(let j = 0; j < niz[i].polaznici.length; j++) {
            vrednost += niz[i].polaznici[j].ocena;
        }
        let srednjaVrednost = vrednost / niz[i].polaznici.length;
        if(srednjaVrednost == maxProsecnaOcena) {
            console.log(niz[i].naziv, niz[i].grad);
            break;
        }
    }
}
zadatakP(kursevi);

// q) Kurs je uspešan ako su svi polaznici položili završni test (svi polaznici ostvarili iznad 65%). Funkciji se prosleđuje niz kurseva, a vraća broj uspešnih kurseva.

let zadatakQ = niz => {
    let brojac = 0;
    niz.forEach(n => {
        if(n.uspesan()) {
            brojac++;
        }
    });
    return brojac;
}
console.log(`broj uspesnih kurseva je ${zadatakQ(kursevi)}`);

// r) Grad “kida” ukoliko je svaki kurs koji se održava u tom gradu uspešan. Funkciji se prosleđuje niz kurseva i grad, a vraća da li dati grad kida (funkcija vraća true ili false).

let zadatakR = (niz, grad) => {
    let pomocna = false;
    niz.forEach(kurs => {
        if(kurs.grad == grad && kurs.uspesan()) {
            pomocna = true;
        }
    });
    return pomocna;
}

console.log(zadatakR(kursevi, `Nis`));

// s) Polaznici na nekom kursu su “pokidali” na završnom testu ako nijedan polaznik nije osvojio manje od 80% na završnom testu. Funkciji se prosleđuje niz kurseva i naziv nekog kursa, a ona ispituje da li su polaznici pokidali na tom kursu (funkcija vraća true ili false).

let zadatakS = (niz, naziv) => {
    let pomocna = false;
    niz.forEach(kurs => {
        if(kurs.naziv == naziv && kurs.pokidali()) {
            pomocna = true;
        }
    });
    return pomocna;
}

console.log(zadatakS(kursevi, `Razvoj veb stranica: JS`));