let student1 = {
    ime: `Aca`,
    prezime: `Ciric`,
    godinaStudija: 2,
    ocene: [6, 7, 8, 9, 10, 9, 7, 10, 10],
    // ocene: [10, 10, 10, 10, 10, 10],
    ocene: [7, 7],
    prosek: function prosekOcena() {
        let suma = 0;
        this.ocene.forEach(o => {
            suma += o;
        });
        return suma / this.ocene.length;
    },
    prosecanStudent: function prosecanStudent() {
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] == 6 || this.ocene[i] == 10) {
                return false;
            }
        }
        return true;
    },
    ekstraStudent: function ekstraStudent() {
        let devetke = 0;
        let desetke = 0;
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] < 9) {
                return false;
            }
            if(this.ocene[i] == 9) {
                devetke++;
            }
            if(this.ocene[i] == 10) {
                desetke++;
            }
        }
        if(desetke > devetke * 2) {
            return true;
        }
        else {
            return false
        }
    },
    kida: function kida() {
        let devetke = 0;
        let desetke = 0;
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] < 9) {
                return false;
            }
            if(this.ocene[i] == 9) {
                devetke++;
            }
            if(this.ocene[i] == 10) {
                desetke++;
            }
        }  
        if(devetke < this.godinaStudija) {
            return true;
        }  
        else {
            return false;
        }
    },
    razbija: function razbija() {
        let desetke = 0;
        if(this.godinaStudija == 1) {
            return false;
        }
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] < 10) {
                return false;
            }
            if(this.ocene[i] == 10) {
                desetke++;
            }
        }
        if(desetke > 5 * (this.godinaStudija - 1)) {
            return true;
        }
        else {
            return false;
        }
    },
    aljkav: function aljkav() {
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] > 7) {
                return false;
            }
        }
        return true;
    },
    bruka: function bruka() {
        if(this.godinaStudija == 1) {
            return false;
        }
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] > 7) {
                return false;
            }
        }
        if(this.ocene.length < (3 * (this.godinaStudija - 1))) {
            return true;
        }
        else {
            return false;
        }
    },
}

