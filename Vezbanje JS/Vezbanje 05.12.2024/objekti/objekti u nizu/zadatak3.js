let let1 = {
    destinacija: `Beograd`,
    brojPutnika: 135,
    mestaNaLetu: 150,
    isplativ: function isplativ() {
        if(this.brojPutnika > this.mestaNaLetu / 2) {
            return true;
        }
        else {
            return false;
        }
    },
};

let let2 = {
    destinacija: `Bec`,
    brojPutnika: 195,
    mestaNaLetu: 200, 
    isplativ: function isplativ() {
        if(this.brojPutnika > this.mestaNaLetu / 2) {
            return true;
        }
        else {
            return false;
        }
    },
};

let let3 = {
    destinacija: `Bratislava`,
    brojPutnika: 90,
    mestaNaLetu: 120, 
    isplativ: function isplativ() {
        if(this.brojPutnika > this.mestaNaLetu / 2) {
            return true;
        }
        else {
            return false;
        }
    },
};

let let4 = {
    destinacija: `Zagreb`,
    brojPutnika: 110,
    mestaNaLetu: 135, 
    isplativ: function isplativ() {
        if(this.brojPutnika > this.mestaNaLetu / 2) {
            return true;
        }
        else {
            return false;
        }
    },
};

let letovi = [let1, let2, let3, let4];

// a) maxBrojPutnika kojoj se prosleđuje niz letova, a funkcija vraća maksimalan broj putnika na nekom od letova.

function maxBrojPutnika(niz) {
    let max = 0;
    niz.forEach(l => {
        if(l.brojPutnika > max) {
            max = l.brojPutnika;
        }
    });
    return max;
}

console.log(maxBrojPutnika(letovi));

// b) Napisati funkciju brojMax kojoj se prosleđuje niz letova, a funkcija vraća broj letova na kojima je leteo maksimalan broj putnika.

function brojMax(niz) {
    let brojac = 0;
    niz.forEach(l => {
        if(l.brojPutnika == maxBrojPutnika(niz)) {
            brojac++;
        }
    })
    return brojac;
}

console.log(brojMax(letovi));

// c) Napisati funkciju prosek kojoj se prosleđuje niz letova, a funkcija vraća prosečan broj putnika po letu sa niškog aerodroma tog dana.
function prosecanBrojPutnika(niz) {
    let ukupno = 0;
    niz.forEach(l => {
        ukupno += l.brojPutnika;
    });
    return ukupno / niz.length;
}

console.log(prosecanBrojPutnika(letovi));

// d) Dan je bio isplativ za niški aerodrom, ukoliko je više od polovine svakog leta bilo popunjeno (broj putnika na letu bio je veći od polovine mesta na letu).

function isplativDan(niz) {
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].isplativ() != true) {
            return false;
        }
    }
    return true;
}

console.log(isplativDan(letovi));

// e) Dan je bio iznadGranice ukoliko je u većini letova broj putnika bio veći od zadate granice. Napisati funkciju kojoj se prosleđuju niz letova, kao i granica (ceo broj), a funkcija ispituje da li je dan bio isplativ (vraća true ako jeste i false ako nije).

function iznadGranice(niz, broj) {
    let brojac = 0;
    niz.forEach(l => {
        if(l.brojPutnika > broj) {
            brojac++;
        }
    });
    if(brojac > niz.length / 2) {
        return true;
    }
    else {
        return false;
    }
}

console.log(iznadGranice(letovi, 90));

// f) Napisati funkciju dobreDestinacije kojoj se prosleđuje niz letova, a funkcija ispisuje letove sa natprosečnim brojem putnika.

function dobreDestinacije(niz) {
    niz.forEach(l => {
        if(l.brojPutnika > prosecanBrojPutnika(niz)) {
            console.log(l);
        }
    });
}

dobreDestinacije(letovi);

// g) Napisati funkciju ukupanBrojPutnikaDestinacije kojoj se prosleđuju string koji predstavlja naziv destinacije i niz letova, a funkcija vraća broj putnika koji je danas leteo na tu destinaciju.

function ukupanBrojPutnikaDestinacije(destinacija, niz) {
    let brojPutnika = 0;
    niz.forEach(l => {
        if(l.destinacija == destinacija) {
            brojPutnika += l.brojPutnika;
        }
    });
    return brojPutnika;
}

console.log(ukupanBrojPutnikaDestinacije(`Zagreb`, letovi));

// h) Napisati funkciju slabaProdaja kojoj se prosleđuje niz letova, a funkcija vraća onaj let koji je imao najveću razliku između broja putnika na letu i broja mesta na letu.

function slabaProdaja(niz) {
    let maxRazlika = 0;
    let index = 0;
    niz.forEach((l, i) => {
        if(Math.abs(l.mestaNaLetu - l.brojPutnika) > maxRazlika) {
            maxRazlika = Math.abs(l.mestaNaLetu - l.brojPutnika);
            index = i;
        }
    });
    return letovi[index];
}

console.log(slabaProdaja(letovi));