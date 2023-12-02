let a = 3;
let b = 5;
if(a > b) {
    console.log("a je vece od b");
}
else {
    console.log("a nije vece od b");
}

/*
 1. Za unetu zapreminu proizvoda, u paragrafu zelenom bojom ispisati “Pack up”, ukoliko je proizvod zapremine manje ili jednake 100ml. 
U suprotnom u paragrafu crvenom bojom ispisati “Throw away”.*/

let zapremina = 111;
if(zapremina <= 100) {
    document.write("<p style='color:green;'>Pack up</p>");
}
else {
    document.write("<p style='color:red;'>Throw away</p>");
}

// Vezba 3

let datum = new Date(); // PREUZIMA CITAV OBJEKAT IZ KOJEG POSLE MOZEMO DA VADIMO PODATKE TIMA GODINA, DAN, MESEC itd
let x = 2009;
let god = datum.getFullYear();
console.log(god);
let y = 18 - (god - x);

if((god - x) >= 18) {
    document.write(`<img src="https://i.pinimg.com/originals/a4/69/0e/a4690e96876e512e8647aa53f3557b53.jpg" style="width: 300px;">`)
}
else {
    document.write(`<p>${y}</p>`)
    // OVDE SAM MOGAO DA NAPRAVIM Y, A NE GORE, ALI ONDA BI SAMO TU VAZILA TA PROMENLJIVA AKO BIH STAVIO LET, AKO BIH STAVIO VAR, VAZILA BI SVUGDE
}

// VEZBA 3 TACNO PREMA TEKSTU
// AKO OSOBA VAS OVE GODINE PUNI 18 godina
if((god - x) == 18) {
    console.log("Osoba ove godine postaje punoletna");
    document.write(`<img src="https://i.pinimg.com/originals/a4/69/0e/a4690e96876e512e8647aa53f3557b53.jpg" style="width: 300px;">`)
}
// Ako jos uvek nije punoletna, ispisujemo koliko ostaje do punoletstva
if((god - x) < 18) {
    console.log(`<p>Do punoletstva ostalo je ${y} godina</p>`);
}


// Vezba 2

let t = 0;

if(t>=0) {
    document.write(`<p style="color:red">Temperatura u plusu</p>`)
}
else {
    document.write(`<p style="color:blue">Temperatura u minusu</p>`)
}

// Vezba 2 drugi nacin preko vec postojeceg paragrafa

t = 15;
if(t >= 0) {
    console.log(`Temperatura je u plusu`);
    let paragraf = document.getElementById(`temperatura`); // PREUZMEM PARAGRAF IZ HTML PO NJEGOVOM ID
    paragraf.innerHTML = `Temperatura je u plusu`; // UPISEM U PARAGRAF PREKO .innerHTML
    paragraf.style.color = `red`;
}
else {
    console.log(`Temperatura je u minusu`);
    let paragraf = document.getElementById(`temperatura`);
    paragraf.innerHTML = `Temperatura je u minusu`;
    paragraf.style.color = `blue`;
}

// Vezba 4

let trenutnoVreme = new Date();
let sati = trenutnoVreme.getHours();
console.log(sati);
if (sati >= 12) {
    document.write(`Podne!`);
}
else {
    document.write(`Jutro!`);
}

//Vezba 5
let pol = "z";

if(pol == "m") {
    document.write(`<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Male_symbol_%28heavy_blue%29.svg/220px-Male_symbol_%28heavy_blue%29.svg.png"`)
}
else {
    document.write(`<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Venus_symbol_%28heavy_pink%29.svg/220px-Venus_symbol_%28heavy_pink%29.svg.png"`)
}

