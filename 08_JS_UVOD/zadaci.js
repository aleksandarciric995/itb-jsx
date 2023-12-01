/* ZADATAK 1 */
let sati = 23;
let minuti = 0;

let odPonoci = sati * 60 + minuti;
console.log("Minuta od ponoci: " + odPonoci);

// Zadatak 1.1 - minuta ostalo DO ponoci
console.log("Minuta do ponoci " + (60*24 - (sati * 60 + minuti)));

// Zadatak 2
minuti = 1270;
sati = (Math.floor(minuti / 60))
console.log(("U satima je: " + sati) + ", a u minutima: " + (minuti%60));

// Zadatak 3
let cena, novcanica, kusur;
cena1 = 570;
novcanica = 1000;
kusur = (novcanica - cena1);
console.log("Kusur koji kasirka treba da vrati musteriji: " + kusur);

// Zadatak 6
// Prva konverzija - iz evra u dinare
let ukupnoEur = 70;
let kursEur = 117.29;

let ukupnoDin = ukupnoEur * kursEur;
console.log(ukupnoDin);
// Druga konverzija - iz dinara u evre
let novacDin = 5000;
let novacEur = novacDin / kursEur;
console.log(novacEur);

// Zadatak 7 - prva konverzija iz eur u dolare uz pomoc dinara
let brojEur = 100;
let kursDol = 106.79;

// let brojDin = brojEur * kursEur;
// let brojDol = brojDin / kursDol;

let brojDol = brojEur * kursEur / kursDol;
console.log(brojDol);

// Zadatak 7 - druga konverzija iz dolara u evre uz pomoc dinara

brojEur = brojDol * kursDol / kursEur;
console.log("Eura ima: " + brojEur);

// Zadatak 8 - prva konverzija iz Celzijusa u Farenhajte
let tempCel = 5;
let tempFar = tempCel * 1.8 + 32;
console.log("Temperatura u farenhajtima iznosi: " + tempFar);

// Zadatak 8 - druga konverzija iz Farenhajte u Celzijuse
tempCel = (tempFar - 32) / 1.8;
console.log(tempCel);

// Zadatak 9 - prva konverzija iz Celzijuse u Kelvine
let tempKel = tempCel + 273.15
console.log(tempKel);

// Zadatak 9 - druga konverzija iz Kelvina u Celzijuse
tempCel = tempKel - 273.15;
console.log("Temperatura u celzijusima iznosi " + tempCel);

// Zadatak 5 
let datum = new Date(); // datum je promenljiva koja sadrzi informacije o trenutnom datumu i vremenu
let god = datum.getFullYear();
let mes = datum.getMonth();
let dat = datum.getDate();
console.log(god, mes + 1, dat);

// Zadatak 5 - dva
let datum2 = new Date();
console.log(datum2);
let god2 = datum2.getFullYear();
let mes2 = datum2.getMonth();
let dat2 = datum2.getDate();
console.log("Datum u dd/mm/yyyy formatu: " + god2,  mes2 + 1, dat2);

// 4
let sat = datum.getHours();
let min = datum.getMinutes();
console.log(sat, min);
console.log("Proslo je ukupno " + (sat * 60 + min) + " minuta od ponoci");