/* Napisati program koji unetom broju N:
a) Sabira sve cifre
b) Određuje aritmetičku sredinu cifara
c) Ispisuje cifre u obrnutom redosledu */
// a)
let n = 123456789;
let zbirCifara = 0;
let brojCifara = 0;
let obrnuteCifre = ``;
let zadnjaCifra = 0;
while(n > 0) { 
    zbirCifara += n % 10; 
    zadnjaCifra = n % 10;
    n = Math.floor(n / 10); 
    brojCifara++; // b)
    obrnuteCifre += `${zadnjaCifra}`;
}
console.log(zbirCifara);

// b)
console.log(`Aritmeticka sredina je ${zbirCifara / brojCifara}`);
// c)
console.log(obrnuteCifre);