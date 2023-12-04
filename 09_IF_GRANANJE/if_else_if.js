/* 
Vezba 8 -Radno vreme jedne programerske firme je od 9h do 17h. 
Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi. 
*/
let datum = new Date();
let sati = datum.getHours();
if (sati < 9) {
    console.log("Firma ne radi");
}
else if(sati >= 17) {
    console.log("Firma ne radi");
}
else {
    console.log(`Firma radi`);
}

/* Vezba 6 - Preuzeti sa računara koji je dan u nedelji i ispitati da li je to radni dan 
ili je u pitanju vikend. */
let dan = datum.getDay();
console.log(dan);
if (dan == 0) {
    console.log(`Vikend je`);
}
else if(dan == 6) {
    console.log(`Vikend je`);
}
else {
    console.log(`Radni je dan`);
}

/* Vezba 7 - Za vreme preuzeto sa računara ispisati 
dobro jutro za vreme manje od 12 sati ujutru, 
dobar dan za vreme manje od 18 sati,
u ostalim slučajevima ispisati dobro veče. */

let sat = datum.getHours();
if(sat < 12) {
    console.log(`Dobro jutro`);
}
else if(sat < 18) {
    console.log(`Dobar dan`);
}
else {
    console.log(`Dobro vece`);
}

/* Vezba 9 - Za unet sat početka i sat kraja radnog vremena dva lekara, ispisati DA ukoliko se smene lekara preklapaju, u suprotnom ispisati NE.
(Ne može se desiti da lekar počne smenu pre ponoći, a završi sa smenom nakon ponoći, ovo se podrazumeva i ne ispitivati dodatno) */

// NE - k1<p2 ili k2<p1

let p1 = 16;
let k1 = 21;
let p2 = 18;
let k2 = 23;

if(k1 <= p2) {
    console.log("Ne.");
}
else if(k2 <= p1) {
    console.log("Ne.");
}
else {
    console.log("Da.");
}


// POKUSAJ BEZ OBZIRA NA TRAJANJE SMENE
if(k1 <= p2) {
    console.log("Smene se ne preklapaju.");
}
else if(p1 <= k2) {
    console.log("Smene se preklapaju");
}
else {
    console.log("Smene se ne preklapaju");
}


/* Vezba 10 - Uneti dva broja. Većem  broju ispisati sledbenik, a manjem broju ispisati prethodnik. */

let b1 = 15;
let b2 = 10;
if(b1>b2) {
    console.log(b1+1);
    console.log(b2-1);
}
else if(b1<b2) {
    console.log(b1-1);
    console.log(b2+1);
}
else {
    console.log(`Brojevi su jednaki.`);
}

/* Vezba 11 - Učitati broj ispitati na ekranu “Ceo broj”, ukoliko je učitani broj ceo. */

let b3 = 12.5;
if(b3 === Math.round(b3)) {
    console.log(`Broj je okrugao`);
}
else {
    console.log(`Broj nije okrugao`);
}

// Drugi nacin V11

let c = 12.1;
if (c % 1 != 0) {
  console.log("Nije ceo broj");
} else {
  console.log("Ceo broj");
}