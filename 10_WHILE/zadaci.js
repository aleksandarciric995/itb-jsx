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
const n = 10;
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