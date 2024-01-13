import Knjiga from "./knjiga.js";

let knjiga1 = new Knjiga(`Gospodar prstenova - Druzina prstena`, `J.R.R. Tolkin`, 1954, 423, 5699);
let knjiga2 = new Knjiga(`Gospodar prstenova - Dve kule`, `J.R.R. Tolkin`, 1954, 352, 8199);
let knjiga3 = new Knjiga(`Gospodar prstenova - Povratak kralja`, `J.R.R. Tolkin test za dugacko ime`, 1955, 4161, 8999);

// Napraviti niz od barem tri knjige
let knjige = [knjiga1, knjiga2, knjiga3];

// Ispisati sve autore kojima je ime dugačko.
let dugackoIme = niz => {
    niz.forEach(n => {
        if(n.dugackoIme()) {
            n.stampaj();
        }
    });
}

dugackoIme(knjige);

// Ispisati sve one knjige koje su istovremeno i skupe i obimne.
let skupeIObimne = niz => {
    niz.forEach(n => {
        if(n.skupa() && n.obimna()) {
            n.stampaj();
        }
    });
}

skupeIObimne(knjige);

// ukupnaCena - Određuje i vraća koliko ukupno koštaju sve knjge u nizu knjiga

function ukupnaCena(niz) {
    let ukupnaCena = 0;
    niz.forEach(n => {
        ukupnaCena += n.cena;
    });
    return ukupnaCena;
}

console.log(ukupnaCena(knjige));

// prosecnaCena - Određuje i vraća kolika je prosečna cena knjige

function prosecnaCena(niz) {
    return ukupnaCena(niz) / niz.length;
}

console.log(prosecnaCena(knjige));

// prosecnaStranica - Određuje i vraća kolika je prosečna cena jedne stranice knjige 

function prosecnaStranica(niz) {
    let brojStranica = 0;
    niz.forEach(n => {
        brojStranica += n.brojStrana;
    });
    return ukupnaCena(niz) / brojStranica;
}

console.log(prosecnaStranica(knjige));