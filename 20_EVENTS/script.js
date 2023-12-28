// 1. Dohvatiti element na koji zelimo da postavimo osluskivac
let btnHello = document.getElementById(`hello`);

// 2. Postavimo osluskivac na elemt koji smo dohvatili
btnHello.addEventListener(`click`, () => {
    console.log(`Hello!`);
});

btnHello.addEventListener(`dblclick`, () => {
    console.log(`Hello hello!!`);
});

// 1. zadatak
let brojac = 1;
let btnBroji = document.getElementById(`broji`); // 1.
let pIspisBroja = document.getElementById(`ispisBroja`);
btnBroji.addEventListener(`click`, () => { // 2.
    console.log(`Broj je ${brojac}`);
    // 2. zadatak
    pIspisBroja.innerHTML = `Broj je ${brojac}`;
    brojac++;
});

// 3. zadatak
let b = 0;

let btnPlus = document.getElementById(`plus`);
let btnMinus = document.getElementById(`minus`);

btnPlus.addEventListener(`click`, () => {
    if(b < 0) {
        b++;
        document.querySelector(`span`).innerHTML = 0;
    }
    else {
        b++;
        document.querySelector(`span`).innerHTML = b;
    }
});

btnMinus.addEventListener(`click`, () => {
    if(b <= 0) {
        b--;
        document.querySelector(`span`).innerHTML = 0;
    }
    else {
        b--;
        document.querySelector(`span`).innerHTML = b;
    }
});

// 4. zadatak je iznad

// 5. zadatak
/*
Napraviti input polje i dugme.
U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.
*/

let btnIspisiTekst = document.getElementById(`ispisiTekst`);
let pIspisTeksta = document.getElementById(`ispisTeksta`);
let inputTekst = document.getElementById(`tekst`);

btnIspisiTekst.addEventListener(`click`, () => {
    let preuzmiTekst = inputTekst.value;
    pIspisTeksta.innerHTML = `Zdravo ${preuzmiTekst}`;
});

btnIspisiTekst.addEventListener(`dblclick`, () => {
    // let test = document.getElementById(`male`).value;
    let test = document.getElementsByName(`pol`).value;
    pIspisTeksta.innerHTML = test;
});