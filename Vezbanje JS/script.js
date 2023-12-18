let datum = new Date();
let minut = datum.getMinutes();
let sat = datum.getHours();
console.log(minut);
console.log(sat);
let minutaPoslePonoci = sat * 60 + minut;
console.log(`Proslo je ${minutaPoslePonoci} minuta od ponoci`);

// zadatak 2

let unetoVreme = (a, b) => {
    if(((a < 0) || (a > 23)) || b < 0 || b > 59) {
        console.log(`Molimo unesite odgovarajuce vreme`);
    }  
    else {
        console.log(`Proslo je ukupno ${a * 60 + b}minuta od ponoci`);
    }
}
unetoVreme(0, 59);

let RSDtoEUR = 117.3;

let rsdTOeur = (a) => {
    return a / RSDtoEUR;
}
console.log(rsdTOeur(234.6));
let eurTOrsd = (a) => {
    return a * RSDtoEUR;
}
console.log(eurTOrsd(200));
let RSDtoDOL = 105.6;

let dolTOeur = a => {
    return a * RSDtoDOL / RSDtoEUR;
}

console.log(dolTOeur(111.07954545454545));

for(let i = 1; i<=10; i++) {
    for(let j = 1; j <= i; j++) {
        document.write(`*`);
    }
    document.write(`<br>`);
}

/* 
3. Npisati program kojim se izračunava i štampa srednja vrednost sledećeg niza od deset brojeva:1, 4, 9, ..., 81, 100 .
*/
let suma = 0;
for(let i = 1; i <= 10; i++) {
    suma += i*i;
}
let srednjaVrednost = suma / 10;
document.writeln(`${srednjaVrednost}<br>`);

/*
Napisati program kojim se štampaju brojevi od 1 do 10, i pored svakog označava da li je paran ili neparan:
*/
let i = 1;
while(i <= 10) {
    if(i%2==0) {
        document.writeln(`${i} je paran<br>`);
    }
    else{
        document.writeln(`${i} je neparan<br>`);
    }
    i++;
}

/*
5. Napisati program kojim se štampaju prvih 20 pozitivnih celih brojeva i njihovi faktorijeli. (Faktorijel broja 1 je 1, faktorijel broja 2 je 1 * 2 = 2, faktorijel broja 3 je 1 * 2 * 3 = 6, faktorijel broja 4 je 1 * 2 * 3 * 4 = 24, itd.) 
*/
let faktorijel = 1;
for(let i = 1; i <= 5; i++) {
    
    console.log(`Faktorijel broja ${i} je ${faktorijel *= i}`);
}


// zadtak 11. Skalarni proizvod dva niza, a i b, je suma proizvoda njihovih članova  a[i] i b[i]. 
/*
Napisati funkciju skalarniProizvod(a,b)koja ima dva parametra koji su nizovi realnih brojeva. Funkcija vraća jedan realan broj jednak skalarnom proizvodu nizova. Ako su nizovi različite dužine funkcija vraća vrednost 0.
*/

let nizAa = [2, 3, 4];
let nizBb = [3, 4, 5];
let nizC = [2, 3, 4, 5];
function skalarniProizvod(niz1, niz2){
    suma = 0;
    if(niz1.length != niz2.length) {
        return 0;
    }
    else {
        for(let i = 0; i < niz1.length; i++) {
            suma += (niz1[i] * niz2[i]);
        }
    }
    return suma;
}
console.log(skalarniProizvod(nizAa, nizBb));