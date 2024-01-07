let let1 = {
    destinacijaGrad: `Beograd`,
    destinacijaDrzava: `Srbija`,
    vremePoletanja: `16:30`,
    vremeSletanja: `17:30`,
    prepodne: function prepodne() {
        if(Number(this.vremePoletanja[0] + this.vremePoletanja[1]) > 12) {
            return false;
        }
        else {
            return true;
        };
    },
    sati: function sati() {
        return Number(this.vremePoletanja[0] + this.vremePoletanja[1]);
    },
    minuti: function minuti() {
        return Number(this.vremePoletanja[3] + this.vremePoletanja[4]);
    },
}
console.log(let1.sati());
console.log(let1.minuti());

let let2 = {
    destinacijaGrad: `Beograd`,
    destinacijaDrzava: `Srbija`,
    vremePoletanja: `20:30`,
    vremeSletanja: `21:30`,
    prepodne: function prepodne() {
        if(Number(this.vremePoletanja[0] + this.vremePoletanja[1]) > 12) {
            return false;
        }
        else {
            return true;
        };
    },
    sati: function sati() {
        return Number(this.vremePoletanja[0] + this.vremePoletanja[1]);
    },
    minuti: function minuti() {
        return Number(this.vremePoletanja[3] + this.vremePoletanja[4]);
    },
}
let let3 = {
    destinacijaGrad: `Zagreb`,
    destinacijaDrzava: `Hrvatska`,
    vremePoletanja: `10:00`,
    vremeSletanja: `11:30`,
    prepodne: function prepodne() {
        if(Number(this.vremePoletanja[0] + this.vremePoletanja[1]) > 12) {
            return false;
        }
        else {
            return true;
        };
    },
    sati: function sati() {
        return Number(this.vremePoletanja[0] + this.vremePoletanja[1]);
    },
    minuti: function minuti() {
        return Number(this.vremePoletanja[3] + this.vremePoletanja[4]);
    },
}
let let4 = {
    destinacijaGrad: `Budimpesta`,
    destinacijaDrzava: `Madjarska`,
    vremePoletanja: `00:00`,
    vremeSletanja: `01:00`,
    prepodne: function prepodne() {
        if(Number(this.vremePoletanja[0] + this.vremePoletanja[1]) > 12) {
            return false;
        }
        else {
            return true;
        };
    },
    sati: function sati() {
        return Number(this.vremePoletanja[0] + this.vremePoletanja[1]);
    },
    minuti: function minuti() {
        return Number(this.vremePoletanja[3] + this.vremePoletanja[4]);
    },
}
let let5 = {
    destinacijaGrad: `Budimpesta`,
    destinacijaDrzava: `Madjarska`,
    vremePoletanja: `08:00`,
    vremeSletanja: `09:00`,
    prepodne: function prepodne() {
        if(Number(this.vremePoletanja[0] + this.vremePoletanja[1]) > 12) {
            return false;
        }
        else {
            return true;
        };
    },
    sati: function sati() {
        return Number(this.vremePoletanja[0] + this.vremePoletanja[1]);
    },
    minuti: function minuti() {
        return Number(this.vremePoletanja[3] + this.vremePoletanja[4]);
    },
}
let let6 = {
    destinacijaGrad: `Bec`,
    destinacijaDrzava: `Austrija`,
    vremePoletanja: `12:00`,
    vremeSletanja: `14:00`,
    prepodne: function prepodne() {
        if(Number(this.vremePoletanja[0] + this.vremePoletanja[1]) < 12) {
            return true;
        }
        else {
            return false;
        };
    },
    sati: function sati() {
        return Number(this.vremePoletanja[0] + this.vremePoletanja[1]);
    },
    minuti: function minuti() {
        return Number(this.vremePoletanja[3] + this.vremePoletanja[4]);
    },
}

let letovi = [let1, let2, let3, let4, let5, let6];


// a) Napisati funkciju brojLetovaZaZemlju kojoj se prosleđuju niz letova, kao i zemlja, a funkcija vraća broj letova do date zemlje.

function brojLetovaZaZemlju(niz, zemlja) {
    let brojac = 0;
    niz.forEach(l => {
        if(l.destinacijaDrzava == zemlja) {
            brojac++;
        }
    })
    return brojac;
}

console.log(brojLetovaZaZemlju(letovi, `Madjarska`));

// b) Napisati funkciju visePrePodne kojoj se prosleđuje niz letova, a određuje da li je bilo više letova pre podne ili posle podne. Ukoliko je bilo više letova pre podne, vratiti true, a u suportnom, vratiti false.

