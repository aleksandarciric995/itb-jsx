// DOM
let inputNumber1 = document.getElementById(`br1`);
let inputNumber2 = document.getElementById(`br2`);
let btnRacunaj = document.getElementById(`racunaj`);
let btnResetuj = document.getElementById(`resetuj`);
let rezultat = document.getElementById(`rezultat`);

btnRacunaj.addEventListener(`click`, (e) => {
    e.preventDefault();
    let br1 = Number(inputNumber1.value);
    let br2 = Number(inputNumber2.value);
    let inputOperacija = document.querySelector(`input[name="operacija"]:checked`);
    let rez = `nedefinisano`;
    let operacija = inputOperacija.value;
    let o = ``;

    if(operacija == `sabiranje`) {
        rez = br1 + br2;
        o = `+`;
    }
    else if(operacija == `oduzimanje`) {
        rez = br1 - br2;
        o = `-`;
    }
    else if(operacija == `mnozenje`) {
        rez = br1 * br2;
        o = `*`;
    }
    else {
        if(br2 == 0) {
            alert(`Nije dozvoljeno deliti nulom!`);
            // br1 = br2 = o = rez = ``;
            o = `/`;
        }
        else {
            rez = br1 / br2;
            o = `/`;
        }
    }
    rezultat.innerHTML = `${br1} ${o} ${br2} = ${rez}`;
});

btnResetuj.addEventListener(`click`, (e) => {
    rezultat.innerHTML = ``;   
})
