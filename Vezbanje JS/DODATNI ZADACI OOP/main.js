import Boja from "./boja.js";

let boja1 = new Boja(345, 0.9, 95);
let boja2 = new Boja(626, 0.7, 35);
let boja3 = new Boja(247, 0.8, 85);
let boja4 = new Boja(247, 0.8, 85);

let boje = [boja1, boja2, boja3, boja4];

// Napraviti funkciju ispitajSličnost koja za dve prosleđene boje vraća true ukoliko su te dve boje iste, u suprotnom vraća false.
function ispitajSlicnost(b1, b2) {
    if(b1.talasnaDuzinanm == b2.talasnaDuzinanm && b1.zasicenje == b2.zasicenje && b1.intenzitet == b2.intenzitet) {
        return true;
    } 
    else {
        return false;
    }
}

console.log(ispitajSlicnost(boja1, boja2));
console.log(ispitajSlicnost(boja3, boja4));

// Napraviti funkciju srednjaTalasnaDuzina koja za niz boja vraća vrednost srednje talasne dužine.
function srednjaTalasnaDuzina(niz) {
    let ukupno = 0;
    niz.forEach(n => {
        ukupno += n.talasnaDuzinanm;
    });
    return ukupno / niz.length;
}

console.log(srednjaTalasnaDuzina(boje));

/////////////////////////////////////////////////////////////////////////////////

// Napraviti funkciju ranijiDatum koja za dva prosleđena datuma ispisuje raniji od ta dva datuma. Ukoliko su datumi jednaki onda na ekranu ispisati “Datumi su jednaki”.
import Datum from "./datum.js";

let datum1 = new Datum(3, 9, 1995);
let datum2 = new Datum(3, 9, 1995);

function ranijiDatum(d1, d2) {
    if(d1.godina > d2.godina) {
        d1.stampaj();
    }
    else if(d2.godina > d1.godina) {
        d2.stampaj();
    }
    else if(d1.mesec > d2.mesec) {
        d1.stampaj();
    }
    else if(d2.mesec > d1.mesec) {
        d2.stampaj();
    }
    else if(d1.dan > d2.dan) {
        d1.stampaj();
    }
    else if(d2.dan > d1.dan) {
        d2.stampaj();
    }
    else {
        console.log(`Datumi su jednaki.`);
    }
}

ranijiDatum(datum1, datum2)

/////////////////////////////////////////////////////////////////////
import Radnik from "./radnik.js";

// Napraviti funkciju maksPlata kojoj se prosleđuje niz radnika, a ona vraća najveću platu ranika.
let radnik1 = new Radnik(`Aca`, 75000);
let radnik2 = new Radnik(`Seka`, 65000);
let radnik3 = new Radnik(`Uros`, 75000);
let radnik4 = new Radnik(`Ana`, 60000);
let radnici = [radnik1, radnik2, radnik3, radnik4];

function maksPlata(niz) {
    let max = niz[0].plata;
    niz.forEach(n => {
        if(n.plata > max) {
            max = n.plata;
        }
    });
    return max;
}

console.log(maksPlata(radnici));

// Napraviti funkciju maksPlataOsoba kojoj se prosleđuje niz ranika, a ona ispisuje sve podatke za svakom od radnika sa maksimalnom platom.
function maksPlataOsoba(niz) {
    niz.forEach(n => {
        if(n.plata == maksPlata(niz)) {
            n.stampaj();
        }
    });
}

maksPlataOsoba(radnici);

///////////////////////////////////////////////////////////////////////
import Autobus from "./autobus.js";

let bus1 = new Autobus(`PA 143 AE`, 56);
let bus2 = new Autobus(`BG 2213 OF`, 95);
let bus3 = new Autobus(`NS 326 BG`, 120);
let bus4 = new Autobus(`PA 113 IF`, 65);
let autobusi = [bus1, bus2, bus3, bus4];

// Napraviti funkciju ukupnoSedista kojoj se prosleđuje niz autobusa a koja određuje i vraća koliko ukupno sedišta sadrže svi autobusi koji se nalaze u nizu autobusa.
function ukupnoSedista(niz) {
    let ukupno = 0;
    niz.forEach(n => {
        ukupno += n.brojSedista;
    });
    return ukupno;
}

console.log(ukupnoSedista(autobusi));

// Napraviti funkciju maksSedista koja ispisuje podatke o autobusu koji ima najveći broj sedišta.

function maksSedista(niz) {
    let max = niz[0].brojSedista;
    niz.forEach(n => {
        if(n.brojSedista > max) {
            max = n.brojSedista;
        }
    });

    niz.forEach(n => {
        if(n.brojSedista == max) {
            n.stampaj();
        }
    });
}

maksSedista(autobusi);

// Napraviti funkciju ljudi kojoj se prosleđuje broj ljudi i niz autobusa a funkcija vraća true ukoliko je moguće toliko ljudi smestiti u autobuse, u suprotnom vraća false.
function ljudi(br, niz) {
    if(ukupnoSedista(niz) >= br) {
        return true;
    }
    return false;
}

console.log(ljudi(336, autobusi));

////////////////////////////////////////////////////////////////////////
import FMRadio from "./radio.js";

// Napraviti metodu promeniZvuk kojoj se prosleđuje simbol plus ili minus i koja  po pozivu jačinu zvuka menja isključivo za 1 stupanj. Ukoliko je prosleđen simbol + povećati jačinu zvuka za 1, u suprotnom smanjiti jačinu zvuka za 1. Voditi računa o tome da jačina zvuka ne sme biti manja od 0 i veća od 20 (Ova metoda ništa ne vraća, samo promeni vrednost zvuka).

