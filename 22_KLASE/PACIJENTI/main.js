import Pacijent from "./pacijent.js";

let pacijent1 = new Pacijent(`Aca`, 190, 110);
let pacijent2 = new Pacijent(`Ana`, 175, 68);
let pacijent3 = new Pacijent(`Seka`, 172, 70)
console.log(pacijent1);
console.log(pacijent2);
console.log(pacijent3);
pacijent1.stampaj();
console.log(pacijent1.Bmi());
console.log(pacijent1.Kritican());

let pacijenti = [pacijent1, pacijent2, pacijent3];


function zadatak1(niz) {
    let minTezina = pacijenti[0].tezina;
    let index = 0;
    niz.forEach((p, i) => {
        if(p.tezina < minTezina) {
            minTezina = p.tezina;
            index = i;
        }
    });
    console.log(pacijenti[index].ime, pacijenti[index].visina, pacijenti[index].tezina);
}



// moj nacin
zadatak1(pacijenti);

function zadatak2(niz) {
    let najveciBmi = niz[0].Bmi();
    let index = 0;
    niz.forEach((n, i) => {
        if(n.Bmi() > najveciBmi) {
            najveciBmi = n.Bmi();
            index = i;
        }
    })
    console.log(niz[index].ime, niz[index].visina, niz[index].tezina);
}

// jelenin nacin
let pacijentSaNajmanjomTezinom = niz => {
    let minTezinaPacijent = niz[0];
    let minTezina = minTezinaPacijent.tezina;

    niz.forEach(p => {
        if(p.tezina < minTezina) {
            minTezina = p.tezina;
            minTezinaPacijent = p;
        }
    })
    return minTezinaPacijent;
}

let rez = pacijentSaNajmanjomTezinom(pacijenti);
console.log(`ISPOD JE rez.stampaj`);
rez.stampaj();

zadatak2(pacijenti);

function zadatak3(niz) {
    niz.forEach(n => {
        if(n.ime.includes(`A`)) {
            console.log(n.ime, n.visina, n.tezina);
        }
    })
}

zadatak3(pacijenti);


// Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.

function srednjaVisina(niz) {
    let zbir = 0;
    niz.forEach(n => {
        zbir += n.visina;
    });
    return zbir / niz.length;
}

console.log(srednjaVisina(pacijenti));

