// 1. zadatak - Ispisati brojeve od 1 do 20
// POMOCU WHILE PETLJE
let i = 0;
while(i <= 20) {
    console.log(`Broj ${i}`);
    i++; // i+0 1; i = i + 1;
}

// POMOCU FOR PETLJE
for(let j = 1; j <= 20; j++) {
    console.log(`Ovo je broj ${j}`);
}

console.log(`ZADATAK 2`);

// 2. ZADATAK - Ispisati brojeve od 20 do 1
// Umesto k==, moze se koristiti k -= 1; k = k - 1;
for(let k = 20; k >= 1; k--) {
    console.log(`Ovo je broj ${k}`);
}

// 5. ZADATAK - Odrediti sumu brojeva od 1 do n
let suma = 0;
let n = 5;
for(let p = 1; p <= n; p++) {
    suma += p;
}
console.log(`Ovo je suma brojeva od 1 do ${n} ${suma}`);

n = 5;
for(let p = 1, suma = 0; p <= n; p++) {
    suma += p;
}
console.log(`Ovo je suma brojeva od 1 do ${n} ${suma}`);

// 3. ZADATAK - Ispisati parne brojeve od 1 do 20

for(i = 1; i <= 20; i++) {
    if(i % 2 == 0) {
        console.log(`Paran broj ${i}`);
    }
}

// Drugi nacin
for(i = 2; i <= 20; i += 2) {
    console.log(`Paran broj ${i}`);
}

// 4. ZADATAK - Ispisati dvostruku vrednost brojeva od 5 do 15 
// ovo je zbir dvostruke vrednosti brojeva

i = 5;
n = 15;
let vrednost = 0;

for(let brojac = i; brojac <= 15; brojac++) {
    vrednost = vrednost + (2 * brojac);
    
} 
console.log(`Dvostruka vrednost brojeva od ${i} do ${n} je ${vrednost}`);

// svaki broj posebno

i = 5;
n = 15;
vrednost = 0;

for(let brojac = i; brojac <= 15; brojac++) {
    vrednost = (2 * brojac);
    console.log(`Dvostruka vrednost brojeva od ${i} do ${n}, konkretno broja ${brojac}, je ${vrednost}`);
} 


// Zadatak 6 - Odrediti sumu brojeva od n do m

n = 5;
m = 15;
suma = 0;
for(let brojac = n; brojac <= m; brojac++) {
    suma = suma + brojac;
}
console.log(`Suma brojeva od ${n} do ${m} je ${suma}`);

// Zadatak 7 - Odrediti proizvod brojeva od n do m

n = 3;
m = 6;
proizvod = 1;
for(let brojac = n; brojac <= m; brojac++) {
    proizvod = proizvod * brojac;
}
console.log(`Proizvod brojeva od ${n} do ${m} je ${proizvod}`);

// Zadatak 8 - Odrediti sumu kvadrata brojeva od n do m

n = 2;
m = 5;
let sumaKvadrata = 0;
for(let brojac = n; brojac <= m; brojac++) {
    sumaKvadrata = sumaKvadrata + brojac * brojac; // brojac ** 2 ======= to znaci na kvadrat!
}
console.log(`Suma kvadrata brojeva od ${n} do ${m} je ${sumaKvadrata}`);

/* Zadatak 9 - Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora). 
*/ 
for( i = 1; i <= 3; i++) {
    document.write(`<img src="slike/${i}.jpg">`)
}

// Zadatak 12 - Ispisati aritmetičku sredinu brojeva od n do m.

n = 3;
m = 6;
suma = 0;
let br = 0;

for(i = n; i <= 6; i++) {
    suma += i;
    br++ // br += 1; br = br + 1;
}
let aritmetickaSredina = suma / br;
console.log(`Aritmeticka sredina brojeva ${n} do ${m} je ${aritmetickaSredina}`);
console.log(suma); // ISPISUJE 18
console.log(br); // ISPISUJE 4
console.log(i); // ISPISUJE 7 - JAKO BITNO NMA INTERVJUIMA !!!! !!!! !!!!

// 10. Zadatak - Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100

proizvod = 1;
for(brojac = 20; brojac <= 100; brojac++) {
    if(brojac % 11 == 0) {
        proizvod *= brojac;
    }
}
console.log(`Proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100 iznosi ${proizvod}`);

// 11. Zadatak - Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150

br = 0;
for(brojac = 5; brojac <= 150; brojac++) {
    if(brojac % 13 == 0) {
        br++;
    }
}
console.log(`Ima ${br} brojeva deljivih sa 13 u intervalu od 5 do 150`);

// 13. Zadatak - Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno

n = -5;
m = 5;
let brPoz = 0;
let brNeg = 0;
for(brojac = n; brojac <= m; brojac++) {
    if(brojac > 0) {
        brPoz++;
    }
    else if (brojac < 0) {
        brNeg++;
    }
}
console.log(`U intervalu brojeva od ${n} do ${m} ima ${brPoz} pozitivnih brojeva, a ${brNeg} brojeva`);