let radio1 = new FMRadio(`PLAY`, 92.5, 10);
let radio2 = new FMRadio(`TDI`, 91.8, 15);
let radio3 = new FMRadio(`Pancevo`, 92.9, 5);
let stanice = [radio1, radio2, radio3]
// Napraviti metodu frekvencijaIskljuci koja vrednost funkcije postavlja na najmanju moguću frekvenciju (na 87.5MHz).
// (I ova metoda takođe ništa ne vraća, samo postavi vrednost frekvencije)
console.log(radio1);
console.log(radio1);

// Napisati funkciju srednjaFrekvencija kojoj se prosleđuje niz radio stanica, a ona vraća koja je prosečna frekvencija prosleđenih radio stanica.

function srednjaFrekvencija(niz) {
    let prosek = 0;
    niz.forEach(n => {
        prosek += n.frekvencija;
    });
    return prosek / niz.length;
}

console.log(srednjaFrekvencija(stanice));

// Napisati funkciju najbliziMaks kojoj se prosleđuje niz radio stanica, a funkcija vraća onu radio stanicu čija je frekvencija najbliža maksimalnoj frekvenciji.
// Testirati rad napravljenih metoda.
let najbliziMaks = niz => {
    let razlika = Math.abs(108 - niz[0].frekvencija);
    console.log(razlika);
    let index = 0;
    niz.forEach((n, i) => {
        if(Math.abs(108 - n.frekvencija) <= razlika) {
            razlika = Math.abs(108 - n.frekvencija);
            index = i;
        }
    });
    return niz[index];
}    

console.log(najbliziMaks(stanice));

///////////////////////////////////////////////////////////
import Krug from "./krug.js";

let krug1 = new Krug(4);
let krug2 = new Krug(5);
let krug3 = new Krug(6);
let krug4 = new Krug(7);
let krugovi = [krug1, krug2, krug3, krug4];

console.log(krug1.povrsinaKruga());
console.log(krug1.obimKruga());

// Napraviti funkciju upisaniKrug kojoj se prosleđuju dva objekta tipa krug, a ona vraća true ukoliko je u prvi prosleđeni krug moguće upisati drugi prosleđeni krug. U suprotnom funkcija vraća false.
function upisaniKrug(k1, k2) {
    if(k1.povrsinaKruga() > k2.povrsinaKruga()) {
        return true;
    }
    else {
        return false;
    }
}

console.log(upisaniKrug(krug1, krug2));

// Napisati funkciju rastuci koja vraća true ukoliko se svaki krug može upisati u svog sledbenika. Ukoliko ma jedan krug ne može da se upiše u sledeći krug, vratiti false. 
function rastuci(niz) {
    for(let i = 0; i < niz.length - 1; i++) {
        if(niz[i].povrsinaKruga() > niz[i + 1].povrsinaKruga()) {
            return false;
        }
    }
    return true;
}

console.log(rastuci(krugovi));

/////////////////////////////////////////////////////////////////////////
import Cipela from "./cipela.js";
let cipela1 = new Cipela(`Acina`, 47, [`usij`, `prosiri`, `zalepi`]);
let cipela2 = new Cipela(`Sekina`, 39, [`usij`, `zalepi`, `prosiri`]);
let nizCipela = [cipela1, cipela2];


// Napraviti funkciju radi kojoj se prosledjuje jedna cipela (jedna instanca klase Cipela) i koja proverava da li je neka u nizu prepravki sadrži string zalepi, proširi ili ušij. Svaki put kada naiđe na prepravku (element u nizu prepravki) zalepi poziva se metoda zalepi, kada naiđe na prepravku prosiri poziva se metoda prosiri, kada naiđe na prepravku usij poziva se metoda usij, u suprotno se na ekranu ispisuje “Nepoznata prepravka”.

function radi(c) {
    c.nizPrepravki.forEach(p => {
        if(p == `usij`) {
            c.usij();
        }
        else if(p == `prosiri`) {
            c.prosiri();
        }
        else if(p == `zalepi`) {
            c.zalepi();
        }
        else {
            console.log(`Nepoznata prepravka.`);
        }
    });
}

radi(cipela1);
radi(cipela2);

// Napraviti funkciju najvisePrepravki kojoj se prosleđuje niz cipela, a funkcija na ekranu ispisuje podatke o onoj cipeli koja je imala najviše prepravki (ukoliko je bilo više cipela koje imaju najveći broj prepravki, ispisati sve podatke o tim cipelama).

function najvisePrepravki(nizCipela) {
    let max = 0;
    nizCipela.forEach(n => {
        if(n.nizPrepravki.length > max) {
            max = n.nizPrepravki.length;
        }
    })
    nizCipela.forEach(n => {
        if(n.nizPrepravki.length == max) {
            n.stampaj();
        }
    });
}

najvisePrepravki(nizCipela);

// Napraviti funkciju brojPrepravki kojoj se prosleđuje niz cipela i string koji predstavlja jednu od prepravki (zalepi, prosiri ili usij). Fukcija vraća broj cipela u kojima je trebalo uraditi prosleđenu prepravku. Pozvati funkciju i rezultat ispisati na ekranu. 
function brojPrepravki(niz, s) {
    let trazeniNiz = 0;
    niz.forEach(n => {
        n.nizPrepravki.forEach(p => {
            if(p == s) {
                trazeniNiz++;
            }
        });
    });
    return trazeniNiz;
}

console.log(brojPrepravki(nizCipela, `usij`));

