// DOM
let liZadaci = document.querySelectorAll(`li`);
let btnDodaj = document.querySelector(`#submit`);
let inputZadatka = document.querySelector(`#task`);
let ulZadaci = document.querySelector(`ul`);
let btnDodajPocetak = document.querySelector(`#dodajRadioPocetak`);
let btnDodajKraj = document.querySelector(`#dodajRadioKraj`);


// sve podatke iz podsetnika cu sacuvati u nizu
let nizZadataka = [];
if(localStorage.getItem(`zadaci`) == null) {
    // ne postoje jos uvek zadaci u memoriji
    localStorage.setItem(`zadaci`, JSON.stringify(nizZadataka)); // ova JSON funkcija pretvara niz u string kako bi localStorage.setItem mogao da barata njime (post on ocekuje stringove da mu uneses)
    
}
else {
    // Postoje zadaci u memoriji i treba ih ispisati na stranici
    nizZadataka = JSON.parse(localStorage.getItem(`zadaci`)); // JSON.parse - pretvara iz stringa u niz
    nizZadataka.forEach(zad => {
        let liZad = document.createElement(`li`); // kreiramo novi li
        liZad.textContent = zad; // upisujemo text sadrzaj u  <li>
        ulZadaci.append(liZad); // dodajemo <li> na kraju <ul>
    });
}


ulZadaci.addEventListener(`click`, e => {
    // console.log(`Kliknuto na ul`);
    // console.log(e);
    // console.log(e.target); // vraca ceo element na koji je kliknuto
    // console.log(e.target.tagName); // vraca samo tag na koji je kliknuto
    if(e.target.tagName == `LI`) {
        // e.target.classList.toggle(`nestaje`); // jedan nacin
        // ulZadaci.removeChild(e.target); // drugi nacin
        e.target.remove(); // treci nacin
        let indeksElementa = nizZadataka.indexOf(e.target.textContent); // nadji na kom indeksu je element
        nizZadataka.splice(indeksElementa, 1); // ,1 znaci obrisi tacno jedan element (posle zadatog(BAREM MISLIM DA JE TAKO) - u ovom slucaju indeksElementa)
        localStorage.setItem(`zadaci`, JSON.stringify(nizZadataka)); // ovde apdejtujemo niz koji ide u local storage
    }
});

inputZadatka.addEventListener(`keypress`, e => { // MOZE DA SE ZAKACI EVENT LISTENER NA FORMU, i umesto KEYPRESS da se kaze SUBMIT, i onda da se nesto desi
    // console.log(e.keyCode);
    let tekstZadatka = inputZadatka.value;
    console.log(tekstZadatka);
    // ako je neko kliknuo na taster `enter`, njegov keycode je 13
    if(e.keyCode === 13) {
        e.preventDefault();
        if(btnDodajKraj.checked) {
            if(inputZadatka.value.trim() == ``) { // moze se iskoristiti TRIM metoda koja ce da skida sve spejsove
                alert(`Morate ispuniti tekst polje`)
                inputZadatka.value = ``;
            }
            else {
                tekstZadatka = inputZadatka.value;
                let liNoviZadatak = document.createElement(`li`); // kreiram novi li
                liNoviZadatak.textContent = tekstZadatka; // Dodajemo tekst u li => ili .innerHTML ili .textContent ili .innerText
                ulZadaci.appendChild(liNoviZadatak); // dodajemo <li> u <ul>
                nizZadataka.push(tekstZadatka);
                inputZadatka.value = ``;
            }
        }
        if(btnDodajPocetak.checked) {
            if(inputZadatka.value.trim() == ``) { // moze se iskoristiti TRIM metoda koja ce da skida sve spejsove
                alert(`Morate ispuniti tekst polje`)
                inputZadatka.value = ``;
            }
            else {
                tekstZadatka = inputZadatka.value;
                let liNoviZadatak = document.createElement(`li`); // kreiram novi li
                liNoviZadatak.textContent = tekstZadatka; // Dodajemo tekst u li => ili .innerHTML ili .textContent ili .innerText
                ulZadaci.prepend(liNoviZadatak); // dodajemo <li> u <ul>
                nizZadataka.unshift(tekstZadatka);
                inputZadatka.value = ``;
            }
        }
        localStorage.setItem(`zadaci`, JSON.stringify(nizZadataka));
    }
});

// inputZadatka.addEventListener(`keypress`, e => {
//     if(e.key === `Enter`) {
//         e.preventDefault();
//         /*
//         a moze i sa let radioButton = document.querySelector(`input[name=`add]:checked`);
//         if(radioButton.balue == beggin) {
//             i onda tu idemo append
//         }
//         */
//         if(btnDodajKraj.checked) {
//             if(inputZadatka.value.trim() == ``) { // moze se iskoristiti TRIM metoda koja ce da skida sve spejsove
//                 alert(`Morate ispuniti tekst polje`)
//                 inputZadatka.value = ``;
//             }
//             else {
//                 tekstZadatka = inputZadatka.value;
//                 let liNoviZadatak = document.createElement(`li`); // kreiram novi li
//                 liNoviZadatak.textContent = tekstZadatka; // Dodajemo tekst u li => ili .innerHTML ili .textContent ili .innerText
//                 ulZadaci.appendChild(liNoviZadatak); // dodajemo <li> u <ul>
//                 inputZadatka.value = ``;
//             }
//         }
//         if(btnDodajPocetak.checked) {
//             if(inputZadatka.value.trim() == ``) { // moze se iskoristiti TRIM metoda koja ce da skida sve spejsove
//                 alert(`Morate ispuniti tekst polje`)
//                 inputZadatka.value = ``;
//             }
//             else {
//                 tekstZadatka = inputZadatka.value;
//                 let liNoviZadatak = document.createElement(`li`); // kreiram novi li
//                 liNoviZadatak.textContent = tekstZadatka; // Dodajemo tekst u li => ili .innerHTML ili .textContent ili .innerText
//                 ulZadaci.prepend(liNoviZadatak); // dodajemo <li> u <ul>
//                 inputZadatka.value = ``;
//             }
//         }
//     }
// });