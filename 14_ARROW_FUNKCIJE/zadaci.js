/*
Napisati funkciju neparan koja za uneti ceo broj n vraća tekst “Broj je neparan” ukoliko je u pitanju neparan broj ili vraća tekst “Broj je paran” ukoliko broj n nije neparan.
*/
// VARIJANTA 1 preko funkcija

if(true) {
    let x = 6;
    // ...
    // ...
    // ...
    // ...
}
function neparan(n) {
    let x; // x - vazi u bloku u kojem je definisan; a blok su zagrade, da tako kazemo
    if (n % 2 == 1) {
        x = true; // da smo rekli let x = true; - napravili bismo novu promenljivu x sa istim imenom kao stara x promeljiva, ali nova promenljiva x postoji samo u if bloku, a ne u celoj funkciji. U ostatku funkcije vazi drugi x.  Posto nema let x, napisano samo x = true; menja vec zadati x iz funkcije
    }
    else {
        x = false;
    }
//    let x; // ovo ovde je netacno, jer let ima takav feature
    return x;
}

function neparan2(n) {
    if (n % 2 == 1) {
        var x = true; // promenljiva definisana sa var znaci da je promenljiva dostpupna unutar funkcije u kojoj je definisana
    }
    else {
        var x = false;
    }
//    var x; // OVAJ VAR OVDE NE RADI NISTA, ISPRAVNO JE NAPISANO, ODNOSNO MOGUCE JE, ALI OVAJ VAR NE RADI NISTA/ TACNO, ALI BESMISLENO
    return x;
}

let p = 5;

console.log(neparan(p));

var m = 9;  // VAR DOZVOLJAVA DA SE MENJA PROMENLJIVA, a LET NE DOZVOLJAVA MENJANJE PROMENLJIVE VEC PRAVI NOVU, DA TAKO KAZEM

// PREKO ARROW FUNKCIJE
let neparan3 = (n) => {
    let x = false;
    if(n % 2 == 1) {
        x = true;
    }
    return x;
}
console.log(neparan3(3));

let neparan4 = (n) => {
    return (n % 2 == 1) ? true : false; // znak pitanja dve tacke(?:) je ternarni operator - prihvata tri parametra
}
console.log(neparan4(5));
console.log(neparan4(6));

let radniDan = () => {
    let dan = new Date();
    let day = dan.getDay;
    if(day == 0 || day == 6) {
        return `Vikend je`;
    }
    else {
        return `Radni dan`;
    }
}
document.body.innerHTML += radniDan();

let neparan5 = (n) => {
    return (n % 2 == 1);
}
console.log(neparan5(3));

let neparan6 = (n) => (n % 2 == 1); // skracen zapis arrow funkcije
console.log(neparan6(3));

let uvecajZaDva = (n) => (n += 2);
console.log(uvecajZaDva(5));

let neparan7 = n => (n % 2 == 1); // kada je samo jedan parametar, ne moramo upisivati zagrade kada nazivamo f-ju
console.log(neparan7(3));

/*
1) Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja. U oba slučaja, brojevi su međusobno različiti.
2) Napisati funkciju koja vraća sliku za prosledjenu adresu slike. Rezultat poziva iskoristiti da sliku prikažete u browseru.
 Drugi zadatak izmenite na sledeći način:
Funkcija se ne menja. Samo u html fajlu, unutar body taga, dodajte div sa pozadinskom plavom bojom, i neka sadrži neki tekst. Onda u javascriptu pozovite ovu funkciju, i njen rezultat dodatje u div tag (znači da u div tagu ostane tekst, samo da se doda sličica posle teksta).
*/

// 1)
function maks2(x1, x2) {
    if(x1 > x2) {
        return x1;
    }
    else {
        return x2;
    }
}
console.log(maks2(3, 5));

function maks22(x1, x2) {
    return (x1 > x2) ? x1 : x2;
}
console.log(maks22(555, 66));

function maks4(x1, x2, x3, x4) {
    return (maks2(maks2(x1, x2)), maks2(x3, x4))
}
console.log(maks4(1, 3, 5, 7));

function maks44(x1, x2, x3, x4) {
    return (maks22(x1, x2) > maks22(x3, x4)) ? maks22(x1, x2) : maks22(x3, x4);
}

console.log(`maks 44 = `, maks44(4, 3, 5, 11));

// 2)
function slika(adresa) {
    return `<img src="${adresa}">`
}

// let slikaPromenljiva = document.getElementById(`slika`);

document.getElementById(`slika`).innerHTML += slika(`https://www.slikomania.rs/fotky6509/fotos/CWFTR026.jpg`); 


// 2) preko arrow f-je
let fSlika = adresa => `<img src="${adresa}">`;
document.body.innerHTML += fSlika(`https://www.slikomania.rs/fotky6509/fotos/CFAZH6215E1.jpg`);
