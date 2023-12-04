/* 
ZADATAK 15 U promenljivu uneti broj koji predstavlja temperaturu vazduha. 
Na ekranu ispisati „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.
*/
let t = -25;
if(t > 40 || t < -15) {
    console.log(`Ekstremna temperatura.`);
}
else {
    console.log(`Nije ekstremna temperatura.`);
}

// Drugi nacin
if(t >= -15 && t <= 40) {
    console.log(`Temp nije ekstremna.`);
} 
else {
    console.log(`Ekstremna je.`);
}

/* 
    VEZBA 16 - Ispitati da li je trenutna godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.
*/

let datum = new Date();
let godina = datum.getFullYear();

if(godina % 4 == 0 && godina % 100 != 0) {
    console.log(`Prestupna je.`);
}
else {
    console.log(`Nije prestupna.`);
}

if(godina % 4 == 0 || godina % 400 == 0) {
    console.log(`Godina je prestupna.`);
}
else {
    console.log(`Godina nije prestupna.`);
}

//  A neko je radio i ovako  (PRVO GLEDA NEGACIJU PA IDE S LEVA NA DESNO)

if(godina % 4 == 0 && godina % 100 != 0 || godina % 400 == 0) {
    console.log(`Godina je prestupna.111`);
}
else {
    console.log(`Godina nije prestupna.111`);
}

/* 
VEZBA 17 - Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara, ispitati “otvoreno” ukoliko je butik trenutno otvoren.
U suprotnom ispisati “zatvoreno”.
(Ko bude imao vremena: Ukoliko je butik trenutno otvoren, prikazati sličicu otvorenih vrata na ekranu. Ukoliko je butik trenutno zatvoren, prikazati sličicu zatvorenih vrata.)
*/

let dan = datum.getDay();
let sat = datum.getHours();

if ((dan == 0 || dan == 6) & (sat >= 10 && sat < 18))
{
    console.log(`Otvoreno.`);
}
else if((dan > 0 && dan < 6) & (sat >= 9 && sat < 20)) {
    console.log(`Otvoreno.`);
}
else {
    console.log(`Zatvoreno.`);
}


/*
Vezba 18 - Odrediti i u paragrafu ispisati najveći od tri uneta broja:
a) Samo uz pomoć if naredbi (bez korišćenja if-else strukture, logičkih operatora ili ugnježdenog grananja)
b) Korišćenjem if – else strukture
c) Korišćenjem ugnježdenog grananja.
d) Korišćenjem logičkih operatora
*/

let b1, b2, b3;
b1 = 55;
b2 = 66;
b3 = 77;
// POD a)
let najveci = Math.max(b1, b2, b3);
console.log(`let najveci je ${najveci}`);
if(b1 == najveci) {
    console.log(`Najveci je b1 = ${b1}`);
}
if(b2 == najveci) {
    console.log(`Najveci je b2 = ${b2}`);
}
if(b3 == najveci) {
    console.log(`Najveci je b3 = ${b3}`);
}

// drugi nacin pod a
b1 = 6;
b2 = 10;
b3 = 0;

let maks = b1;
if(b2 > maks) {
    maks = b2;
}
if(b3 > maks) {
    maks = b3;
}
console.log(`Najveci od brojeva je ${maks}`);

// POD b)
let maksimum = null;
if(b1 > b2) {
    maksimum = b1;
}
if(maksimum < b3) {
    maksimum = b3;
}
if(maksimum < b3) {
    maksimum = b3;
}




// POD c) nesto je cudno radilo kada sam probao
b1 = 13;
b2 = 12;
b3 = 0;
najveci = Math.max(b1, b2, b3);

if(b1 != najveci) {
    if(b2 != najveci) {
        console.log(`najveci je b3 odnosno ${b3}`);
    }
    else {
        console.log(`Najveci je b2 odnosno ${b2}`);
    }
}
else {
    console.log(`Najveci je b1 odnosno ${b1}`);
}

b1 = 12;
b2 = 12;
b3 = 13;

if(b1 > b2) {
    if(b1 > b3) {
        console.log(`Najveci je ${b1}`);
    }
    else {
        console.log(`Najveci je ${b3}`);
    }
}
else if(b2 > b3) {
    if(b2 > b1) {
        console.log(`Najveci je ${b2}`);
    }
    else {console.log(`najveci je ${b1}`);}
}
else if(b3 > b1)  {
    if(b3 > b2) {
        console.log(`Najveci je ${b3}`); 
    }
}
else {
    console.log(`jednaki su`);
}

// d)
b1 = 1111;
b2 = 117;
b3 = 118;

if(b1 > b2 && b1 > b3) {
    console.log(`b1 je najveci ${b1}`);
}
else if(b2 > b1 && b2 > b3) {
    console.log(`b2 je najveci ${b2}`);
}
else {
    console.log(`b3 je najveci ${b3}`);
}
