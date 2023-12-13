// KLASICNE (IMENOVANE) FUNKCIJE
function sum(a, b) {
    return a + b;
}

let rez = sum(1, 2); // poziv funkcije po imenu, iza koga se navode argumenti
console.log(rez);

// ANONIMNE FUNKCIJE (FUNKCIJE BEZ IMENA)
console.log(`Ispod je primer anonimne fukncije preko promenljive`);
let suma = function(a, b) {
    console.log(this);
    return a + b;
}
console.log(suma(1, 2));

// ARROW FUNKCIJE - POSEBAN VID ANONIMNIH FUNKCIJA - anonimne funkcije koje imaju dva specificna svojstva
// 1) Imaju skracen zapis
// 2) znacenje kljucne reci this
console.log(`Ispod je primer za arrow`);
let suma2 = (a, b) => {
    console.log(this);
    return a + b;
}

console.log(suma2(1, 2)); // poziv arrow funkcije (isto kao da pozivamo i anonimnu funkciju - uostalom, arrow i jeste jedan vid anonimne funkcije)
// ARROW funkcija koja ispisuje Hello World! u konzoli
let hello = () => {
    console.log(`Hello World!!`);
}
hello();
hello();

// arrow fja koja ispisuje dva stringa (parametre) razdvojene zarezom

let echo = (s1, s2) => {
    let result = s1 + ` ` + s2;
    console.log(result);
}

echo(`cao`, `aca`);