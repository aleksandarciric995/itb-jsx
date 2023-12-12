/////////////////////////////////////////////////////////
// VEZBANJE
/////////////////////////////////////////////////////////

// Zadatak 3
/*
Napisati funkciju neparan koja za uneti ceo broj n vraća tekst “Broj je neparan” ukoliko je u pitanju neparan broj ili vraća tekst “Broj je paran” ukoliko broj n nije neparan.
*/

function neparan(n) {
    let neparanBroj = `Broj je neparan.`;
    if(n % 2 == 0) {
        neparanBroj = `Broj je paran.`;
    }
    return neparanBroj;
}
console.log(neparan(4));

// Zadatak 4

/*
Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
*/

function maks2(r1, r2) {
    if(r1 > r2) {
        return r1;
    }
    else {
        return r2;
    }
}

console.log(maks2(6, 5));


function maks4(a, b, c, d) {
    let veciPrvaDva = maks2(a, b);
    let veciDrugaDva = maks2(c, d);

    return maks2(veciPrvaDva, veciDrugaDva);
}
console.log(maks4(51, 6, 7 ,8));

// BOLJI NACIN

function maks42(a, b, c, d) {
    return maks2(maks2(a, b), maks2(c, d))
}

console.log(maks42(1, 5, 6, 12));

// 5. ZADATAK
// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

function prikaziSliku(adresa) {
    document.write(`<img src="${adresa}">`)
}
prikaziSliku("https://www.stamparijakaca.com/files/canvas.jpg");
prikaziSliku("1.jpg")

// 5. ZADATAK - KOMPLEKSNIJE
// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike i prosledjen id elementa u kome ta slika treba da se prikaze.
function prikaziSlikuUElementu(putanja, id) {
    let element = document.getElementById(id);
    element.innerHTML = `<img src="${putanja}">`;
}
prikaziSlikuUElementu("1.jpg", "slika1");

// 6. ZADATAK
/*
Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
*/
function bojiTekstParagrafa(boja) {
    document.write(`<p style="color:${boja}"> Neki tekst paragrafa.</p>`)
}
bojiTekstParagrafa(`red`);

// 7. zadatak
/*
Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
*/
function sedmiDan(n) {
    if (n % 7 == 0) {
        console.log(`Nedelja`);
    }
    else if (n % 7 == 1) {
        console.log(`Ponedeljak`);
    }
    else if (n % 7 == 2) {
        console.log(`Utorak`);
    }
    else if (n % 7== 3) {
        console.log(`Sreda`);
    }
    else if (n % 7 == 4) {
        console.log(`Cetvrtak`);
    }
    else if (n % 7 == 5) {
        console.log(`Petak`);
    }
    else if (n % 7 == 6) {
        console.log(`Subota`);
    }
}
sedmiDan(10);

// n % 7 == 0 ---------- KAZE MU DA IDE CIKLICNO NAKON STO DODJE DO 7!!!

// RADJENO SAMOSTALNO NAKON CASA
/*
Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić. 
*/
function pozdrav(ime, prezime) {
    console.log(`Zdravo, ${ime} ${prezime}`);
}
pozdrav(`Aleksandar`, `Ciric`);

/*
Napisati funkciju zbir koja računa zbir dva realna broja.
Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.
*/
function zbir1(r1, r2) {
    let zbirBrojeva = r1 + r2;
    return zbirBrojeva;
}
console.log(zbir1(5, 6));

console.log(`PROBA`);
function zbir(br1, br2) {
    let rezultat = br1 + br2;
    console.log(`${br1} + ${br2} = ${rezultat}`);
}
zbir(16, 21);

// TEST TEST TEST
function zbir2(r3, r4) {
    let zbir1Brojeva = r3 + r4;
    console.log(zbir1Brojeva);

}

zbir2(5, 66);
/*
Napisati funkciju neparan koja za uneti ceo broj n vraća tekst “Broj je neparan” ukoliko je u pitanju neparan broj ili vraća tekst “Broj je paran” ukoliko broj n nije neparan.
*/
function neparan2(n2) {
    if (n2 % 2 == 0) {
        return `Broj ${n2} je neparan`;
    }
    else {
        return `Broj ${n2} je paran.`
    }
}
neparan2(3);

/*
Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja. U oba slučaja, brojevi su međusobno različiti.
*/

function max2(m1, m2) {
    if (m1 > m2) {
        return m1;
    }
    else {
        return m2;
    }
}
console.log(max2(5, 4));

function max4(m1, m2, m3, m4) {
    let broj1 = max2(m1, m2);
    let broj2 = max2(m3, m4);
    return max2(broj1, broj2);
}

console.log(max4(3312, 44, 5, 6));
console.log(`test`);