function visePrePodne(niz) {
    let brojac = 0;
    niz.forEach(l => {
        if(l.prepodne()) {
            brojac++;
        }
    });
    if(brojac > (niz.length / 2)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(visePrePodne(letovi));

// c) Napisati funkciju ispisLetovaDoSada kojoj se prosleđuje niz letova, kao i zemlja, a koja ispisuje sve letove koji su poleteli do trenutnog vremena (vreme preuzeti sa računara).

let datum = new Date();
let sati = datum.getHours();
let minuti = datum.getMinutes();
console.log(minuti);

function ispisLetovaDoSada(niz, zemlja) {
    niz.forEach(l => {
        if(l.destinacijaDrzava == zemlja) {
            if(l.sati() < sati && l.minuti() < minuti) {
                console.log(l);
            }
        }
    });
}

ispisLetovaDoSada(letovi, `Madjarska`);

// d) Neke zemlje su označene kao crvene, jer je u njima nepovoljna epidemiološka situacija. Napisati funkciju rizicniLetovi kojoj se prosleđuju niz letova, kao i niz zemalja, a koja ispisuje u paragrafima čiji je tekst obojen crvenom bojom. U svakom paragrafu ispisati informacije o onim letovima koji kao destinaciju imaju zemlju iz crvene zone.

let crveneZemlje = [`Madjarska`, `Hrvatska`];

function rizicniLetovi(niz, zemlje) {
    niz.forEach(l => {
        zemlje.forEach(z => {
            if(z == l.destinacijaDrzava) {
                let paragraf = `<p style="color: red;">`;
                paragraf += `${l.destinacijaGrad}, `;
                paragraf += `${l.destinacijaDrzava}, `;
                paragraf += `${l.vremePoletanja}, `;
                paragraf += `${l.vremeSletanja}`;
                paragraf += `</p>`;
                document.body.innerHTML += paragraf;
            }
        });
    });
}

rizicniLetovi(letovi, crveneZemlje);

// e) Neka destinacija je tražena ukoliko postoji više letova u toku dana za tu destinaciju. Napisati funkciju trazeneDestinacije kojoj se prosleđuje niz letova, a koja ispisuje sve tražene destinacije (ukoliko postoje).

let trazeneDestinacije = niz => {
    let destinacije = [];
    for(let i=0; i<niz.length; i++) {
        let br = 0;
        let zemlja = niz[i];
        if (destinacije.includes(zemlja.destinacijaDrzava)) {
            continue;
        }
        for(let j=0; j<niz.length; j++) {
            if (zemlja.destinacijaDrzava == niz[j].destinacijaDrzava) {
                br++;
            }
        }
        if (br > 1) {
            console.log(zemlja.destinacijaDrzava);
            destinacije.push(zemlja.destinacijaDrzava);
        }
    }
    console.log(destinacije);
}
trazeneDestinacije(letovi);

function trazeneDestinacije2(niz) {
    let destinacije = [];
    for(let i = 0; i < niz.length; i++) {
        let br = 0;
        if(destinacije.includes(niz[i].destinacijaDrzava)) {
            continue;
        }
        for(let j = 0; j < niz.length; j++) {
            if(niz[i].destinacijaDrzava == niz[j].destinacijaDrzava) {
                br++;
            }
        }
        if (br > 1) {
            console.log(niz[i].destinacijaDrzava);
            destinacije.push(niz[i].destinacijaDrzava)
        }
    }
}
trazeneDestinacije2(letovi);

// f) Napisati funkciju prosecanBrojLetovaZaZemlju kojoj se prosleđuje niz letova, a koja vraća prosečan broj letova ka svekoj od zemalja koje se pojavljuju u prosleđenom nizu.

function prosecanBrojLetovaZaZemlju(niz) {
    let destinacije = [];
    for(let i = 0; i < niz.length; i++) {
        let br = 0;
        if(destinacije.includes(niz[i].destinacijaDrzava)) {
            continue;
        }
        for(let j = 0; j < niz.length; j++) {
            if(niz[i].destinacijaDrzava == niz[j].destinacijaDrzava) {
                br++;
            }
        }
        console.log(`Prosecan broj letova za ${niz[i].destinacijaDrzava}je ${br / niz.length}`);
        destinacije.push(niz[i].destinacijaDrzava);
    }
    console.log(destinacije);
}
prosecanBrojLetovaZaZemlju(letovi);

// nacin sa slecka
let prosecanBrojLetovaZaZemlju2 = niz => {
    let destinacije = [];
    for(let i=0; i<niz.length; i++) {
        let br = 0;
        let zemlja = niz[i];
        if (destinacije.includes(zemlja.destinacijaDrzava)) {
            continue;
        }
        for(let j=0; j<niz.length; j++) {
            if (zemlja.destinacijaDrzava == niz[j].destinacijaDrzava) {
                br++;
            }
        }
            console.log(`Prosecan broj letova za ${zemlja.destinacijaDrzava} je ${br/niz.length}`);
            destinacije.push(zemlja.destinacijaDrzava);
    }
}
prosecanBrojLetovaZaZemlju2(letovi);