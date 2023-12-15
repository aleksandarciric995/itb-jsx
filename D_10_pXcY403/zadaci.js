// ZADATAK 1 Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let kupovina = [`so`, `secer`, `brasno`, `biber`];
let kupovinaLista = niz => {
    let unorderedList = ``;
    for(let i = 0; i < niz.length; i++) {
        unorderedList += `<li>${niz[i]}</li>`;
    }
    document.getElementById(`test`).innerHTML += `<ul>${unorderedList}</ul>`
}
kupovinaLista(kupovina);


// ZADATAK 2 Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

let timovi = [`zvezda`, `partizan`, `lejkers`, `detroit`];
let kosarkaskiTimovi = niz => {
    let sadrzajTabele = ``;
    for(let i = 0; i < niz.length; i++) {
        sadrzajTabele += `<tr><td style="border: 1px solid black";>${niz[i]}</td></tr>`;
    }
    document.getElementById(`kosarka`).innerHTML += `<table style="border: 1px solid black";>${sadrzajTabele}</table>`;
}
kosarkaskiTimovi(timovi);

/* ZADATAK 3 Dat je niz stringova čiji su članovi putanje do slika. 
Prikazati sve slike u html dokumentu, pri čemu su putanje da slika one putanje koje su navedene u nizu.
*/

let nizSlika = [`https://www.slikomania.rs/fotky6509/fotos/CFAZH6215E1.jpg`, `https://static.nationalgeographic.rs/Picture/6985/jpeg/Vincent_van_Gogh___National_Gallery_of_Art_681308748`, `https://www.slikomania.rs/fotky6509/fotos/XOBCHFL005-1.jpg`, `https://www.slikomania.rs/fotky6509/fotos/CWFTR026.jpg`, `https://www.slikomania.hr/fotky6354/fotos/umjetnicke-slike_YOBFB457E1.jpg`];

let nizSlikaFunkcija = niz => {
    for(let i = 0; i < niz.length; i++) {
        document.body.innerHTML += `<img src="${niz[i]}">`;
    }
}
nizSlikaFunkcija(nizSlika);
