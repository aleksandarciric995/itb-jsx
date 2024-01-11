let automobil1 = {
    marka: `Opel`,
    km: 54326,
    godište: 2021,
    vlasnici: [`Pera`, `Mika`, `Laza`, `Zika`, `Emil`],
};
let automobil2 = {
    marka: `Opel`,
    km: 4326,
    godište: 2021,
    vlasnici: [`Aca`, `Braca`, `Ana`, `Seka`],
};
let automobil3 = {
    marka: `BMW`,
    km: 563241,
    godište: 2005,
    vlasnici: [`Darko`, `Nikola`, `Dusan`],
};
let automobil4 = {
    marka: `Opel`,
    km: 54326,
    godište: 2008,
    vlasnici: [`Emil`, `Dejan`],
};

let nizAutomobila = [automobil2, automobil3, automobil4, automobil1];

console.log(nizAutomobila.length);
let nizA = [];
let nizB = [];

if(nizAutomobila.length % 2 == 0) {
    for(let i = 0; i < nizAutomobila.length / 2; i++) {
        nizA.push(nizAutomobila[i]);
    }
    for(let i = nizAutomobila.length / 2; i < nizAutomobila.length; i++) {
        nizB.push(nizAutomobila[i]);
    }
}
else {
    for(let i = 0; i < Math.floor(nizAutomobila.length / 2) + 1; i++) {
        nizA.push(nizAutomobila[i]);
    }
    for(let i = Math.floor(nizAutomobila.length / 2) + 1; i < nizAutomobila.length; i++) {
        nizB.push(nizAutomobila[i]);
    }
}

console.log(nizA);
console.log(nizB);

function skorije(niz1, niz2) {
    let ukupno2 = 0; 
    let prosek2 = 1;
    niz2.forEach(a2 => {
        ukupno2 += a2.godište;
    });
    prosek2 = Math.floor(ukupno2 / niz2.length);
    let ukupno1 = 0; 
    let prosek1 = 1;
    niz1.forEach(a1 => {
        ukupno1 += a1.godište;
    });
    prosek1 = Math.floor(ukupno1 / niz1.length);
    console.log(prosek1);
    console.log(prosek2);
    if(prosek2 > prosek1) {
        return true;
    }
    else {
        return false;
    }
}

console.log(skorije(nizA, nizB));