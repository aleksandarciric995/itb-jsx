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

// 6. zadatak
/*
Dopuniti 5. zadatak dodavanjem radio button polja gde korisnik može odabrati svoj pol (muški, ženski ili neopredeljen). 
Nakon duplog klika na dugme, u konzoli ispisati pol koji je osoba odabrala.
*/

let radioMuski = document.getElementById(`muski`);
let radioZenski = document.getElementById(`zenski`);
let radioNeopredeljen = document.getElementById(`neopredeljen`);
btnIspisiTekst.addEventListener(`dblclick`, () => {
    // 1. nacin
    if(radioMuski.checked) {
        console.log(`Osoba muskog pola`);
    }
    else if(radioZenski.checked) {
        console.log(`Osoba zenskog pola`);
    }
    else if(radioNeopredeljen.checked) {
        console.log(`Osoba je neopredeljena`);
    }
    else {
        console.log(`Niste odabrali pol.`); //jer imamo u HTMLu za neopredeljen po defaultu checked nikada nece uci u ovu else granu
    }

    // 2. nacin
    let checkedPol = document.querySelector(`input[name='pol']:checked`); // SELEKTUj input polje ciji atribut name ima vrednost pol, i pri tome je checked
    console.log(`Osoba je ${checkedPol.value} pola`);

    // 3. nacin
    // selektovati sve radio buttone prema name attributu - getElementByName
    let polRadios = document.getElementsByName(`pol`);
    polRadios.forEach(radioButton => {
        // console.log(radioButton.checked);
        if(radioButton.checked) {
            console.log(`Osoba je ${radioButton.value} pola.`);
        }
    });

    // 4. nacin
    // SElektuj mi sve radio button po name atributu - querySelectorAll
    let polRadiosInput = document.querySelectorAll(`input[name='pol']`);
    polRadiosInput.forEach(rb => {
        if(rb.checked) {
            console.log(`Osoba je ${rb.value} pola.`);
        }
    });
});

// ZADATAK 7 
kvadrirajBtn.addEventListener(`click`, () => {
    let brojKvadrat = document.getElementById(`kvadrirajInput`);
    // console.log(brojKvadrat);
    document.getElementById(`rezultat`).innerHTML = brojKvadrat.value **2;
});

prepoloviBtn.addEventListener(`click`, () => {
    let brojPola = document.getElementById(`prepoloviInput`);
    document.getElementById(`rezultat`).innerHTML = brojPola.value / 2;
});

povrsinaBtn.addEventListener(`click`, () => {
    let povrsinaKruga = document.getElementById(`povrsinaInput`).value;
    document.getElementById(`rezultat`).innerHTML = povrsinaKruga ** 2 * Math.PI;
});