let student2 = {
    ime: `Ana`,
    prezime: `Novicic`,
    godinaStudija: 5,
    ocene: [7, 6, 9, 6, 10, 10, 7, 10, 10],
    prosek: function prosekOcena() {
        let suma = 0;
        this.ocene.forEach(o => {
            suma += o;
        });
        return suma / this.ocene.length;
    },
    prosecanStudent: function prosecanStudent() {
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] == 6 || this.ocene[i] == 10) {
                return false;
            }
        }
        return true;
    },
    ekstraStudent: function ekstraStudent() {
        let devetke = 0;
        let desetke = 0;
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] < 9) {
                return false;
            }
            if(this.ocene[i] == 9) {
                devetke++;
            }
            if(this.ocene[i] == 10) {
                desetke++;
            }
        }
        if(desetke > devetke * 2) {
            return true;
        }
        else {
            return false
        }
    },
    kida: function kida() {
        let devetke = 0;
        let desetke = 0;
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] < 9) {
                return false;
            }
            if(this.ocene[i] == 9) {
                devetke++;
            }
            if(this.ocene[i] == 10) {
                desetke++;
            }
        }  
        if(devetke < this.godinaStudija) {
            return true;
        }  
        else {
            return false;
        }
    },
    razbija: function razbija() {
        let desetke = 0;
        if(this.godinaStudija == 1) {
            return false;
        }
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] < 10) {
                return false;
            }
            if(this.ocene[i] == 10) {
                desetke++;
            }
        }
        if(desetke > 5 * (this.godinaStudija - 1)) {
            return true;
        }
        else {
            return false;
        }
    },
    aljkav: function aljkav() {
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] > 7) {
                return false;
            }
        }
        return true;
    },
    bruka: function bruka() {
        if(this.godinaStudija == 1) {
            return false;
        }
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] > 7) {
                return false;
            }
        }
        if(this.ocene.length < (3 * (this.godinaStudija - 1))) {
            return true;
        }
        else {
            return false;
        }
    },
}
let student3 = {
    ime: `Uros`,
    prezime: `Ilanic`,
    godinaStudija: 3,
    ocene: [9, 10, 7, 9, 10, 9, 7, 10, 10, 6, 7],
    prosek: function prosekOcena() {
        let suma = 0;
        this.ocene.forEach(o => {
            suma += o;
        });
        return suma / this.ocene.length;
    },
    prosecanStudent: function prosecanStudent() {
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] == 6 || this.ocene[i] == 10) {
                return false;
            }
        }
        return true;
    },
    ekstraStudent: function ekstraStudent() {
        let devetke = 0;
        let desetke = 0;
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] < 9) {
                return false;
            }
            if(this.ocene[i] == 9) {
                devetke++;
            }
            if(this.ocene[i] == 10) {
                desetke++;
            }
        }
        if(desetke > devetke * 2) {
            return true;
        }
        else {
            return false
        }
    },
    kida: function kida() {
        let devetke = 0;
        let desetke = 0;
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] < 9) {
                return false;
            }
            if(this.ocene[i] == 9) {
                devetke++;
            }
            if(this.ocene[i] == 10) {
                desetke++;
            }
        }  
        if(devetke < this.godinaStudija) {
            return true;
        }  
        else {
            return false;
        }
    },
    razbija: function razbija() {
        let desetke = 0;
        if(this.godinaStudija == 1) {
            return false;
        }
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] < 10) {
                return false;
            }
            if(this.ocene[i] == 10) {
                desetke++;
            }
        }
        if(desetke > 5 * (this.godinaStudija - 1)) {
            return true;
        }
        else {
            return false;
        }
    },
    aljkav: function aljkav() {
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] > 7) {
                return false;
            }
        }
        return true;
    },
    bruka: function bruka() {
        if(this.godinaStudija == 1) {
            return false;
        }
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] > 7) {
                return false;
            }
        }
        if(this.ocene.length < (3 * (this.godinaStudija - 1))) {
            return true;
        }
        else {
            return false;
        }
    },
}
let student4 = {
    ime: `Seka`,
    prezime: `Ciric`,
    godinaStudija: 1,
    ocene: [6, 7, 8, 9],
    prosek: function prosekOcena() {
        let suma = 0;
        this.ocene.forEach(o => {
            suma += o;
        });
        return suma / this.ocene.length;
    },
    prosecanStudent: function prosecanStudent() {
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] == 6 || this.ocene[i] == 10) {
                return false;
            }
        }
        return true;
    },
    ekstraStudent: function ekstraStudent() {
        let devetke = 0;
        let desetke = 0;
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] < 9) {
                return false;
            }
            if(this.ocene[i] == 9) {
                devetke++;
            }
            if(this.ocene[i] == 10) {
                desetke++;
            }
        }
        if(desetke > devetke * 2) {
            return true;
        }
        else {
            return false
        }
    },
    kida: function kida() {
        let devetke = 0;
        let desetke = 0;
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] < 9) {
                return false;
            }
            if(this.ocene[i] == 9) {
                devetke++;
            }
            if(this.ocene[i] == 10) {
                desetke++;
            }
        }  
        if(devetke < this.godinaStudija) {
            return true;
        }  
        else {
            return false;
        }
    },
    razbija: function razbija() {
        let desetke = 0;
        if(this.godinaStudija == 1) {
            return false;
        }
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] < 10) {
                return false;
            }
            if(this.ocene[i] == 10) {
                desetke++;
            }
        }
        if(desetke > 5 * (this.godinaStudija - 1)) {
            return true;
        }
        else {
            return false;
        }
    },
    aljkav: function aljkav() {
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] > 7) {
                return false;
            }
        }
        return true;
    },
    bruka: function bruka() {
        if(this.godinaStudija == 1) {
            return false;
        }
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] > 7) {
                return false;
            }
        }
        if(this.ocene.length < (3 * (this.godinaStudija - 1))) {
            return true;
        }
        else {
            return false;
        }
    },
}

let studenti = [student1, student2, student3, student4];

// a) Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo.

let zadatakA = (niz, s) => {
    niz.forEach(n => {
        if(n.prezime[0] == s) {
            console.log(`Ime i prezime studenta je ${n.ime} ${n.prezime}`);
        }
    });
}
zadatakA(studenti, `C`);
zadatakA(studenti, `I`);

