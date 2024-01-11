let student1 = {
    ime: `Aleksandar`,
    prezime: `Ciric`,
    godinaStudija: 2,
    ocene: [10, 8, 9, 6, 7, 8, 9],
    prosek: function prosek() {
        let zbir = 0;
        this.ocene.forEach(o => {
            zbir += o;
        });
        return zbir / this.ocene.length;
    },
}
console.log(student1.prosek());
let student2 = {
    ime: `Seka`,
    prezime: `Ciric`,
    godinaStudija: 1,
    ocene: [6, 7, 8, 9, 6],
        prosek: function prosek() {
        let zbir = 0;
        this.ocene.forEach(o => {
            zbir += o;
        });
        return zbir / this.ocene.length;
    },
}
let student3 = {
    ime: `Ana`,
    prezime: `Novicic`,
    godinaStudija: 4,
    ocene: [10, 10, 10, 9, 8, 9, 10, 7],
        prosek: function prosek() {
        let zbir = 0;
        this.ocene.forEach(o => {
            zbir += o;
        });
        return zbir / this.ocene.length;
    },
}
let student4 = {
    ime: `Uros`,
    prezime: `Ilanic`,
    godinaStudija: 2,
    ocene: [6, 7, 8, 7, 6],
        prosek: function prosek() {
        let zbir = 0;
        this.ocene.forEach(o => {
            zbir += o;
        });
        return zbir / this.ocene.length;
    },
}

let studenti = [student1, student2, student3,student4];

// a) Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo.

function zadatakA(niz, slovo) {
    niz.forEach(s => {
        if(s.prezime.startsWith(slovo)) {
            console.log(s.ime, s.prezime);
        }
    });
}

zadatakA(studenti, `C`);

// b) Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string.

function zadatakB(niz, a, b) {
    niz.forEach(s => {
        if(s.ime.includes(a) && s.prezime.includes(b)) {
            console.log(s.ime, s.prezime);
        }
    });
}

zadatakB(studenti, `a`, `c`)

// c) Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji predstavlja godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.

function zadatakC(niz, broj) {
    let brojac = 0;
    niz.forEach(s => {
        if(s.godinaStudija == broj) {
            brojac++;
        }
    });
    return brojac;
}

console.log(zadatakC(studenti, 2));

// d) Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.

function zadatakD(niz) {
    let max = 0;
    niz.forEach(s => {
        if(s.prosek() > max) {
            max = s.prosek();
        }
    });
    niz.forEach(s => {
        if(s.prosek() == max) {
            console.log(s.ime, s.prezime);
        }
    });
}

zadatakD(studenti);

// e) Funkciji se prosleđuje jedan broj u intervalu od 1 do 5 i niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom, koji je na prosleđenoj godini studija. Ukoliko ima više takvih studenata, ispisati ime i prezime svih takvih studenata.

function zadatakE(broj, niz) {
    let max = 0;
    niz.forEach(s => {
        if (s.godinaStudija == broj) {
            if(s.prosek() > max) {
                max = s.prosek();
            }
    }
    });
    niz.forEach(s => {
        if(s.prosek() == max && s.godinaStudija == broj) {
            console.log(s.ime, s.prezime);
        }
    });
}

zadatakE(2, studenti)

