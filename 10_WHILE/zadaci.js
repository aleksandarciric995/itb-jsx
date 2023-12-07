/*
1 -Ispisati brojeve od 1 do 20:
a-Svaki u istom redu
b-Svaki u novom redu
2-Ispisati brojeve od 20 do 1.
3-Ispisati parne brojeve od 1 do 20.
4-Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje
5-Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira
*/

// zadatak 1b
let i = 1;
while(i <= 20) {
    console.log(i);
    i++
}

// zadatak 1a
i = 1;
let poruka = "";
while(i <= 20) {
    poruka = poruka + i + " ";
    i++;
}
console.log(poruka);

// Zadatak 2
// prvi nacin
i = 20;
while(i >= 1) {
    console.log(i);
    i--;
}

// drugi nacin
i = 1;
while(i <= 20) {
    console.log(21 - i);
    i++;
}

/*
i = 1 => 20 = 21 - i
i = 2 => 19 = 21 - i
i = 3 => 18 = 21 - i
..........
i = 19 => 2
i = 20 => 1
*/

console.log(`VEZBA 3`);
// Zadatak 3
// prvi nacin
i = 1;
while(i <= 20) {
    if(i%2 == 0) {
        console.log(i);
    }
    i++
}
console.log(`Drugi nacin`);
// drugi nacin
i = 2;
while(i <= 20) {
    console.log(i);
    i = i + 2; // i += 2
}

console.log(`CETVRTI ZADATAK`);
// Zadatak 4
let colors = ["red", "blue", "green"];
let n = 10;
i = 0;
while (i < n) {
const paragraphHTML = `<p style="color: ${colors[i % 3]}">Ovo je učenje o petljama</p>`;
document.write(paragraphHTML);
i++;
}

colors = ["blue", "green", "red"]
i = 0;


while(i < n) {
    const paragraf = `<p style="color: ${colors[i % 3]}">Ovo je tesko</p>`;
    document.write(paragraf);
    i++
}

// ZADATAK 4 ali na Stefanov nacin

// n = 11;
// i = 1;
// while(i <= n) {
//     if(i % 3 == 1) {
//         document.body.innerHTML = document.body.innerHTML + `<p class='plava'>Paragraf broj ${i}</p>`; // ili mozemo da kazemo document.body.innerHTML +=  `<p>Paragraf broj ${i}</p>`;
//     }
//     else if(i % 3 == 2) {
//         document.body.innerHTML +=  `<p class='crvena'>Paragraf broj ${i}</p>`;
//     }
//     else {
//         document.body.innerHTML +=  `<p class='zelena'>Paragraf broj ${i}</p>`;
//     }
    
//     i++ 
// }

n = 11;
i = 1;
while(i <= n) {
    let klasa; 
    if(i % 3 == 1) {
        klasa = "plava";
    }
    else if(i % 3 == 2) {
        klasa = "crvena";
    }
    else {
       klasa = "zelena";
    }
    document.body.innerHTML += `<p class='${klasa}'>Paragraf broj ${i} </p>`;
    i++ 
}

// Zadatak 6 Odrediti sumu brojeva od 1 do 100
i = 1;
let suma = 0;
while(i <= 100) {
    suma = suma + i;
    i++
}
console.log(`Suma brojeva od 1 do 100 jednaka je ${suma}`);

// Zadatak 7 - Odrediti sumu brojeva od 1 do n
i = 1;
suma = 0;
n = 10;
while(i <= 10) {
    suma = suma + i;
    i++;
}
console.log(`Suma brojeva od 1 do ${n} jednaka je: ${suma}`);

// Zadatak 8 - Odrediti sumu brojeva od n do m
let m;
suma = 0;
n = 1;
m = 100;
while(n <= m) {
    suma = suma + n;
    n++; 
}
console.log(suma);

// Zadatak 9 - Odrediti proizvod brojeva od n do m

n = 1;
m = 5;
let proizvod = 1;
while(n <= m) {
    proizvod = proizvod * n;
    n++
}
console.log(proizvod);

// Zadatak 10 - Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m
console.log(`Zadatak 10`);
n = 2;
m = 5;
suma = 0;
while(n <= 5) {
    if(n % 2 == 0) {
        suma = suma + (n * n);
    }
    else {
        suma = suma + (n * n * n);
    }
    n++;
}
console.log(`Suma kvadrata parnih i neparnih brojeva kubova trt mrt je ${suma}`);

/*
STEFANOV NACIN
n = 2;
m = 5;
let sumaKvadrataParnih = 0;
let sumaKubovaNeparnih = 0;
i = n;
while(i <= n){
    if(i % 2 == 0){
        sumaKvadrataParnih += (i ** 2);
    }
    else {
        sumaKubovaNeparnih += (i ** 3);
    }
    i++;
}
console.log(`Suma kvadrata parnih brojeva od ${n} do ${m} jednaka je: ${sumaKvadrataParnih}`);
console.log(`Suma kubova neparnih brojeva od ${n} do ${m} jednaka je: ${sumaKubovaNeparnih}`);
*/

console.log(suma);

// Zadatak 11 - Odrediti sa koliko brojeva je deljiv uneti broj k
console.log(`Zadatak 11`);
let k = 10;
i = 1;
let g = 0;
while(i <= k) {
    if(k % i == 0){
        i++;
        g++;
    }
    else {
        i++;
    }
}
console.log(`Broj ${k} je deljiv sa ${g} brojeva.`);

/* 
STEFANOV NACIN
k = 9;
i = 1;
let brojDelioca = 0;

while(i < k) {
    if(k % i == 0) {
        brojDelioca++;
    }
    i++
}
console.log(`Broj delioca broja ${k} jednak je ${brojDelioca}`);
*/

// Zadatak 12 - Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
console.log(`Zadatak 12`);
k = 11;
i = 1;
g = 0;
while(i <= k) {
    if(k % i == 0){
        i++;
        g++;
    }
    else {
        i++;
    }
}
console.log(g);
if(g == 2) {
    console.log(`Broj ${k} je prost`);
}

/* 12 zadatak na STEFANOV nacin
n = 9;
i = 1;
brojDelioca = 0;

while(i <= n) {
    if(n % i == 0) {
        brojDelioca++;
    }
    i++
}
if(brojDelioca == 2) {
    console.log(`Broj ${n} je prost broj.`);
}
else {
    console.log(`Broj ${n} je slozen`);
}
*/

/* Napisati program koji unetom broju N:
a) Sabira sve cifre
b) Određuje aritmetičku sredinu cifara
c) Ispisuje cifre u obrnutom redosledu */

let N = 11;

let N1 = Math.floor(N / 10);
console.log(N1);
let N2 = N - (N1 * 10);
console.log(N2);
N2 = N % 10;
console.log(N2);