// b) Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string.

let zadatakB = (niz, i, p) => {
    niz.forEach(n => {
        if(n.ime.includes(i) && n.prezime.includes(p)) {
            console.log(`Ime i prezime studenta je ${n.ime} ${n.prezime}`);
        }
    });
}

zadatakB(studenti, `A`, ``);

// c) Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji predstavlja godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.

let zadatakC = (niz, b) => {
    let brojac = 0;
    niz.forEach(n => {
        if(n.godinaStudija == b) {
            brojac++;
        }
    });
    return brojac;
}

console.log(zadatakC(studenti, 5));

// d) Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.
console.log(`POD D`);
console.log(student1.prosek());
console.log(student2.prosek());
console.log(student3.prosek());
console.log(student4.prosek());

let zadatakD = (niz) => {
    let maxProsek = 0;
    niz.forEach(s => {
        if(s.prosek() > maxProsek) {
            maxProsek = s.prosek();
        }
    });
    niz.forEach(s => {
        if(s.prosek() == maxProsek) {
            console.log(s.ime, s.prezime);
            console.log(s.prosek());
        }
    });
}

zadatakD(studenti);

// e) Funkciji se prosleđuje jedan broj u intervalu od 1 do 5 i niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom, koji je na prosleđenoj godini studija. Ukoliko ima više takvih studenata, ispisati ime i prezime svih takvih studenata.

let zadatakE = (b, niz) => {
    let maxProsek = 0;
    niz.forEach(s => {
        if(s.godinaStudija == b) {
            niz.forEach(s => {
                if(s.prosek() > maxProsek) {
                    maxProsek = s.prosek();
                }
            });
        }
    });
    niz.forEach(s => {
        if(s.prosek() == maxProsek) {
            console.log(s.ime, s.prezime);
            console.log(s.prosek());
        }
    });
}

zadatakE(3, studenti);

// f) Student je prosečan ako nema nijednu šesticu i nijednu desetku. Funkciji se prosleđuje niz studenata, a ona ispisuje sve prosečne studente.

let zadatakF = niz => {
    niz.forEach(s => {
        if(s.prosecanStudent()) {
            console.log(s.ime, s.prezime);
        }
    });
}

zadatakF(studenti);

// g) Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki. Funkciji se prosleđuje niz studenata, a ona ispisuje sve ekstra studente.

let zadatakG = (niz) => {
    niz.forEach(s => {
        if(s.ekstraStudent()) {
            console.log(s.ime, s.prezime);
        }
    });
} 
zadatakG(studenti);

// h) Student “kida” ako je polagao ispite samo samo sa devetkama i desetkama, a broj devetki je manji od godine studije na kojoj se student nalazi. Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji kidaju.

let zadatakH = niz => {
    niz.forEach(s => {
        if(s.kida()) {
            console.log(s.ime, s.prezime);
        }
    })
};
zadatakH(studenti);

// i) Student “razbija” ako je sve ispite položio sa ocenom deset. Pri tome, broj desetki ne sme biti manji od broja 5 * (godina_studija - 1). (Dakle, ne može student na trećoj godini da razbija ako je položio jedan ispit, kao što nijedan student prve godine još ne može da razbija, jer još nije položio sve ispite iz tekuće godine). Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji razbijaju.

let zadatakI = niz => {
    niz.forEach(n => {
        if(n.razbija()) {
            console.log(n.ime, n.prezime);
        }
    });
}
zadatakI(studenti);

// j) Student je “aljkav” ako nijedan ispit nije položio sa ocenom većom od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve aljkave studente.

let zadatakJ = niz => {
    niz.forEach(n => {
        if(n.aljkav()) {
            console.log(n.ime, n.prezime);
        }
    });
}
zadatakJ(studenti);

// k) Student se “bruka” ako nije student prve godine, a broj položenih ispita je manji od broja 3 * (godina_studija - 1), i pri tome nijedna ocena nije veća od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve studente koji se brukaju.

let zadatakK = niz => {
    niz.forEach(n => {
        if(n.bruka()) {
            console.log(n.ime, n.prezime);
        }
    });
}
zadatakK(studenti);