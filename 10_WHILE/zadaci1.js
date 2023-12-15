/* Napisati program koji unetom broju N:
a) Sabira sve cifre
b) Određuje aritmetičku sredinu cifara
c) Ispisuje cifre u obrnutom redosledu */
// a)
let n = 123;
let zbirCifara = 0;
let brojCifara = 0;
let obrnuteCifre = ``;
let zadnjaCifra = 0;
let brojObrnut = 0;
while(n > 0) { 
    zbirCifara += n % 10; 
    zadnjaCifra = n % 10;
    brojObrnut += (n % 10) * (10 ** (brojCifara));
    n = Math.floor(n / 10); 
    brojCifara++; // b)
    obrnuteCifre += zadnjaCifra;
}
console.log(brojObrnut);
console.log(zbirCifara);
// b)
console.log(`Aritmeticka sredina je ${zbirCifara / brojCifara}`);
console.log(brojCifara);
// c)
console.log(obrnuteCifre);

// n = 123;
// while(brojCifara > 0) {
//     brojObrnut += (n % 10) * (10 ** (brojCifara-1));
//     n = Math.floor(n / 10);
//     brojCifara--;
// }
console.log(`Obrnut broj kao broj ${brojObrnut}`);