// 16. Zadatak - Odrediti sumu brojeva od n do m koji nisu deljivi brojem a;
n = 3;
m = 9;
suma = 0;
a = 4;
for(i = n; i <= m; i++) {
    if(i % a != 0) {
        suma += i;
    }
}

console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${suma}`);
// i = 3, suma = 3; 
// i = 4, suma = 3;
// i = 5, suma = 3 + 5;
// i = 6, suma = 8 + 6;
// i = 7, suma = 14 + 7;
// i = 8, suma = 21;
// i = 9, suma = 21 + 9;
// i = 10, posto je i(10) > 9, odnosni nije <= 9, petlja tu staje

// 14. Zadatak - Prebrojati koliko je brojeva od 5 do 5 koji su deljivi sa 3 ili 5

br = 0;
for(brojac = 5; brojac <= 50; brojac++) {
    if(brojac % 3 == 0 || brojac % 5 == 0) {
        br++;
    }
}
console.log(`Ima ${br} brojeva izmedju 5 i 50 koji su deljivi sa 3 ili sa 5`);

// 15. Zadatak - Prebrojati i izracunati sumu brojeva od n do m kojime je poslednja cifra 4

n = 10;
m = 30;
br = 0;
suma = 0;
for(brojac = n; brojac <= m; brojac++) {
    if(brojac % 10 == 4) {
        suma += brojac;
        br++;
    }
}
console.log(`Prebrojati: ${br}. Suma: ${suma}`);

// 17. Zadatak - Odrediti proizvod brojeva od n do m koji su deljivi brojem a
n = 3;
m = 9;
a = 3;
proizvod = 1;
for(brojac = n; brojac <= m; brojac++) {
    if(brojac % a == 0) {
        proizvod *= brojac;
    }
}
console.log(`Proizvod brojeva od ${n} do ${m} koji su deljivi brojem ${a} je: ${proizvod}`);

// ZANIMLJIV NACIN
/*
    console.log("17. zadatak");
n = 3;
m = 9;
a = 4;
prod = 1;
let n1 = n;
while (n1 % a != 0) {
  n1++;
}
for (let i = n1; i <= m; i += a) {
  prod *= i;
}
console.log(
  `Proizvod brojeva od ${n} do ${m} koji su deljivi brojem ${a} je ${prod}`
);
*/

// 18. Zadatak - Odrediti sa koliko brojeva je deljiv uneti broj k
// 1. nacin
k = 15;
br = 0;
for(brojac = 1; brojac <= k; brojac++) {
    if(k % brojac == 0) {
        br++;
    }
}
console.log(`Broj ${k} je deljiv sa ${br} brojeva.`);

// 2. nacin - manje opterecujuj za komp
k = 1;
if(k == 1) {
    br = 1;
}
else {
    br = 2;
    for(i = 2; i <= k/2; i++) {
        if(k % i == 0) {
            br++
        }
    }
}
console.log(`Broj ${k} je delji sa ${br} brojeva.`);


// 19. Zadatak - Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom

k = 6;
br = 0;
for(brojac = 1; brojac <= k; brojac++) {
    if(k % brojac == 0) {
        br++;
    }
}
if(br == 2) {
console.log(`Broj ${k} je prost.`);
}
else {
    console.log(`Broj ${k} NIJE prost.`);
}

// obrati paznju na 1, jer 1 nije ni prost ni slozen broj

// 19. zadatak - drugi nacin

console.log(`19 zadatak drugi nacin`);
k = 14;
let prost = true;

for(brojac = 2; brojac <= k / 2; brojac++) { // a moze i brojac <= Math.sqrt(k); - to znaci kvadratni koren, to je po teoremi nekoj matematike gde kaze da moze da se proverava samo do kvadratnog korena nekog broja a ne do polovine
    if(k % i == 0) {
        prost = false;
        break; // break znaci prekini for petlju
    }
}

if(prost) { // a moze i if(prost == true)
    console.log(`Broj ${k} je prost.`);
}
else {
console.log(`Broj ${k} nije prost!`);
}

// 20. Zadatak
/*
    Napraviti tabelu sa 6 redova.
Svaki red tabele treba da ima po dve ćelije (dve kolone).
Svakom parnom redu dodati klasu „obojen“.
Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine.
*/

let divTabela = document.getElementById(`tabela`);
let tabela = `<table>`;
for(i = 1; i <= 6; i++) {
    let obojen = "belo";
    if(i % 2 == 0) {
        obojen = "roze";
    }
    tabela += 
    `<tr class="${obojen}">
        <td>Tekst</td>
        <td>Tekst</td>
    </tr>`;
}
tabela += `</table>`;
divTabela.innerHTML = tabela;