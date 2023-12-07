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