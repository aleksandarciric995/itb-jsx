console.log(`Funkcije`);

/////////////////////////////////////////////////////////
// Funkcija za ispis u konzoli
/////////////////////////////////////////////////////////

function zdravo() {
    console.log(`Hello world!`);
}
zdravo(); // Poziv funkcije
zdravo();

/////////////////////////////////////////////////////////
// Funkcija za ispis prosledjenog teksta u konzoli (prosledjuje se jedan parametar)
/////////////////////////////////////////////////////////

function ispisiTekst(tekst) {
    console.log(tekst);
}
ispisiTekst("Ovo je neki tekst"); // poziv kada prosledjujemo neku vrednost
ispisiTekst('ovo je neki drugi tekst');
let t = `Moj tekst`;
ispisiTekst(t);

/////////////////////////////////////////////////////////
// Funkcija kojoj prosledjujemo dva parametra
/////////////////////////////////////////////////////////

function imePrezime(ime, prezime, godine) {
    console.log(`Ulogovana osoba je ${ime} ${prezime}. Osoba ima ${godine} godina.`);
}
imePrezime("Jelena", "Matejic", 29);
let imeOsobe = `Stefan`;
let prezimeOsobe = `Stanimirovic`;
let godineOsobe = 34;
imePrezime(imeOsobe, prezimeOsobe, godineOsobe);
imePrezime(imeOsobe, `primerString`, godineOsobe);
imePrezime(30, `Milica`, 1993); // VODITE RACUNA O REDOSLEDU ARGUMENATA 
imePrezime(godine=40, ime=`Maja`, prezime=`markovic`); // OVO NE RADI

/////////////////////////////////////////////////////////
// Funkcija koja vrsi sabiranje dva broja
/////////////////////////////////////////////////////////

function zbir(br1, br2) {
    let rezultat = br1 + br2;
    console.log(`${br1} + ${br2} = ${rezultat}`);
}
zbir(16, 21);
let  b1 = -10;
let b2 = 20;
zbir(b1, b2);
zbir(5+4, 50);
zbir(zbir(1,4), zbir(-4,5));
zbir("Java", "Script");

/////////////////////////////////////////////////////////
// Funkcija koja vraca vrednost
/////////////////////////////////////////////////////////

function razlika(umanjenik, umanjilac) {
    let razlikaRezultat = umanjenik - umanjilac;
    return razlikaRezultat;
}
console.log(`Razlika je: ${razlika(60, 45)}`);
let r = razlika(100, 4);
console.log(`Funkcija vraca ${r}`);

let r1 = razlika(6, 3); // r1 = 3; zbog RETURN upisuje 3  
let r2 = razlika(17, 7);// r2 = 10; zbog RETURN upisuje 10
let r3 = razlika(r1, r2);// r3 = -7
console.log(`Promenljiva iznosi ${r3}.`);
let r4 = razlika(razlika(40, 60), razlika(10, 4)); // razlika(-20, 6) = - 26;
console.log(r4);

/////////////////////////////////////////////////////////
// FUNKCIJE SA VISE RETURN-a
/////////////////////////////////////////////////////////

function temperaturaVode(temp) {
    if(temp <= 0) {
        return "Voda se ledi.";
    }
    else if(temp >= 100) {
        return "Voda isparava.";
    }
    else {
        return "Voda je u tecnom agregatnom stanju.";
    }
}
console.log(temperaturaVode(-5));
let rezTempVode = temperaturaVode(114);
console.log(rezTempVode);

/////////////////////////////////////////////////////////
// 2. nacin
/////////////////////////////////////////////////////////
console.log(`DRUGI NACIN`);
function temperaturaVode1(temp) {
    let tekstZaIspis = ``;
    if(temp <= 0) {
        tekstZaIspis = "Voda se ledi.";
    }
    else if(temp >= 100) {
        tekstZaIspis = "Voda isparava.";
    }
    else {
        tekstZaIspis = "Voda je u tecnom agregatnom stanju.";
    }
    return tekstZaIspis;
}
console.log(temperaturaVode1(50));

/////////////////////////////////////////////////////////
// 3. nacin
/////////////////////////////////////////////////////////

console.log(`TRECI NACIN`);
function temperaturaVode2(temp) {
    let tekstZaIspis = `Voda je u tecnom agregatnom stanju`;
    if(temp <= 0) {
        tekstZaIspis = "Voda se ledi.";
    }
    else if(temp >= 100) {
        tekstZaIspis = "Voda isparava.";
    }
    return tekstZaIspis;
}
console.log(temperaturaVode2(-50));
let pTempVode = document.getElementById("tempVode");
pTempVode.innerHTML = temperaturaVode2(100);

